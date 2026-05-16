import React from 'react';
import GuestBottomNav from '@/components/layout/GuestBottomNav';
import ApartmentCard from '@/components/apartment/ApartmentCard';
import { mockApartments } from '@/data/mock-data';

export default function HomePage() {
  const profileImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw';

  return (
    <div className="bg-surface text-on-surface min-h-screen relative pb-28">
      
      {/* Header Section */}
      <header className="bg-white px-margin-mobile pt-8 pb-6 shadow-sm rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm border border-outline-variant/30">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-label-sm text-outline-variant">Good Morning,</p>
              <h2 className="font-headline-sm text-deep-navy">Alex Nguyen</h2>
            </div>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-deep-navy relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">search</span>
          </div>
          <input 
            className="w-full h-14 pl-12 pr-12 bg-surface border border-outline-variant/50 rounded-2xl focus:ring-2 focus:ring-antique-gold focus:border-antique-gold transition-all shadow-inner font-body-md text-deep-navy placeholder:text-outline-variant outline-none" 
            placeholder="Search destination, apartment..." 
            type="text" 
          />
          <button className="absolute inset-y-0 right-2 w-10 h-10 my-auto flex items-center justify-center bg-deep-navy rounded-xl text-white shadow-md hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>
      </header>

      <main>
        {/* Categories */}
        <section className="mt-8 overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 px-margin-mobile pb-2">
            {[
              { icon: 'apartment', label: 'Apartment', active: true },
              { icon: 'Radio', label: 'Studio' }, 
              { icon: 'house', label: 'House' },
              { icon: 'villa', label: 'Villa' },
              { icon: 'deck', label: 'Resort' },
            ].map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                  cat.active 
                    ? 'bg-deep-navy text-antique-gold shadow-md active:scale-95' 
                    : 'bg-white text-on-surface-variant border border-outline-variant/50 hover:border-antique-gold hover:text-antique-gold active:scale-95 shadow-sm'
                }`}>
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: cat.active ? "'FILL' 1" : "'FILL' 0" }}>{cat.icon}</span>
                </div>
                <span className={`font-label-sm ${cat.active ? 'text-deep-navy font-bold' : 'text-on-surface-variant'}`}>
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Hero Promo / Featured */}
        <section className="px-margin-mobile mt-8">
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-headline-sm text-deep-navy">Featured Experience</h3>
          </div>
          <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Luxury penthouse interior" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzq36EQ65bZUEN1wIFEEt2zE1xmOa3p-V4UYDIbOleAdPGQ2PecsjHSz9QKtEnGT7Hx8vDsyUczAmXeSyeSft6uKeGa5q3z3rjL8v8aYhCDNo6OHkpj9le1KD8b_XnzYE-TOhvOz-UbReWCuMe7MECVUBzujSjJV6PeBy_Sfkko_2sSgUhd7DTs23ijArxmu7gAxxpYdzu7NNlV2ahh70aIcB-Kg-f-XpSASpkdOgWVhPskVPezVbSgIe86lOwVjx9vDLr1615O4w" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent flex flex-col justify-end p-6">
              <span className="bg-antique-gold text-white text-[10px] uppercase font-bold px-2 py-1 rounded w-max mb-2">Special Offer</span>
              <h2 className="font-headline-md text-white mb-1">Stay Luxury, Live Smart</h2>
              <p className="font-body-sm text-outline-variant">Up to 20% off for new members</p>
            </div>
          </div>
        </section>

        {/* Top Picks */}
        <section className="mt-8">
          <div className="flex justify-between items-end px-margin-mobile mb-4">
            <h3 className="font-headline-sm text-deep-navy">Top Picks for You</h3>
            <button className="font-label-sm text-antique-gold hover:underline">View all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar px-margin-mobile pb-4">
            {mockApartments.map(apt => (
              <div key={apt.id} className="min-w-[280px] w-[80vw] max-w-[320px]">
                <ApartmentCard apartment={apt} />
              </div>
            ))}
          </div>
        </section>

        {/* Best Amenities */}
        <section className="mt-4 px-margin-mobile mb-6">
          <h3 className="font-headline-sm text-deep-navy mb-4">Why choose us</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'door_front', label: 'Smart Check-in' },
              { icon: 'home_iot_device', label: 'IoT Control' },
              { icon: 'wifi', label: 'High-speed WiFi' },
              { icon: 'cleaning_services', label: 'Daily Cleaning' },
            ].map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-outline-variant/30 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-antique-gold flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{amenity.icon}</span>
                </div>
                <span className="font-label-sm text-deep-navy">{amenity.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <GuestBottomNav />
    </div>
  );
}
