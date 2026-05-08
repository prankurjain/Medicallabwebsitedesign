import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private packages$ = new BehaviorSubject<Package[]>(this.mockPackages());

  constructor() {}

  getPackages(): Observable<Package[]> {
    return this.packages$.asObservable();
  }

  getPackageById(id: string): Observable<Package | undefined> {
    return of(this.packages$.value.find((p) => p.id === id));
  }

  addPackage(pkg: Package): Observable<Package> {
    const newPackage = { ...pkg, id: Date.now().toString() };
    this.packages$.next([...this.packages$.value, newPackage]);
    return of(newPackage);
  }

  updatePackage(id: string, pkg: Partial<Package>): Observable<Package | undefined> {
    const packages = this.packages$.value.map((p) =>
      p.id === id ? { ...p, ...pkg } : p
    );
    this.packages$.next(packages);
    return of(packages.find((p) => p.id === id));
  }

  deletePackage(id: string): Observable<void> {
    this.packages$.next(this.packages$.value.filter((p) => p.id !== id));
    return of(void 0);
  }

  private mockPackages(): Package[] {
    return [
      {
        id: 'full-body-basic',
        name: 'Full Body Checkup - Basic',
        category: 'Health Package',
        sampleType: 'Blood',
        reportTime: '24 hours',
        price: 1299,
        originalPrice: 2499,
        testsCount: 8,
        parametersCount: 42,
        tag: 'Best Seller' as const,
      },
      {
        id: 'womens-wellness',
        name: "Women's Wellness Package",
        category: 'Health Package',
        sampleType: 'Blood',
        reportTime: '24 hours',
        price: 1799,
        originalPrice: 3299,
        testsCount: 12,
        parametersCount: 58,
        tag: 'For Women' as const,
      },
      {
        id: 'cardiac-risk',
        name: 'Cardiac Risk Assessment',
        category: 'Heart Health',
        sampleType: 'Blood',
        reportTime: '12 hours',
        price: 1499,
        originalPrice: 2699,
        testsCount: 10,
        parametersCount: 35,
        tag: 'Most Popular' as const,
      },
      {
        id: 'diabetes-screening',
        name: 'Diabetes Screening Package',
        category: 'Diabetes',
        sampleType: 'Blood',
        reportTime: '12 hours',
        price: 699,
        originalPrice: 1299,
        testsCount: 6,
        parametersCount: 18,
      },
    ];
  }
}
