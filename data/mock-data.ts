import { User, Apartment, Booking, Task, Revenue } from '@/types';

export const mockUsers: Record<string, User> = {
  guest1: {
    id: 'guest1',
    name: 'Alex Nguyen',
    role: 'guest',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw',
    phone: '+84 90 123 4567',
    email: 'alex.n@example.com',
  },
  owner1: {
    id: 'owner1',
    name: 'Sarah Tran',
    role: 'owner',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw',
  },
  staff1: {
    id: 'staff1',
    name: 'David Le',
    role: 'staff',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw',
  }
};

export const mockApartments: Apartment[] = [
  {
    id: '1',
    name: 'TA HomeX Rivergate',
    location: 'District 4, HCMC',
    pricePerNight: 1200000,
    rating: 4.9,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA3uDbqEdShUXUAM7E7MHmooUKXTXF9_kMh5z8xmvriRyOzhhhMIsBo232u6cGpoXb3SmqlXkUBtTMaKadPzLbfd1qNYtFxWo6cZlFj_VSw9rl5ChF9owjeiSbVA0363t58VOzRZxd6_aREhClMSq_LApXYuFO9rqH4PB9jcnugvTt6Ll9KNTY49pvNFwVXe9-eGSJm-9qDN9-o2WtmHIgzwBw0kIUoyV3Zt8-IXTFcXCPOV8oZKW6ZvvLMZXcdFp-9Quy34iqc4Y',
    type: 'Apartment',
    isFavorite: true,
    amenities: [
      { id: '1', name: 'Smart Check-in', icon: 'door_front' },
      { id: '2', name: 'Smart Home', icon: 'home_iot_device' },
      { id: '3', name: 'High-speed WiFi', icon: 'wifi' },
    ]
  },
  {
    id: '2',
    name: 'TA HomeX Landmark',
    location: 'Binh Thanh, HCMC',
    pricePerNight: 1500000,
    rating: 4.8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA077qdDK4xuscU9mYouuZ89Y2nU6byuxbDHl8W2wkVyG5-AdOIQzbOzHojjqGxzTpFES0p7nZcJi4hRJo-09FXerAcAPV_PBww89Emd03hIjOpol5JwQfiEF8Oob3jzo6phy4A8aS9LbToQ1U_tjb8GFhCJPFtwcMiyyvKKax_3X4OkNXfX65qOQEwSi-4R_rBad1SZexRDedgMcJ8MBomU6inzqUEiMldKcLMt2FeMUtN5mK5f_feHKiGnuO27YW4GrYxuyrHiUE',
    type: 'Studio',
    isFavorite: false,
    amenities: [
      { id: '2', name: 'Smart Home', icon: 'home_iot_device' },
      { id: '3', name: 'High-speed WiFi', icon: 'wifi' },
      { id: '4', name: 'Cleaning Service', icon: 'cleaning_services' },
    ]
  }
];

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    apartmentId: '1',
    guestId: 'guest1',
    checkIn: '2026-06-01',
    checkOut: '2026-06-05',
    status: 'upcoming',
    totalPrice: 4800000,
  },
  {
    id: 'b2',
    apartmentId: '2',
    guestId: 'guest1',
    checkIn: '2026-05-10',
    checkOut: '2026-05-12',
    status: 'completed',
    totalPrice: 3000000,
  }
];

export const mockTasks: Task[] = [
  {
    id: 't1',
    apartmentId: '1',
    title: 'Post-checkout Cleaning',
    status: 'pending',
    dueDate: '2026-05-16',
    assignedTo: 'staff1',
    type: 'cleaning'
  },
  {
    id: 't2',
    apartmentId: '2',
    title: 'AC Maintenance',
    status: 'completed',
    dueDate: '2026-05-15',
    assignedTo: 'staff1',
    type: 'maintenance'
  }
];

export const mockRevenue: Revenue[] = [
  {
    id: 'r1',
    ownerId: 'owner1',
    month: '2026-04',
    amount: 15000000,
    bookingsCount: 8,
  },
  {
    id: 'r2',
    ownerId: 'owner1',
    month: '2026-05',
    amount: 12000000,
    bookingsCount: 5,
  }
];
