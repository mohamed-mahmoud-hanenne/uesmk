// src/app/core/trip-reasons.config.ts

export interface TripReason {
  key: string;
  fr: string;
  ar: string;
}

export interface Establishment {
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

export const ESTABLISHMENTS: Establishment[] = [
  {
    key: 'ensc',
    fr: 'ENSC – École Nationale Supérieure de Chimie',
    ar: 'المدرسة الوطنية العليا للكيمياء',
  },
  {
    key: 'est',
    fr: 'EST – École Supérieure de Technologie',
    ar: 'المدرسة العليا للتكنولوجيا',
  },
  {
    key: 'ensa',
    fr: 'ENSA – École Nationale des Sciences Appliquées',
    ar: 'المدرسة الوطنية للعلوم التطبيقية',
  },
  {
    key: 'encg',
    fr: 'ENCG – École Nationale de Commerce et de Gestion',
    ar: 'المدرسة الوطنية للتجارة والتسيير',
  },
  { key: 'fs', fr: 'FS – Faculté des Sciences', ar: 'كلية العلوم' },
  {
    key: 'flla',
    fr: 'Faculté des Langues, Lettres et Arts',
    ar: 'كلية اللغات والآداب والفنون',
  },
  {
    key: 'fshs',
    fr: 'Faculté des Sciences Humaines et Sociales',
    ar: 'كلية العلوم الإنسانية والاجتماعية',
  },
  {
    key: 'feg',
    fr: "Faculté d'Économie et de Gestion",
    ar: 'كلية الاقتصاد والتدبير',
  },
  {
    key: 'fsjp',
    fr: 'Faculté des Sciences Juridiques et Politiques',
    ar: 'كلية العلوم القانونية والسياسية',
  },
  {
    key: 'esef',
    fr: "École Supérieure d'Éducation et de Formation",
    ar: 'المدرسة العليا للتربية والتكوين',
  },
  { key: 'ims', fr: 'Institut des Métiers de Sport', ar: 'معهد مهن الرياضة' },
  { key: 'autre', fr: 'Autre', ar: 'أخرى' },
];
