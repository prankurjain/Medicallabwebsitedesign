import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings$ = new BehaviorSubject<Booking[]>(this.mockBookings());

  constructor() {}

  getBookings(): Observable<Booking[]> {
    return this.bookings$.asObservable();
  }

  getBookingById(id: string): Observable<Booking | undefined> {
    return of(this.bookings$.value.find((b) => b.id === id));
  }

  addBooking(booking: Booking): Observable<Booking> {
    const newBooking = {
      ...booking,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    this.bookings$.next([...this.bookings$.value, newBooking]);
    return of(newBooking);
  }

  updateBooking(id: string, booking: Partial<Booking>): Observable<Booking | undefined> {
    const bookings = this.bookings$.value.map((b) =>
      b.id === id ? { ...b, ...booking } : b
    );
    this.bookings$.next(bookings);
    return of(bookings.find((b) => b.id === id));
  }

  deleteBooking(id: string): Observable<void> {
    this.bookings$.next(this.bookings$.value.filter((b) => b.id !== id));
    return of(void 0);
  }

  private mockBookings(): Booking[] {
    return [
      {
        id: 'booking-001',
        patientName: 'John Doe',
        patientEmail: 'john@example.com',
        patientPhone: '+91-9876543210',
        testId: 'cbc',
        sampleCollectionDate: '2024-05-15',
        status: 'Booked',
        createdAt: '2024-05-07T10:30:00Z',
      },
      {
        id: 'booking-002',
        patientName: 'Jane Smith',
        patientEmail: 'jane@example.com',
        patientPhone: '+91-9876543211',
        packageId: 'full-body-basic',
        sampleCollectionDate: '2024-05-16',
        status: 'Collected',
        createdAt: '2024-05-07T10:35:00Z',
      },
      {
        id: 'booking-003',
        patientName: 'Robert Johnson',
        patientEmail: 'robert@example.com',
        patientPhone: '+91-9876543212',
        testId: 'thyroid',
        sampleCollectionDate: '2024-05-14',
        status: 'Processing',
        createdAt: '2024-05-07T10:40:00Z',
      },
    ];
  }
}
