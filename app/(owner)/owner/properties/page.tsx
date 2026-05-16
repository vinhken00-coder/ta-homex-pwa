import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import OwnerBottomNav from '@/components/layout/OwnerBottomNav';
import { mockApartments } from '@/data/mock-data';

export default function OwnerPropertiesPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="My Properties" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-sm text-deep-navy">{mockApartments.length} Properties</h2>
          <button className="flex items-center gap-1 bg-antique-gold/10 text-antique-gold px-3 py-1.5 rounded-full font-label-sm hover:bg-antique-gold/20 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span> Add New
          </button>
        </div>

        <div className="space-y-5">
          {mockApartments.map(apt => (
            <div key={apt.id} className="bg-white rounded-3xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.03)] overflow-hidden transition-transform hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
               <div className="relative h-44 p-2">
                 <img src={apt.imageUrl} alt={apt.name} className="w-full h-full object-cover rounded-2xl" />
                 <div className="absolute top-4 right-4 bg-success-green/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg font-label-sm shadow-sm flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                   Online
                 </div>
               </div>
               
               <div className="p-5 pt-3">
                 <div className="flex justify-between items-start mb-3">
                   <div>
                     <h3 className="font-headline-sm text-deep-navy mb-1">{apt.name}</h3>
                     <p className="font-body-sm text-on-surface-variant flex items-center gap-1">
                       <span className="material-symbols-outlined text-[14px] text-antique-gold">location_on</span>
                       {apt.location}
                     </p>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-deep-navy hover:bg-surface-container-high transition-colors">
                     <span className="material-symbols-outlined text-[20px]">edit</span>
                   </button>
                 </div>
                 
                 <div className="flex justify-between items-center pt-4 border-t border-outline-variant/30">
                   <div className="flex gap-6">
                     <div className="flex flex-col">
                       <span className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px] mb-1">Upcoming</span>
                       <span className="font-label-lg text-deep-navy">2 Bookings</span>
                     </div>
                     <div className="w-px h-8 bg-outline-variant/30"></div>
                     <div className="flex flex-col">
                       <span className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px] mb-1">Rating</span>
                       <span className="font-label-lg text-deep-navy flex items-center gap-1">
                         <span className="material-symbols-outlined text-[16px] text-antique-gold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                         {apt.rating.toFixed(1)}
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </main>

      <OwnerBottomNav />
    </div>
  );
}
