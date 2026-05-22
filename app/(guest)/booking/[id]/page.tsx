import React from 'react';
import Link from 'next/link';
import { mockApartments } from '@/data/mock-data';

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = mockApartments.find(a => a.id === resolvedParams.id) || mockApartments[0];

  const roomRate = apartment.pricePerNight * 2;
  const cleaningFee = 300000;
  const serviceFee = 200000;
  const totalAmount = roomRate + cleaningFee + serviceFee;

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32 flex flex-col">
      {/* Top AppBar */}
      <header className="bg-white sticky top-0 z-50 flex justify-between items-center px-margin-mobile h-16 w-full shadow-sm">
        <Link 
          href={`/apartments/${apartment.id}`} 
          className="text-deep-navy hover:text-antique-gold active:scale-95 transition-all w-10 h-10 flex items-center justify-start"
        >
          <span className="material-symbols-outlined font-bold text-lg">arrow_back_ios</span>
        </Link>
        <div className="flex items-center gap-2">
          <img 
            alt="TA HomeX Logo" 
            className="h-8 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4vQvEeWhiWd3ysQThYAeeaKyThfmlEjTcS3vD-xv574_T4_7vi_Ai4w_nYQm1xwTsqkSE7Nbd_hZi4O8MzMGAzD2eex07irjI5Ay7_WiyLUW-irNOAS-Z0jDE6rT9sEno71TgmcwSmnwgimbI29VIO0bnRiYVtXZEnycF2hZhscQ8Rt2-VK8Xaaq2wnoNpFzxCB8riiyfmzOvAtdBYZZov7OUOv9ht-nk7VW8eQ89TW1TMSRlegRwNeV3yneYjmgyHGyWvW7IIE" 
          />
          <h1 className="text-lg font-bold text-deep-navy tracking-tight">Booking</h1>
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </header>

      <main className="px-margin-mobile pt-6 space-y-6 flex-grow">
        {/* Property Summary Card */}
        <section className="bg-white rounded-3xl p-4 border border-outline-variant/30 shadow-sm flex flex-col md:flex-row gap-4">
          <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square md:w-32 md:h-32 flex-shrink-0">
            <img 
              className="w-full h-full object-cover" 
              src={apartment.imageUrl} 
              alt={apartment.name} 
            />
            <div className="absolute top-3 left-3 bg-antique-gold text-deep-navy px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm uppercase tracking-wider">
              Premium Stay
            </div>
          </div>
          <div className="flex flex-col justify-center py-1">
            <h2 className="text-xl font-bold text-deep-navy leading-tight">{apartment.name}</h2>
            <div className="flex items-center text-on-surface-variant gap-1 mt-2 text-xs">
              <span className="material-symbols-outlined text-antique-gold text-base" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <span className="font-semibold">{apartment.location}</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <div className="flex items-center text-antique-gold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-bold ml-0.5">{apartment.rating.toFixed(1)}</span>
              </div>
              <span className="text-on-surface-variant/70 font-medium">(256 reviews)</span>
            </div>
          </div>
        </section>

        {/* Booking Details Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <span className="text-on-surface-variant/60 font-bold text-[10px] uppercase tracking-wider">Check-in</span>
            <span className="text-base font-extrabold text-deep-navy">20/05/2026</span>
            <span className="text-on-surface-variant text-xs font-semibold">14:00</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <span className="text-on-surface-variant/60 font-bold text-[10px] uppercase tracking-wider">Check-out</span>
            <span className="text-base font-extrabold text-deep-navy">22/05/2026</span>
            <span className="text-on-surface-variant text-xs font-semibold">12:00</span>
          </div>
          <div className="col-span-2 bg-white p-4 rounded-2xl border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <span className="text-on-surface-variant/60 font-bold text-[10px] uppercase tracking-wider">Guests</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-deep-navy text-xl">group</span>
              <span className="text-base font-extrabold text-deep-navy">2 Adults</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown Card */}
        <section className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm">
          <h3 className="text-lg font-bold text-deep-navy mb-4">Price Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Room rate (2 nights)</span>
              <span className="font-bold text-deep-navy">{roomRate.toLocaleString('vi-VN')} VND</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Cleaning fee</span>
              <span className="font-bold text-deep-navy">{cleaningFee.toLocaleString('vi-VN')} VND</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-outline-variant/20 pb-4">
              <span className="text-on-surface-variant font-medium">Service fee</span>
              <span className="font-bold text-deep-navy">{serviceFee.toLocaleString('vi-VN')} VND</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <p className="text-base font-black text-deep-navy">Total Amount</p>
                <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Includes taxes and fees</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-antique-gold">{totalAmount.toLocaleString('vi-VN')} VND</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Selection Preview */}
        <section className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-4">
            <div className="bg-deep-navy p-2.5 rounded-xl text-white shadow-xs">
              <span className="material-symbols-outlined text-xl">payments</span>
            </div>
            <div>
              <p className="text-sm font-extrabold text-deep-navy">Visa •••• 4242</p>
              <p className="text-[10px] text-on-surface-variant/80 font-bold mt-0.5 uppercase tracking-wider">Payment Method</p>
            </div>
          </div>
          <Link 
            href={`/payment/${apartment.id}`} 
            className="text-antique-gold hover:text-deep-navy font-bold text-xs underline transition-colors"
          >
            Change
          </Link>
        </section>
      </main>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-outline-variant/40 px-margin-mobile py-4 z-50 flex items-center justify-between pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.08)] rounded-t-2xl">
        <div>
          <p className="text-[10px] text-on-surface-variant/70 font-bold uppercase tracking-wider">Total Amount</p>
          <p className="text-lg font-black text-antique-gold mt-0.5">{totalAmount.toLocaleString('vi-VN')} VND</p>
        </div>
        <Link 
          href={`/payment/${apartment.id}`} 
          className="bg-antique-gold hover:bg-deep-navy hover:text-white text-deep-navy font-bold py-3.5 px-8 rounded-xl text-sm shadow-md active:scale-95 transition-all duration-200"
        >
          Confirm & Pay
        </Link>
      </div>
    </div>
  );
}
