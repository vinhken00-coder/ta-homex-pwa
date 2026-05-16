import React from 'react';
import TopAppBar from '@/components/layout/TopAppBar';

export default async function StaffGuestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-safe">
      <TopAppBar title="Guest Info" showBack backHref="/staff/tasks/1" />

      <main className="px-margin-mobile pt-6 pb-28">
        <div className="flex flex-col items-center mb-8">
           <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center text-deep-navy font-display-lg mb-4 shadow-sm border border-outline-variant/30">
              M
           </div>
           <h2 className="font-headline-md text-deep-navy">Maria Garcia</h2>
           <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
             <span className="material-symbols-outlined text-[16px] text-success-green">verified</span>
             Identity Verified
           </p>
        </div>

        <div className="flex gap-3 mb-8">
           <button className="flex-1 flex flex-col items-center justify-center bg-deep-navy text-white py-3 rounded-2xl shadow-md transition-transform active:scale-[0.98]">
              <span className="material-symbols-outlined mb-1">call</span>
              <span className="font-label-sm">Call</span>
           </button>
           <button className="flex-1 flex flex-col items-center justify-center bg-surface-container hover:bg-surface-container-high text-deep-navy py-3 rounded-2xl shadow-sm transition-transform active:scale-[0.98]">
              <span className="material-symbols-outlined mb-1">chat</span>
              <span className="font-label-sm">Message</span>
           </button>
        </div>

        <h3 className="font-headline-sm text-deep-navy mb-4">Stay Details</h3>
        <div className="bg-white rounded-3xl border border-outline-variant/30 p-5 shadow-sm space-y-4 mb-8">
           <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30">
              <span className="font-body-sm text-on-surface-variant">Property</span>
              <span className="font-label-lg text-deep-navy">Rivergate 12A</span>
           </div>
           <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30">
              <span className="font-body-sm text-on-surface-variant">Dates</span>
              <span className="font-label-lg text-deep-navy">10 May - 12 May</span>
           </div>
           <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30">
              <span className="font-body-sm text-on-surface-variant">Guests</span>
              <span className="font-label-lg text-deep-navy">2 Adults</span>
           </div>
           <div className="flex justify-between items-center">
              <span className="font-body-sm text-on-surface-variant">Special Requests</span>
              <span className="font-label-sm bg-antique-gold/10 text-antique-gold px-2 py-1 rounded">Late Checkout</span>
           </div>
        </div>

        <h3 className="font-headline-sm text-deep-navy mb-4">Notes</h3>
        <div className="bg-warning-amber/10 border border-warning-amber/30 rounded-3xl p-5">
           <p className="font-body-md text-deep-navy leading-relaxed">
             Guest requested a late checkout at 13:00. Please coordinate cleaning schedule accordingly. Guest also reported AC issue in master bedroom.
           </p>
        </div>
      </main>
    </div>
  );
}
