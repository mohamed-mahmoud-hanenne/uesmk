// src/components/rabat-trips/rabat-trips.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  TRIP_REASONS,
  ESTABLISHMENTS,
  TripReason,
  Establishment,
} from '../../app/core/trip-reasons.config';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
} from '../../app/core/supabase.config';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface TripRequestPayload {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  establishment: string | null;
  destination: 'amci' | 'ambassade' | 'both';
  reason_key: string;
  description: string | null;
}

export interface LocalDemand {
  local_id: string;
  db_id: string | null;
  full_name: string;
  phone: string;
  email: string | null;
  establishment: string | null;
  destination: 'amci' | 'ambassade' | 'both';
  reason_key: string;
  description: string | null;
  submitted_at: string;
  deleted: boolean;
}

const DEMANDS_KEY = 'rt_demands_v1';

function loadDemands(): LocalDemand[] {
  try {
    return JSON.parse(localStorage.getItem(DEMANDS_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveDemands(demands: LocalDemand[]) {
  localStorage.setItem(DEMANDS_KEY, JSON.stringify(demands));
}

function uuid(): string {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

@Component({
  selector: 'app-rabat-trips',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './rabat-trips.component.html',
  styleUrls: ['./rabat-trips.component.scss'],
})
export class RabatTripsComponent implements OnInit {
  reasons: TripReason[] = TRIP_REASONS;
  establishments: Establishment[] = ESTABLISHMENTS;
  lang = 'ar';
  status: FormStatus = 'idle';

  demands: LocalDemand[] = [];
  showDemands = false;
  deletingId: string | null = null;

  form: TripRequestPayload = this.emptyForm();

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.lang = this.translate.currentLang || 'ar';
    this.translate.onLangChange.subscribe((e) => (this.lang = e.lang));
    this.demands = loadDemands().filter((d) => !d.deleted);
  }

  reasonLabel(r: TripReason): string {
    return this.lang === 'ar' ? r.ar : r.fr;
  }

  estLabel(e: Establishment): string {
    return this.lang === 'ar' ? e.ar : e.fr;
  }

  submit() {
    if (!this.isValid()) return;
    this.status = 'loading';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=minimal',
    });

    // Generate id client-side — avoids needing SELECT RLS for return=representation
    const db_id = uuid();
    const payload: TripRequestPayload = {
      id: db_id,
      full_name: this.form.full_name.trim(),
      phone: this.form.phone.trim(),
      email: this.form.email?.trim() || null,
      establishment: this.form.establishment?.trim() || null,
      destination: this.form.destination,
      reason_key: this.form.reason_key,
      description: this.form.description?.trim() || null,
    };

    this.http
      .post(`${SUPABASE_URL}/rest/v1/trip_requests`, payload, { headers })
      .subscribe({
        next: () => {
          const demand: LocalDemand = {
            local_id: uuid(),
            db_id,
            full_name: payload.full_name,
            phone: payload.phone,
            email: payload.email,
            establishment: payload.establishment,
            destination: payload.destination,
            reason_key: payload.reason_key,
            description: payload.description,
            submitted_at: new Date().toISOString(),
            deleted: false,
          };
          const all = loadDemands();
          all.unshift(demand);
          saveDemands(all);
          this.demands = all.filter((d) => !d.deleted);
          this.status = 'success';
          this.resetForm();
        },
        error: () => {
          this.status = 'error';
        },
      });
  }

  deleteDemand(demand: LocalDemand) {
    this.deletingId = demand.local_id;

    if (!demand.db_id) {
      this.removeLocally(demand.local_id);
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=minimal',
    });

    const url = `${SUPABASE_URL}/rest/v1/trip_requests?id=eq.${encodeURIComponent(demand.db_id)}`;

    this.http.patch(url, { deleted_by_user: true }, { headers }).subscribe({
      next: () => this.removeLocally(demand.local_id),
      error: () => this.removeLocally(demand.local_id),
    });
  }

  private removeLocally(localId: string) {
    const all = loadDemands().map((d) =>
      d.local_id === localId ? { ...d, deleted: true } : d,
    );
    saveDemands(all);
    this.demands = all.filter((d) => !d.deleted);
    this.deletingId = null;
  }

  retry() {
    this.status = 'idle';
  }

  isValid(): boolean {
    return (
      this.form.full_name.trim().length > 0 &&
      this.form.phone.trim().length > 0 &&
      !!this.form.destination &&
      this.form.reason_key.length > 0
    );
  }

  private emptyForm(): TripRequestPayload {
    return {
      id: '',
      full_name: '',
      phone: '',
      email: null,
      establishment: null,
      destination: 'amci',
      reason_key: '',
      description: null,
    };
  }

  private resetForm() {
    this.form = this.emptyForm();
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleString(
      this.lang === 'ar' ? 'ar-MA' : 'fr-MA',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      },
    );
  }

  destLabel(key: string): string {
    const map: Record<string, { fr: string; ar: string }> = {
      amci: { fr: 'AMCI', ar: 'AMCI' },
      ambassade: { fr: 'Ambassade', ar: 'السفارة' },
      both: { fr: 'Les deux', ar: 'كلاهما' },
    };
    return this.lang === 'ar' ? (map[key]?.ar ?? key) : (map[key]?.fr ?? key);
  }

  reasonLabelByKey(key: string): string {
    const r = this.reasons.find((x) => x.key === key);
    if (!r) return key;
    return this.lang === 'ar' ? r.ar : r.fr;
  }
}
