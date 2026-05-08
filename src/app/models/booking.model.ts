export interface Booking {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  testId?: string;
  packageId?: string;
  sampleCollectionDate: string;
  status: 'Booked' | 'Collected' | 'Processing' | 'Ready' | 'Completed';
  notes?: string;
  createdAt?: string;
}
