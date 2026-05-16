import React from 'react';
import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <div className="bg-deep-navy text-white min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-antique-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-primary-container/50 rounded-full blur-3xl"></div>

      <main className="flex-1 flex flex-col items-center justify-center px-margin-mobile pt-10 pb-24 text-center z-10">
        {/* Success Icon */}
        <div className="w-28 h-28 rounded-full bg-success-green/20 flex items-center justify-center mb-8 border border-success-green/30 shadow-[0_0_40px_rgba(39,174,96,0.3)]">
          <div className="w-20 h-20 rounded-full bg-success-green flex items-center justify-center">
             <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
          </div>
        </div>

        <h1 className="font-display-lg text-white mb-3">Confirmed!</h1>
        <p className="font-body-md text-outline-variant mb-10 px-4">
          Your reservation at <span className="font-bold text-white">TA HomeX Rivergate</span> is confirmed and ready.
        </p>

        {/* Booking Ref */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-full max-w-sm mb-10 shadow-lg">
          <p className="font-label-sm text-outline-variant uppercase tracking-widest mb-2">Booking Reference</p>
          <p className="font-headline-lg text-antique-gold tracking-[0.2em]">TA-89241</p>
          
          <div className="mt-6 pt-6 border-t border-white/10 flex justify-between text-left">
             <div>
               <p className="font-label-sm text-outline-variant">Check-in</p>
               <p className="font-label-lg text-white mt-1">12 May</p>
             </div>
             <div className="text-right">
               <p className="font-label-sm text-outline-variant">Check-out</p>
               <p className="font-label-lg text-white mt-1">15 May</p>
             </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full max-w-sm space-y-4">
          <Link 
            href="/bookings" 
            className="w-full block text-center bg-antique-gold hover:bg-secondary-container text-deep-navy py-4 rounded-xl font-headline-sm shadow-lg transition-colors"
          >
            View My Bookings
          </Link>
          <Link 
            href="/" 
            className="w-full block text-center bg-transparent border border-white/30 text-white hover:bg-white/10 py-4 rounded-xl font-headline-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
