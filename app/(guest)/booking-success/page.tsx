import React from 'react';
import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 flex flex-col relative overflow-hidden">
      {/* Top Header */}
      <header className="flex justify-between items-center px-margin-mobile h-16 w-full sticky top-0 z-50 bg-white shadow-xs">
        <div className="flex items-center gap-2">
          <img 
            alt="TA HomeX Logo" 
            className="h-9 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4vQvEeWhiWd3ysQThYAeeaKyThfmlEjTcS3vD-xv574_T4_7vi_Ai4w_nYQm1xwTsqkSE7Nbd_hZi4O8MzMGAzD2eex07irjI5Ay7_WiyLUW-irNOAS-Z0jDE6rT9sEno71TgmcwSmnwgimbI29VIO0bnRiYVtXZEnycF2hZhscQ8Rt2-VK8Xaaq2wnoNpFzxCB8riiyfmzOvAtdBYZZov7OUOv9ht-nk7VW8eQ89TW1TMSRlegRwNeV3yneYjmgyHGyWvW7IIE" 
          />
          <span className="text-lg font-black tracking-tight text-deep-navy">TA HomeX</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="material-symbols-outlined text-deep-navy p-1.5 rounded-full hover:bg-surface-container-low transition-colors">
            notifications
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30 flex-shrink-0">
            <img 
              alt="User profile avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile py-8 max-w-md mx-auto text-center z-10 space-y-6">
        
        {/* Animated Checkmark and Confetti/Sparkles */}
        <div className="relative inline-block mt-4">
          {/* Confetti Sparks (Material Symbols) */}
          <span className="material-symbols-outlined absolute -top-4 -left-4 text-antique-gold text-2xl animate-bounce">
            auto_awesome
          </span>
          <span className="material-symbols-outlined absolute -bottom-2 -right-4 text-antique-gold text-xl animate-pulse">
            sparkles
          </span>
          <span className="material-symbols-outlined absolute top-2 -right-6 text-antique-gold/70 text-lg">
            star
          </span>
          
          {/* Main Success Circle */}
          <div className="w-24 h-24 bg-success-green/10 rounded-full flex items-center justify-center mx-auto border border-success-green/20 shadow-[0_0_30px_rgba(39,174,96,0.15)]">
            <div className="w-16 h-16 rounded-full bg-success-green flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check
              </span>
            </div>
          </div>
        </div>

        {/* Congratulation Texts */}
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-deep-navy">Đặt phòng thành công!</h2>
          <p className="text-sm text-on-surface-variant font-medium leading-relaxed px-4">
            We've sent a confirmation email to your address with all details. Your premium stay is ready for arrival!
          </p>
        </div>

        {/* Booking Card */}
        <div className="w-full bg-white border border-outline-variant/30 rounded-3xl p-5 shadow-sm text-left space-y-4">
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-3">
            <span className="text-xs text-on-surface-variant/70 font-bold uppercase tracking-wider">Booking Code</span>
            <span className="text-sm font-extrabold text-antique-gold">#TAHX20240612</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xs font-bold text-deep-navy uppercase tracking-wider">Check-in Instructions</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Your digital key will be activated 15 minutes before your check-in time. Use the Smart Home panel to access your apartment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/10">
              <span className="block text-[9px] text-on-surface-variant/70 font-bold uppercase tracking-wider mb-0.5">Check-in</span>
              <span className="text-xs font-extrabold text-deep-navy">20 May, 14:00</span>
            </div>
            <div className="bg-surface-container-low rounded-xl p-3 border border-outline-variant/10">
              <span className="block text-[9px] text-on-surface-variant/70 font-bold uppercase tracking-wider mb-0.5">Check-out</span>
              <span className="text-xs font-extrabold text-deep-navy">22 May, 12:00</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 pt-2">
          <Link 
            href="/smart-home" 
            className="w-full h-14 rounded-xl bg-deep-navy text-white hover:bg-antique-gold hover:text-deep-navy font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-base">smart_toy</span>
            Go to Smart Home Control
          </Link>
          <Link 
            href="/bookings" 
            className="w-full h-14 rounded-xl border border-deep-navy text-deep-navy hover:bg-surface-container-low font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            View My Bookings
          </Link>
        </div>

        {/* Help Banner */}
        <div className="w-full p-4 bg-antique-gold/5 rounded-2xl border border-antique-gold/15 flex items-start gap-3 text-left">
          <span className="material-symbols-outlined text-antique-gold mt-0.5 text-lg">info</span>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">
            Need help? Our 24/7 concierge is available in the Inbox tab for any special requests.
          </p>
        </div>

      </main>
    </div>
  );
}
