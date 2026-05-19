import React from 'react';
import Link from 'next/link';
import { mockApartments } from '@/data/mock-data';
import TopAppBar from '@/components/layout/TopAppBar';

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = mockApartments.find(a => a.id === resolvedParams.id) || mockApartments[0];

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-safe">
      <TopAppBar title="Confirm Booking" showBack backHref={`/apartments/${apartment.id}`} />

      <main className="px-margin-mobile pt-6 pb-32">
        {/* Selected Apartment Card */}
        <div className="bg-white rounded-3xl p-3 border border-outline-variant/30 flex gap-4 mb-6 shadow-sm">
          <img src={apartment.imageUrl} alt={apartment.name} className="w-24 h-24 rounded-2xl object-cover" />
          <div className="flex flex-col justify-center">
            <h3 className="font-headline-sm text-deep-navy line-clamp-1">{apartment.name}</h3>
            <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px] text-antique-gold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              {apartment.rating.toFixed(1)} • {apartment.location}
            </p>
          </div>
        </div>

        {/* Trip Details */}
        <h3 className="font-headline-sm text-deep-navy mb-4">Your Trip</h3>
        <div className="bg-white border border-outline-variant/30 rounded-3xl p-5 mb-8 shadow-sm divide-y divide-outline-variant/20">
          <div className="flex justify-between items-center pb-4">
            <div>
              <p className="font-label-lg text-deep-navy">Dates</p>
              <p className="font-body-md text-on-surface-variant mt-1">12 May - 15 May</p>
            </div>
            <button className="text-antique-gold font-label-lg hover:underline underline-offset-4">Edit</button>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div>
              <p className="font-label-lg text-deep-navy">Guests</p>
              <p className="font-body-md text-on-surface-variant mt-1">2 Adults</p>
            </div>
            <button className="text-antique-gold font-label-lg hover:underline underline-offset-4">Edit</button>
          </div>
        </div>

        {/* Price Details */}
        <h3 className="font-headline-sm text-deep-navy mb-4">Price Details</h3>
        <div className="bg-white border border-outline-variant/30 rounded-3xl p-5 mb-6 shadow-sm space-y-4">
          <div className="flex justify-between font-body-md text-on-surface-variant">
            <span>{(apartment.pricePerNight).toLocaleString('vi-VN')}đ x 3 nights</span>
            <span className="text-deep-navy font-medium">{(apartment.pricePerNight * 3).toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="flex justify-between font-body-md text-on-surface-variant">
            <span>Cleaning fee</span>
            <span className="text-deep-navy font-medium">{(300000).toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="flex justify-between font-body-md text-on-surface-variant">
            <span>Service fee</span>
            <span className="text-deep-navy font-medium">{(200000).toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="border-t border-outline-variant/30 pt-4 flex justify-between items-center">
            <span className="font-headline-sm text-deep-navy">Total</span>
            <span className="font-headline-md text-antique-gold">{(apartment.pricePerNight * 3 + 500000).toLocaleString('vi-VN')}đ</span>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-outline-variant/30 px-margin-mobile py-4 flex justify-center items-center z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link 
          href={`/payment/${apartment.id}`} 
          className="w-full text-center bg-antique-gold hover:bg-secondary-container text-deep-navy py-4 rounded-xl font-headline-sm shadow-lg transition-colors"
        >
          Confirm & Pay
        </Link>
      </div>
    </div>
  );
}
