'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

const categories = [
  { id: 'all',       icon: 'grid_view',  label: 'All' },
  { id: 'apartment', icon: 'apartment',  label: 'Apartment' },
  { id: 'studio',    icon: 'home',       label: 'Studio' },
  { id: 'house',     icon: 'house',      label: 'House' },
  { id: 'villa',     icon: 'villa',      label: 'Villa' },
];

const popularFilters = [
  { id: 'pool',     icon: 'pool',              label: 'Pool' },
  { id: 'gym',      icon: 'fitness_center',    label: 'Gym' },
  { id: 'balcony',  icon: 'deck',              label: 'Balcony' },
  { id: 'kitchen',  icon: 'kitchen',           label: 'Kitchen' },
  { id: 'washer',   icon: 'local_laundry_service', label: 'Washer' },
  { id: 'parking',  icon: 'local_parking',     label: 'Parking' },
];

// Histogram bar heights (mock data to match design)
const histogramBars = [3, 5, 4, 7, 6, 9, 8, 10, 8, 7, 6, 5, 4, 3, 2, 2, 1, 1];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['pool']);
  const [roomCount, setRoomCount] = useState(1);
  const [bedCount, setBedCount] = useState(2);

  const toggleFilter = (id: string) => {
    setSelectedFilters(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col pb-24"
      style={{ background: '#FAF7F2' }}
    >
      {/* ── Header ── */}
      <header className="bg-white px-5 pt-6 pb-4 sticky top-0 z-40 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-5">
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-deep-navy">arrow_back</span>
          </Link>
          <h1 className="font-headline-sm text-deep-navy">Filters</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-deep-navy">notifications</span>
          </button>
        </div>

        {/* Search Summary Pills */}
        <div className="grid grid-cols-3 gap-2">
          {/* Location */}
          <div className="bg-white border border-outline-variant/50 rounded-2xl px-3 py-2.5 shadow-sm">
            <p className="font-label-sm text-outline-variant text-[10px] uppercase tracking-wider mb-0.5">Location</p>
            <div className="flex items-center gap-1 min-w-0">
              <span className="material-symbols-outlined text-antique-gold text-[14px] flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <span className="font-label-lg text-deep-navy text-[13px] truncate">Ho Chi Mi...</span>
            </div>
          </div>

          {/* Check-in */}
          <div className="bg-white border border-outline-variant/50 rounded-2xl px-3 py-2.5 shadow-sm">
            <p className="font-label-sm text-outline-variant text-[10px] uppercase tracking-wider mb-0.5">Check-in</p>
            <div className="flex items-center gap-1 min-w-0">
              <span className="material-symbols-outlined text-antique-gold text-[14px] flex-shrink-0">calendar_today</span>
              <span className="font-label-lg text-deep-navy text-[13px]">20/05/2024</span>
            </div>
          </div>

          {/* Guests */}
          <div className="bg-white border border-outline-variant/50 rounded-2xl px-3 py-2.5 shadow-sm">
            <p className="font-label-sm text-outline-variant text-[10px] uppercase tracking-wider mb-0.5">Guests</p>
            <div className="flex items-center gap-1 min-w-0">
              <span className="material-symbols-outlined text-antique-gold text-[14px] flex-shrink-0">group</span>
              <span className="font-label-lg text-deep-navy text-[13px]">2 Guests</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-5 pt-5 space-y-6">

        {/* ── Property Type ── */}
        <section>
          <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center gap-1.5 flex-shrink-0 transition-all active:scale-95 ${isActive ? '' : ''}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-all ${
                    isActive
                      ? 'bg-deep-navy'
                      : 'bg-white border border-outline-variant/50'
                  }`}>
                    <span
                      className={`material-symbols-outlined text-[26px] ${isActive ? 'text-white' : 'text-on-surface-variant'}`}
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {cat.icon}
                    </span>
                  </div>
                  <span className={`text-[12px] font-semibold ${isActive ? 'text-deep-navy' : 'text-on-surface-variant'}`}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Price Range ── */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline-sm text-deep-navy">Price range</h2>
            <span className="text-antique-gold font-label-lg text-[13px] font-semibold">5.000.000+ VND</span>
          </div>

          {/* Mock histogram */}
          <div className="relative mb-4">
            {/* Bars */}
            <div className="flex items-end gap-1 h-14 mb-2">
              {histogramBars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-colors ${i < 12 ? 'bg-antique-gold/30' : 'bg-surface-container-high'}`}
                  style={{ height: `${(h / 10) * 100}%` }}
                />
              ))}
            </div>

            {/* Track */}
            <div className="relative h-1.5 bg-surface-container-high rounded-full mx-2">
              <div className="absolute left-0 right-[30%] h-full bg-antique-gold rounded-full" />
              {/* Left handle */}
              <div className="absolute -left-2 -top-[7px] w-4 h-4 bg-white border-2 border-antique-gold rounded-full shadow-md" />
              {/* Right handle */}
              <div className="absolute right-[28%] -top-[7px] w-4 h-4 bg-antique-gold rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <span className="font-body-sm text-on-surface-variant text-[12px]">0 VND</span>
            <span className="font-body-sm text-on-surface-variant text-[12px]">10.000.000 VND+</span>
          </div>
        </section>

        {/* ── Popular Filters ── */}
        <section>
          <h2 className="font-headline-sm text-deep-navy mb-3">Popular filters</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularFilters.map(f => {
              const isSelected = selectedFilters.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFilter(f.id)}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all active:scale-[0.97] text-left ${
                    isSelected
                      ? 'bg-antique-gold/10 border-antique-gold/60 shadow-sm'
                      : 'bg-white border-outline-variant/50 shadow-sm hover:border-antique-gold/40'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-antique-gold/20 text-antique-gold' : 'bg-surface-container text-on-surface-variant'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                  </div>
                  <span className={`font-label-lg text-[14px] font-semibold ${isSelected ? 'text-antique-gold' : 'text-deep-navy'}`}>
                    {f.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── More Filters ── */}
        <section>
          <h2 className="font-headline-sm text-deep-navy mb-3">More filters</h2>
          <div className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
            {/* Room type row */}
            <div className="flex items-center justify-between p-5 border-b border-outline-variant/20">
              <div>
                <p className="font-label-lg text-deep-navy font-semibold">Room type</p>
                <p className="font-body-sm text-on-surface-variant text-[12px] mt-0.5">Entire place, shared, or private</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setRoomCount(Math.max(0, roomCount - 1))}
                  className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-deep-navy hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="font-headline-sm text-deep-navy w-4 text-center">{roomCount}</span>
                <button
                  onClick={() => setRoomCount(roomCount + 1)}
                  className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-deep-navy hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>

            {/* Bed type row */}
            <div className="flex items-center justify-between p-5">
              <div>
                <p className="font-label-lg text-deep-navy font-semibold">Bed type</p>
                <p className="font-body-sm text-on-surface-variant text-[12px] mt-0.5">King, Queen, or Twin</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setBedCount(Math.max(0, bedCount - 1))}
                  className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-deep-navy hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <span className="font-headline-sm text-deep-navy w-4 text-center">{bedCount}</span>
                <button
                  onClick={() => setBedCount(bedCount + 1)}
                  className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-deep-navy hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Promo Card ── */}
        <section>
          <div className="relative rounded-3xl overflow-hidden h-52 shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzq36EQ65bZUEN1wIFEEt2zE1xmOa3p-V4UYDIbOleAdPGQ2PecsjHSz9QKtEnGT7Hx8vDsyUczAmXeSyeSft6uKeGa5q3z3rjL8v8aYhCDNo6OHkpj9le1KD8b_XnzYE-TOhvOz-UbReWCuMe7MECVUBzujSjJV6PeBy_Sfkko_2sSgUhd7DTs23ijArxmu7gAxxpYdzu7NNlV2ahh70aIcB-Kg-f-XpSASpkdOgWVhPskVPezVbSgIe86lOwVjx9vDLr1615O4w"
              alt="Smart Lofts District 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="inline-flex items-center bg-antique-gold/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-3">
                Premium Collection
              </span>
              <h3 className="font-headline-md text-white mb-1 leading-snug">Smart Lofts in District 1</h3>
              <p className="font-body-sm text-outline-variant text-[13px]">
                Fully automated luxury living starting from 2.500.000 VND
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust Card ── */}
        <section>
          <div className="bg-surface-container-low rounded-3xl p-6 flex gap-5 items-start border border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-antique-gold text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-deep-navy mb-1">Safe & Secure</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                All our properties feature biometric smart locks and 24/7 security monitoring for your peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Spacer for bottom bar */}
        <div className="h-4" />
      </main>

      {/* ── Sticky Bottom CTA ── */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-5 z-40">
        <div className="flex gap-3">
          <button
            className="flex-1 bg-antique-gold hover:bg-secondary-container text-deep-navy font-headline-sm py-4 rounded-2xl shadow-lg transition-colors active:scale-[0.98] text-[16px]"
          >
            Show 128 results
          </button>
          <button className="w-14 h-14 bg-white border border-outline-variant/50 rounded-2xl flex items-center justify-center shadow-sm hover:bg-surface-container transition-colors flex-shrink-0">
            <span className="material-symbols-outlined text-deep-navy text-[20px]">refresh</span>
          </button>
        </div>
      </div>

      {/* ── Bottom Navigation ── */}
      <GuestBottomNav />
    </div>
  );
}
