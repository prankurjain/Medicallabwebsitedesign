import { HeroSection } from '../components/HeroSection';
import { SearchBar } from '../components/SearchBar';
import { CategoryChips } from '../components/CategoryChips';
import { SectionHeader } from '../components/SectionHeader';
import { TestCard } from '../components/TestCard';
import { PackageCard } from '../components/PackageCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HomeCollectionBanner } from '../components/HomeCollectionBanner';
import { Testimonials } from '../components/Testimonials';

const featuredTests = [
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

const featuredPackages = [
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

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <CategoryChips />

      {/* Featured Tests Section */}
      <section
        id="tests"
        className="py-16 md:py-20"
        style={{ backgroundColor: 'var(--soft-background)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHeader
            label="Popular Tests"
            title="Featured Tests"
            subtitle="Most commonly booked diagnostic tests with fast results and accurate reporting"
            viewAllLink={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTests.map((test) => (
              <TestCard key={test.id} {...test} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section id="packages" className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionHeader
            label="Health Packages"
            title="Comprehensive Health Packages"
            subtitle="Complete checkup packages designed for your specific health needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <HomeCollectionBanner />
      <Testimonials />
    </>
  );
}
