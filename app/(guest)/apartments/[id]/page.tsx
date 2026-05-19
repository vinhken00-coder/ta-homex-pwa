import React from 'react';
import Link from 'next/link';
import { mockApartments } from '@/data/mock-data';

export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = mockApartments.find(a => a.id === resolvedParams.id) || mockApartments[0];

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col relative pb-safe">
      {/* Hero Image & Custom Back Button */}
      <div className="relative h-80 w-full">
        <img 
          src={apartment.imageUrl} 
          alt={apartment.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
        
        {/* Top bar over image */}
        <div className="absolute top-0 left-0 w-full px-margin-mobile pt-safe flex justify-between items-center h-20 z-20">
          <Link href="/search" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors shadow-sm">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: apartment.isFavorite ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
          </button>
        </div>

        <div className="absolute bottom-6 right-4 z-20 bg-deep-navy/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-white shadow-md">
          <span className="material-symbols-outlined text-[16px] text-antique-gold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="font-label-sm font-bold">{apartment.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 bg-surface -mt-6 rounded-t-3xl relative z-20 px-margin-mobile pt-8 pb-32 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div className="mb-6">
          <h1 className="font-headline-md text-deep-navy mb-2 leading-tight">{apartment.name}</h1>
          <p className="font-body-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-antique-gold">location_on</span>
            {apartment.location}
          </p>
        </div>

        {/* Quick Info Bar */}
        <div className="flex gap-2 mb-8">
           <div className="flex flex-col items-center flex-1 bg-white border border-outline-variant/50 rounded-2xl py-3 shadow-sm">
             <span className="material-symbols-outlined text-deep-navy mb-1 text-[24px]">king_bed</span>
             <span className="font-label-sm text-on-surface-variant">2 Beds</span>
           </div>
           <div className="flex flex-col items-center flex-1 bg-white border border-outline-variant/50 rounded-2xl py-3 shadow-sm">
             <span className="material-symbols-outlined text-deep-navy mb-1 text-[24px]">shower</span>
             <span className="font-label-sm text-on-surface-variant">2 Baths</span>
           </div>
           <div className="flex flex-col items-center flex-1 bg-white border border-outline-variant/50 rounded-2xl py-3 shadow-sm">
             <span className="material-symbols-outlined text-deep-navy mb-1 text-[24px]">square_foot</span>
             <span className="font-label-sm text-on-surface-variant">85m²</span>
           </div>
        </div>

        <h3 className="font-headline-sm text-deep-navy mb-4">Description</h3>
        <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
          Experience luxury living at its finest in this stunning {apartment.type.toLowerCase()}. Features state-of-the-art smart home integration, premium furnishings, and breathtaking city views. Perfect for both short stays and extended living.
        </p>

        <h3 className="font-headline-sm text-deep-navy mb-4">Amenities</h3>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
          {apartment.amenities.map(am => (
            <div key={am.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-deep-navy">
                <span className="material-symbols-outlined text-[20px]">{am.icon}</span>
              </div>
              <span className="font-body-sm text-on-surface-variant">{am.name}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-outline-variant/30 px-margin-mobile py-4 flex justify-between items-center z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div>
          <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Per Night</p>
          <p className="font-headline-sm text-deep-navy">
            <span className="text-antique-gold font-bold">{apartment.pricePerNight.toLocaleString('vi-VN')}đ</span>
            <span className="text-sm font-normal text-on-surface-variant"> / night</span>
          </p>
        </div>
        <Link 
          href={`/booking/${apartment.id}`} 
          className="bg-antique-gold hover:bg-secondary-container text-deep-navy px-8 py-3.5 rounded-xl font-headline-sm shadow-lg transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
