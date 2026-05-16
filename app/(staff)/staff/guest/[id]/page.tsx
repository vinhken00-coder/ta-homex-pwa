import React from 'react';
import TopAppBar from '@/components/layout/TopAppBar';
import { mockUsers } from '@/data/mock-data';

export default async function GuestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const guest = mockUsers[resolvedParams.id] || mockUsers['guest1'];

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-safe">
      <TopAppBar title="Guest Profile" showBack backHref="/staff/tasks/t1" />

      <main className="px-margin-mobile pt-6 pb-24">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-outline-variant/30">
            <img src={guest.avatarUrl} alt={guest.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="font-headline-md text-deep-navy">{guest.name}</h2>
          <div className="flex items-center gap-1 text-antique-gold bg-antique-gold/10 px-2 py-1 rounded mt-2">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-sm font-bold">VIP Guest</span>
          </div>
        </div>

        {/* Contact Info */}
        <h3 className="font-headline-sm text-deep-navy mb-4">Contact Information</h3>
        <div className="bg-white rounded-2xl border border-outline-variant/30 shadow-sm p-4 mb-6 space-y-4">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-antique-gold">
               <span className="material-symbols-outlined text-[20px]">call</span>
             </div>
             <div>
               <p className="font-label-sm text-outline-variant">Phone Number</p>
               <p className="font-body-md text-deep-navy">{guest.phone}</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-antique-gold">
               <span className="material-symbols-outlined text-[20px]">mail</span>
             </div>
             <div>
               <p className="font-label-sm text-outline-variant">Email</p>
               <p className="font-body-md text-deep-navy">{guest.email}</p>
             </div>
          </div>
        </div>

        {/* Current Stay */}
        <h3 className="font-headline-sm text-deep-navy mb-4">Current Stay</h3>
        <div className="bg-white rounded-2xl border border-outline-variant/30 shadow-sm p-4 mb-6">
          <h4 className="font-headline-sm text-deep-navy mb-1">TA HomeX Rivergate</h4>
          <p className="font-body-sm text-on-surface-variant mb-4">Apt 12A • 12 May - 15 May</p>
          
          <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-4">
            <div>
              <p className="font-label-sm text-outline-variant">Guests</p>
              <p className="font-body-md text-deep-navy">2 Adults</p>
            </div>
            <div>
              <p className="font-label-sm text-outline-variant">Special Requests</p>
              <p className="font-body-md text-deep-navy">Extra Pillows</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-outline-variant/30 px-margin-mobile py-4 flex justify-center items-center z-50 pb-safe">
         <button className="w-full bg-antique-gold text-deep-navy py-4 rounded-xl font-headline-sm shadow-lg hover:bg-secondary-fixed transition-colors flex justify-center items-center gap-2">
           <span className="material-symbols-outlined">chat</span>
           Message Guest
         </button>
      </div>
    </div>
  );
}
