import React from 'react';
import Link from 'next/link';
import { mockApartments } from '@/data/mock-data';

export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = mockApartments.find(a => a.id === resolvedParams.id) || mockApartments[0];

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col relative pb-32">
      {/* Top Floating App Bar over Hero Image */}
      <header className="absolute top-0 left-0 w-full z-30 flex justify-between items-center px-margin-mobile h-16 pointer-events-none">
        <Link 
          href="/" 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-deep-navy hover:bg-white transition-all shadow-md pointer-events-auto active:scale-95"
        >
          <span className="material-symbols-outlined font-bold">arrow_back</span>
        </Link>
        <div className="flex items-center gap-2 pointer-events-auto">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-deep-navy hover:bg-white transition-all shadow-md active:scale-95">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-deep-navy hover:bg-white transition-all shadow-md active:scale-95">
            <span 
              className="material-symbols-outlined text-[20px] text-red-500" 
              style={{ fontVariationSettings: apartment.isFavorite ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>
      </header>

      {/* Hero Image Gallery */}
      <section className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
        <img 
          className="w-full h-full object-cover" 
          src={apartment.imageUrl} 
          alt={apartment.name} 
        />
        {/* Shadow gradient top overlay */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        
        {/* Image Pagination Indicator */}
        <div className="absolute bottom-4 right-4 bg-deep-navy/60 backdrop-blur-md px-3 py-1 rounded-full text-white font-semibold text-xs shadow-md">
          1 / 5
        </div>
      </section>

      {/* Main content container */}
      <main className="px-margin-mobile mt-6 space-y-6">
        {/* Title, Location & Rating Card */}
        <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-deep-navy leading-tight tracking-tight">{apartment.name}</h1>
              <p className="text-sm text-on-surface-variant flex items-center gap-1 mt-2">
                <span className="material-symbols-outlined text-antique-gold text-lg">location_on</span>
                {apartment.location}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low border border-outline-variant/30 px-3 py-1.5 rounded-2xl flex-shrink-0">
              <span className="material-symbols-outlined text-antique-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-sm font-bold text-deep-navy">{apartment.rating.toFixed(1)}</span>
              <span className="text-xs text-on-surface-variant">(256)</span>
            </div>
          </div>

          {/* Quick Room Overview Chips */}
          <div className="flex flex-wrap gap-2 mt-5">
            <div className="flex items-center gap-2 border border-outline-variant/50 px-3.5 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface font-semibold shadow-xs">
              <span className="material-symbols-outlined text-on-surface-variant text-base">apartment</span>
              <span>Entire apartment</span>
            </div>
            <div className="flex items-center gap-2 border border-outline-variant/50 px-3.5 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface font-semibold shadow-xs">
              <span className="material-symbols-outlined text-on-surface-variant text-base">group</span>
              <span>2 Guests</span>
            </div>
            <div className="flex items-center gap-2 border border-outline-variant/50 px-3.5 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface font-semibold shadow-xs">
              <span className="material-symbols-outlined text-on-surface-variant text-base">king_bed</span>
              <span>1 Bedroom</span>
            </div>
            <div className="flex items-center gap-2 border border-outline-variant/50 px-3.5 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface font-semibold shadow-xs">
              <span className="material-symbols-outlined text-on-surface-variant text-base">bathtub</span>
              <span>1 Bathroom</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm">
          <h2 className="text-lg font-bold text-deep-navy mb-3">About this place</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Experience luxury living at its finest in this stunning {apartment.type.toLowerCase()}. Features state-of-the-art smart home integration, premium furnishings, and breathtaking city views. Perfect for both short stays and extended living. Experience seamless living in the heart of the city with our signature Smart Mode controls. <span className="text-antique-gold font-semibold cursor-pointer underline hover:text-deep-navy transition-colors">Read more</span>
          </p>
        </section>

        {/* Amenities Section */}
        <section className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-deep-navy">Amenities</h2>
            <button className="text-antique-gold hover:text-deep-navy font-semibold text-sm transition-colors">View all</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-deep-navy">wifi</span>
              <span className="text-sm text-on-surface font-medium">WiFi</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-deep-navy">kitchen</span>
              <span className="text-sm text-on-surface font-medium">Kitchen</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-deep-navy">lock_open</span>
              <span className="text-sm text-on-surface font-medium">Smart Lock</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-deep-navy">tv</span>
              <span className="text-sm text-on-surface font-medium">TV</span>
            </div>
          </div>
        </section>

        {/* Map Integration Section */}
        <section className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm">
          <h2 className="text-lg font-bold text-deep-navy mb-3">Where you'll be</h2>
          <div className="w-full h-44 rounded-2xl overflow-hidden relative group shadow-inner border border-outline-variant/20">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQJRL52EAhbsBf7NZYfHuKO_IhvdQVUHBIyki7Ko72c7onWg61_opGzrucK0GN6puxXq8XOxuuOLWgpHYaSl14c-Ef8cSnGA7aw3NRvzZqEqpXzjQUdpLrVITQTr_7c2HWwzrh09zyiPa_5akBxxt14dT3yYGCcWwWmjcVhFk8qCSM3dgx5rcSLF41jypDcycTM9sY_nknhL4-UWMeNVlcIos5vM56bN06Ysi-CcfpaQ7wWRd4JQmcw0_HSks0sKgE1R-gSpd45m4" 
              alt="Map location"
            />
            <div className="absolute inset-0 bg-deep-navy/10 group-hover:bg-transparent transition-colors" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-deep-navy hover:bg-deep-navy hover:text-white px-5 py-2.5 rounded-full shadow-lg font-bold text-sm transition-all active:scale-95">
              Open in Maps
            </button>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 backdrop-blur-md border-t border-outline-variant/40 px-margin-mobile py-4 flex justify-between items-center z-45 pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.08)] rounded-t-2xl">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-deep-navy">{apartment.pricePerNight.toLocaleString('vi-VN')} VND</span>
            <span className="text-xs text-on-surface-variant font-medium">/ night</span>
          </div>
          <p className="text-xs text-antique-gold underline font-bold cursor-pointer hover:text-deep-navy transition-colors mt-0.5">View availability</p>
        </div>
        <Link 
          href={`/booking/${apartment.id}`} 
          className="bg-antique-gold hover:bg-deep-navy hover:text-white text-deep-navy px-9 py-3.5 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all duration-200"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
