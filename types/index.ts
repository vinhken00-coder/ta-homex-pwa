export interface User {
  id: string;
  name: string;
  role: 'guest' | 'owner' | 'staff';
  avatarUrl: string;
  phone?: string;
  email?: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface Apartment {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  imageUrl: string;
  type: string;
  amenities: Amenity[];
  isFavorite?: boolean;
}

export interface Booking {
  id: string;
  apartmentId: string;
  guestId: string;
  checkIn: string;
  checkOut: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  totalPrice: number;
  apartment?: Apartment;
}

export interface Task {
  id: string;
  apartmentId: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed';
  dueDate: string;
  assignedTo?: string;
  type: 'cleaning' | 'maintenance' | 'inspection';
}

export interface Revenue {
  id: string;
  ownerId: string;
  month: string;
  amount: number;
  bookingsCount: number;
}
