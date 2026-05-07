export interface Test {
  id: string;
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
  description?: string;
}
