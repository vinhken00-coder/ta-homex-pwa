import React from 'react';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';
import ApartmentCard from '@/components/apartment/ApartmentCard';
import { mockApartments } from '@/data/mock-data';

export default function SearchPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="Search" showNotifications />

      <main className="pb-28 pt-6 px-margin-mobile">
        {/* Search Input */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline-variant">search</span>
          </div>
          <input 
            className="w-full h-14 pl-12 pr-12 bg-white border border-outline-variant/50 rounded-2xl focus:ring-2 focus:ring-antique-gold focus:border-antique-gold transition-all shadow-sm font-body-md text-deep-navy outline-none" 
            placeholder="Ho Chi Minh City" 
            defaultValue="Ho Chi Minh City"
            type="text" 
          />
          <button className="absolute inset-y-0 right-2 w-10 h-10 my-auto flex items-center justify-center bg-surface-container rounded-xl text-deep-navy hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>

        {/* Date & Guests Filter */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white border border-outline-variant/50 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:border-antique-gold/50 cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-outline-variant uppercase text-[10px] tracking-wider">Dates</span>
              <span className="font-label-lg text-deep-navy text-sm">12-15 May</span>
            </div>
          </div>
          <div className="bg-white border border-outline-variant/50 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:border-antique-gold/50 cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">group</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-outline-variant uppercase text-[10px] tracking-wider">Guests</span>
              <span className="font-label-lg text-deep-navy text-sm">2 Adults</span>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 pb-2">
          <button className="px-5 py-2.5 bg-deep-navy text-white rounded-full font-label-sm flex-shrink-0 shadow-sm">All Places</button>
          <button className="px-5 py-2.5 bg-white border border-outline-variant/50 text-deep-navy rounded-full font-label-sm flex-shrink-0 hover:border-antique-gold transition-colors shadow-sm">Apartments</button>
          <button className="px-5 py-2.5 bg-white border border-outline-variant/50 text-deep-navy rounded-full font-label-sm flex-shrink-0 hover:border-antique-gold transition-colors shadow-sm">Studio</button>
          <button className="px-5 py-2.5 bg-white border border-outline-variant/50 text-deep-navy rounded-full font-label-sm flex-shrink-0 hover:border-antique-gold transition-colors shadow-sm">Pool</button>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-sm text-deep-navy">{mockApartments.length} properties found</h3>
        </div>
        
        <div className="flex flex-col gap-6">
          {mockApartments.map(apt => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </main>

      <GuestBottomNav />
    </div>
  );
}
