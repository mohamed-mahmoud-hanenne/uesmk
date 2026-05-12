// src/components/rabat-trips/rabat-trips.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TRIP_REASONS, TripReason } from '../../app/core/trip-reasons.config';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
} from '../../app/core/supabase.config';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface TripRequestPayload {
  full_name: string;
  phone: string;
  email: string | null;
  establishment: string | null;
  destination: 'amci' | 'ambassade' | 'both';
  reason_key: string;
  description: string | null;
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
  lang = 'fr';
  status: FormStatus = 'idle';

  form: TripRequestPayload = {
    full_name: '',
    phone: '',
    email: null,
    establishment: null,
    destination: 'amci',
    reason_key: '',
    description: null,
  };

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    this.lang = this.translate.currentLang || 'fr';
    this.translate.onLangChange.subscribe((e) => (this.lang = e.lang));
  }

  reasonLabel(r: TripReason): string {
    return this.lang === 'ar' ? r.ar : r.fr;
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

    const payload: TripRequestPayload = {
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
          this.status = 'success';
          this.resetForm();
        },
        error: () => {
          this.status = 'error';
        },
      });
  }

  retry() {
    this.status = 'idle';
  }

  isValid(): boolean {
    return (
      this.form.full_name.trim().length > 0 &&
      this.form.phone.trim().length > 0 &&
      this.form.reason_key.length > 0
    );
  }

  private resetForm() {
    this.form = {
      full_name: '',
      phone: '',
      email: null,
      establishment: null,
      destination: 'amci',
      reason_key: '',
      description: null,
    };
  }
}
