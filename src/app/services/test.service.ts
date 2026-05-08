import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private tests$ = new BehaviorSubject<Test[]>(this.mockTests());

  constructor() {}

  getTests(): Observable<Test[]> {
    return this.tests$.asObservable();
  }

  getTestById(id: string): Observable<Test | undefined> {
    return of(this.tests$.value.find((t) => t.id === id));
  }

  addTest(test: Test): Observable<Test> {
    const newTest = { ...test, id: Date.now().toString() };
    this.tests$.next([...this.tests$.value, newTest]);
    return of(newTest);
  }

  updateTest(id: string, test: Partial<Test>): Observable<Test | undefined> {
    const tests = this.tests$.value.map((t) =>
      t.id === id ? { ...t, ...test } : t
    );
    this.tests$.next(tests);
    return of(tests.find((t) => t.id === id));
  }

  deleteTest(id: string): Observable<void> {
    this.tests$.next(this.tests$.value.filter((t) => t.id !== id));
    return of(void 0);
  }

  private mockTests(): Test[] {
    return [
      {
        id: 'cbc',
        name: 'Complete Blood Count (CBC)',
        category: 'Blood Test',
        sampleType: 'Blood',
        reportTime: '6 hours',
        price: 299,
        originalPrice: 499,
      },
      {
        id: 'thyroid',
        name: 'Thyroid Profile (T3, T4, TSH)',
        category: 'Hormone Test',
        sampleType: 'Blood',
        reportTime: '24 hours',
        price: 449,
        originalPrice: 799,
      },
      {
        id: 'lipid',
        name: 'Lipid Profile',
        category: 'Heart Health',
        sampleType: 'Blood',
        reportTime: '12 hours',
        price: 399,
        originalPrice: 699,
      },
      {
        id: 'blood-sugar',
        name: 'Blood Sugar (Fasting)',
        category: 'Diabetes',
        sampleType: 'Blood',
        reportTime: '6 hours',
        price: 99,
        originalPrice: 199,
      },
      {
        id: 'vitamin-d',
        name: 'Vitamin D Test',
        category: 'Vitamin',
        sampleType: 'Blood',
        reportTime: '24 hours',
        price: 899,
        originalPrice: 1499,
      },
      {
        id: 'lft',
        name: 'Liver Function Test (LFT)',
        category: 'Organ Health',
        sampleType: 'Blood',
        reportTime: '12 hours',
        price: 499,
        originalPrice: 899,
      },
    ];
  }
}
