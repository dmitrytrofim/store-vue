export interface Product {
 id: number;
 title: string;
 price: number;
 description: string;
 category?: string;
 image: string;
 buy?: number;
 rating: {
  rate: number;
  count?: number;
 };
}
