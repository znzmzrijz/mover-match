export interface Provider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
  vehicleTypes: string[];
  pricePerHour: number;
  imageUrl: string;
}