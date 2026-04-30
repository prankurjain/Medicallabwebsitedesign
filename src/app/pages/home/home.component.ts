import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation.component';
import { HeroSectionComponent } from '../../components/hero-section.component';
import { SearchBarComponent } from '../../components/search-bar.component';
import { CategoryChipsComponent } from '../../components/category-chips.component';
import { SectionHeaderComponent } from '../../components/section-header.component';
import { TestCardComponent } from '../../components/test-card.component';
import { PackageCardComponent } from '../../components/package-card.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us.component';
import { HomeCollectionBannerComponent } from '../../components/home-collection-banner.component';
import { TestimonialsComponent } from '../../components/testimonials.component';
import { FooterComponent } from '../../components/footer.component';
import { WhatsAppFabComponent } from '../../components/whatsapp-fab.component';

export interface TestData {
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
}

export interface PackageData {
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  testsCount: number;
  parametersCount: number;
  tag?: 'Best Seller' | 'For Women' | 'Most Popular';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeroSectionComponent,
    SearchBarComponent,
    CategoryChipsComponent,
    SectionHeaderComponent,
    TestCardComponent,
    PackageCardComponent,
    WhyChooseUsComponent,
    HomeCollectionBannerComponent,
    TestimonialsComponent,
    FooterComponent,
    WhatsAppFabComponent,
  ],
  template: `
    <div class="min-h-screen" style="background-color: var(--soft-background);">
      <app-navigation></app-navigation>
      <app-hero-section></app-hero-section>
      <app-search-bar></app-search-bar>
      <app-category-chips></app-category-chips>

      <!-- Featured Tests Section -->
      <section
        class="py-16 md:py-20"
        style="background-color: var(--soft-background);"
      >
        <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <app-section-header
            label="Popular Tests"
            title="Featured Tests"
            subtitle="Most commonly booked diagnostic tests with fast results and accurate reporting"
            [viewAllLink]="true"
          ></app-section-header>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <app-test-card
              *ngFor="let test of featuredTests"
              [name]="test.name"
              [category]="test.category"
              [sampleType]="test.sampleType"
              [reportTime]="test.reportTime"
              [price]="test.price"
              [originalPrice]="test.originalPrice"
            ></app-test-card>
          </div>
        </div>
      </section>

      <!-- Featured Packages Section -->
      <section class="py-16 md:py-20 bg-white">
        <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <app-section-header
            label="Health Packages"
            title="Comprehensive Health Packages"
            subtitle="Complete checkup packages designed for your specific health needs"
          ></app-section-header>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <app-package-card
              *ngFor="let pkg of featuredPackages"
              [name]="pkg.name"
              [category]="pkg.category"
              [sampleType]="pkg.sampleType"
              [reportTime]="pkg.reportTime"
              [price]="pkg.price"
              [originalPrice]="pkg.originalPrice"
              [testsCount]="pkg.testsCount"
              [parametersCount]="pkg.parametersCount"
              [tag]="pkg.tag"
            ></app-package-card>
          </div>
        </div>
      </section>

      <app-why-choose-us></app-why-choose-us>
      <app-home-collection-banner></app-home-collection-banner>
      <app-testimonials></app-testimonials>
      <app-footer></app-footer>
      <app-whatsapp-fab></app-whatsapp-fab>
    </div>
  `,
})
export class HomeComponent {
  featuredTests: TestData[] = [
    {
      name: 'Complete Blood Count (CBC)',
      category: 'Blood Test',
      sampleType: 'Blood',
      reportTime: '6 hours',
      price: 299,
      originalPrice: 499,
    },
    {
      name: 'Thyroid Profile (T3, T4, TSH)',
      category: 'Hormone Test',
      sampleType: 'Blood',
      reportTime: '24 hours',
      price: 449,
      originalPrice: 799,
    },
    {
      name: 'Lipid Profile',
      category: 'Heart Health',
      sampleType: 'Blood',
      reportTime: '12 hours',
      price: 399,
      originalPrice: 699,
    },
    {
      name: 'Blood Sugar (Fasting)',
      category: 'Diabetes',
      sampleType: 'Blood',
      reportTime: '6 hours',
      price: 99,
      originalPrice: 199,
    },
    {
      name: 'Vitamin D Test',
      category: 'Vitamin',
      sampleType: 'Blood',
      reportTime: '24 hours',
      price: 899,
      originalPrice: 1499,
    },
    {
      name: 'Liver Function Test (LFT)',
      category: 'Organ Health',
      sampleType: 'Blood',
      reportTime: '12 hours',
      price: 499,
      originalPrice: 899,
    },
  ];

  featuredPackages: PackageData[] = [
    {
      name: 'Full Body Checkup - Basic',
      category: 'Health Package',
      sampleType: 'Blood',
      reportTime: '24 hours',
      price: 1299,
      originalPrice: 2499,
      testsCount: 8,
      parametersCount: 42,
      tag: 'Best Seller',
    },
    {
      name: "Women's Wellness Package",
      category: 'Health Package',
      sampleType: 'Blood',
      reportTime: '24 hours',
      price: 1799,
      originalPrice: 3299,
      testsCount: 12,
      parametersCount: 58,
      tag: 'For Women',
    },
    {
      name: 'Cardiac Risk Assessment',
      category: 'Heart Health',
      sampleType: 'Blood',
      reportTime: '12 hours',
      price: 1499,
      originalPrice: 2699,
      testsCount: 10,
      parametersCount: 35,
      tag: 'Most Popular',
    },
    {
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
