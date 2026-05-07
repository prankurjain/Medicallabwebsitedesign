export interface Package {
  id: string;
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  testsCount: number;
  parametersCount: number;
  tag?: 'Best Seller' | 'Most Popular' | 'For Women';
  imageUrl?: string;
  description?: string;
}
