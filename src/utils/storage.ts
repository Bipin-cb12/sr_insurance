import { ConsultationBooking, ClaimRequest, RenewalRequest } from '../types';

const STORAGE_KEYS = {
  BOOKINGS: 'sruthy_consultation_bookings',
  CLAIMS: 'sruthy_claim_requests',
  RENEWALS: 'sruthy_renewal_requests',
};

// Initial sample items so the advisor demo dashboard looks alive immediately
const INITIAL_DEMO_BOOKINGS: ConsultationBooking[] = [
  {
    id: 'bkg-101',
    name: 'Karthik Menon',
    phone: '9847012345',
    email: 'karthik.m@techcorp.com',
    requirement: 'Term Insurance & Family Health',
    preferredDate: '2026-09-28',
    preferredTime: '11:00 AM',
    message: 'Looking to restructure our family term coverage from ₹50L to ₹2.5Cr.',
    createdAt: '2026-09-23T14:30:00Z',
    status: 'confirmed',
  },
  {
    id: 'bkg-102',
    name: 'Sunitha & Arun Roy',
    phone: '9447198765',
    email: 'sunitha.roy@gmail.com',
    requirement: 'Child Plan & Higher Education',
    preferredDate: '2026-09-30',
    preferredTime: '04:30 PM',
    message: 'Need a disciplined 15-year higher education fund for our 4-year-old son.',
    createdAt: '2026-09-24T09:15:00Z',
    status: 'pending',
  },
];

export function getBookings(): ConsultationBooking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(INITIAL_DEMO_BOOKINGS));
      return INITIAL_DEMO_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_BOOKINGS;
  }
}

export function saveBooking(booking: Omit<ConsultationBooking, 'id' | 'createdAt' | 'status'>): ConsultationBooking {
  const all = getBookings();
  const newBooking: ConsultationBooking = {
    ...booking,
    id: 'bkg-' + Date.now().toString().slice(-6),
    createdAt: new Date().toISOString(),
    status: 'pending',
  };
  const updated = [newBooking, ...all];
  localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(updated));
  return newBooking;
}

export function getClaims(): ClaimRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CLAIMS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveClaim(claim: Omit<ClaimRequest, 'id' | 'createdAt' | 'status'>): ClaimRequest {
  const all = getClaims();
  const newClaim: ClaimRequest = {
    ...claim,
    id: 'clm-' + Date.now().toString().slice(-6),
    createdAt: new Date().toISOString(),
    status: 'received',
  };
  const updated = [newClaim, ...all];
  localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(updated));
  return newClaim;
}

export function getRenewals(): RenewalRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RENEWALS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRenewal(renewal: Omit<RenewalRequest, 'id' | 'createdAt'>): RenewalRequest {
  const all = getRenewals();
  const newRenewal: RenewalRequest = {
    ...renewal,
    id: 'rnw-' + Date.now().toString().slice(-6),
    createdAt: new Date().toISOString(),
  };
  const updated = [newRenewal, ...all];
  localStorage.setItem(STORAGE_KEYS.RENEWALS, JSON.stringify(updated));
  return newRenewal;
}
