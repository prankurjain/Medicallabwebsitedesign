import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/shared/hero-section.component';
import { SearchBarComponent } from '../../components/shared/search-bar.component';
import { CategoryChipsComponent } from '../../components/shared/category-chips.component';
import { SectionHeaderComponent } from '../../components/shared/section-header.component';
import { TestCardComponent } from '../../components/shared/test-card.component';
import { PackageCardComponent } from '../../components/shared/package-card.component';
import { WhyChooseUsComponent } from '../../components/shared/why-choose-us.component';
import { HomeCollectionBannerComponent } from '../../components/shared/home-collection-banner.component';
import { TestimonialsComponent } from '../../components/shared/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    SearchBarComponent,
    CategoryChipsComponent,
    SectionHeaderComponent,
    TestCardComponent,
    PackageCardComponent,
    WhyChooseUsComponent,
    HomeCollectionBannerComponent,
    TestimonialsComponent,
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-search-bar></app-search-bar>
    <app-category-chips></app-category-chips>

    <!-- Featured Tests Section -->
    <section id="tests" style="padding: 64px 0 80px; background-color: var(--soft-background);">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <app-section-header
          label="Popular Tests"
          title="Featured Tests"
          subtitle="Most commonly booked diagnostic tests with fast results and accurate reporting"
          [viewAllLink]="true">
        </app-section-header>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
          <app-test-card
            *ngFor="let test of featuredTests"
            [id]="test.id"
            [name]="test.name"
            [category]="test.category"
            [sampleType]="test.sampleType"
            [reportTime]="test.reportTime"
            [price]="test.price"
            [originalPrice]="test.originalPrice">
          </app-test-card>
        </div>
      </div>
    </section>

    <!-- Featured Packages Section -->
    <section id="packages" style="padding: 64px 0 80px; background-color: white;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <app-section-header
          label="Health Packages"
          title="Comprehensive Health Packages"
          subtitle="Complete checkup packages designed for your specific health needs">
        </app-section-header>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
          <app-package-card
            *ngFor="let pkg of featuredPackages"
            [id]="pkg.id"
            [name]="pkg.name"
            [category]="pkg.category"
            [sampleType]="pkg.sampleType"
            [reportTime]="pkg.reportTime"
            [price]="pkg.price"
            [originalPrice]="pkg.originalPrice"
            [testsCount]="pkg.testsCount"
            [parametersCount]="pkg.parametersCount"
            [tag]="pkg.tag">
          </app-package-card>
        </div>
      </div>
    </section>

    <app-why-choose-us></app-why-choose-us>
    <app-home-collection-banner></app-home-collection-banner>
    <app-testimonials></app-testimonials>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HomeComponent {
  featuredTests = [
    { id: 'cbc', name: 'Complete Blood Count (CBC)', category: 'Blood Test', sampleType: 'Blood', reportTime: '6 hours', price: 299, originalPrice: 499 },
    { id: 'thyroid', name: 'Thyroid Profile (T3, T4, TSH)', category: 'Hormone Test', sampleType: 'Blood', reportTime: '24 hours', price: 449, originalPrice: 799 },
    { id: 'lipid', name: 'Lipid Profile', category: 'Heart Health', sampleType: 'Blood', reportTime: '12 hours', price: 399, originalPrice: 699 },
    { id: 'blood-sugar', name: 'Blood Sugar (Fasting)', category: 'Diabetes', sampleType: 'Blood', reportTime: '6 hours', price: 99, originalPrice: 199 },
    { id: 'vitamin-d', name: 'Vitamin D Test', category: 'Vitamin', sampleType: 'Blood', reportTime: '24 hours', price: 899, originalPrice: 1499 },
    { id: 'lft', name: 'Liver Function Test (LFT)', category: 'Organ Health', sampleType: 'Blood', reportTime: '12 hours', price: 499, originalPrice: 899 },
  ];

  featuredPackages = [
    { id: 'full-body-basic', name: 'Full Body Checkup - Basic', category: 'Health Package', sampleType: 'Blood', reportTime: '24 hours', price: 1299, originalPrice: 2499, testsCount: 8, parametersCount: 42, tag: 'Best Seller' as const },
    { id: 'womens-wellness', name: "Women's Wellness Package", category: 'Health Package', sampleType: 'Blood', reportTime: '24 hours', price: 1799, originalPrice: 3299, testsCount: 12, parametersCount: 58, tag: 'For Women' as const },
    { id: 'cardiac-risk', name: 'Cardiac Risk Assessment', category: 'Heart Health', sampleType: 'Blood', reportTime: '12 hours', price: 1499, originalPrice: 2699, testsCount: 10, parametersCount: 35, tag: 'Most Popular' as const },
    { id: 'diabetes-screening', name: 'Diabetes Screening Package', category: 'Diabetes', sampleType: 'Blood', reportTime: '12 hours', price: 699, originalPrice: 1299, testsCount: 6, parametersCount: 18, tag: undefined },
  ];
}
