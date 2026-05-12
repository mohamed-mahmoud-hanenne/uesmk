// src/app/core/trip-reasons.config.ts
// To add/edit reasons: update this array.
// Each reason has a stable key (stored in DB) and labels per language.

export interface TripReason {
  key: string;
  fr: string;
  ar: string;
}

export const TRIP_REASONS: TripReason[] = [
  {
    key: 'renouvellement_bourse_amci',
    fr: 'Renouvellement de la bourse AMCI',
    ar: 'تجديد منحة AMCI',
  },
  {
    key: 'renouvellement_bourse_etat',
    fr: "Renouvellement de la bourse de l'État",
    ar: 'تجديد منحة الدولة',
  },
  {
    key: 'depot_assurance',
    fr: 'Dépôt pour assurance',
    ar: 'إيداع وثائق التأمين',
  },
  {
    key: 'prise_en_charge',
    fr: 'Prise en charge (ambassade)',
    ar: 'شهادة الكفالة (السفارة)',
  },
  {
    key: 'laissez_passer',
    fr: 'Laissez-passer',
    ar: 'تصريح المرور',
  },
  {
    key: 'lettre_excuse',
    fr: "Lettre d'excuse",
    ar: 'رسالة اعتذار',
  },
  {
    key: 'renouvellement_passeport',
    fr: 'Renouvellement du passeport',
    ar: 'تجديد جواز السفر',
  },
  {
    key: 'conformite_nom',
    fr: 'Attestation de conformité de nom',
    ar: 'شهادة مطابقة الاسم',
  },
  {
    key: 'autre',
    fr: 'Autre (préciser dans la description)',
    ar: 'أخرى (يُرجى التوضيح في الوصف)',
  },
];
