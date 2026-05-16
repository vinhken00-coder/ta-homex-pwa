import React from 'react';
import TopAppBar from '@/components/layout/TopAppBar';
import OwnerBottomNav from '@/components/layout/OwnerBottomNav';

export default function OwnerCalendarPage() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="Calendar" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-3xl border border-outline-variant/30 shadow-sm">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-deep-navy">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h3 className="font-headline-sm text-deep-navy">May 2024</h3>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-deep-navy">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm mb-8">
          <div className="grid grid-cols-7 mb-4">
            {days.map((day, i) => (
              <div key={i} className="text-center font-label-sm text-outline-variant uppercase">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-4 gap-x-2">
            <div className="text-center"></div>
            <div className="text-center"></div>
            {dates.map(date => {
              // Mock occupied dates
              const isOccupied = date >= 12 && date <= 15;
              const isToday = date === 12;
              const isStart = date === 12;
              const isEnd = date === 15;
              
              let bgClass = "bg-transparent text-deep-navy hover:bg-surface-container";
              if (isOccupied) bgClass = "bg-deep-navy/10 text-deep-navy font-bold";
              if (isStart || isEnd) bgClass = "bg-deep-navy text-antique-gold shadow-md font-bold";

              return (
                <div key={date} className="relative flex justify-center items-center">
                  <button className={`w-10 h-10 rounded-full flex items-center justify-center font-body-sm transition-all ${bgClass}`}>
                    {date}
                  </button>
                  {isToday && <div className="absolute -bottom-1 w-1 h-1 bg-antique-gold rounded-full"></div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Date Details */}
        <h3 className="font-headline-sm text-deep-navy mb-4">12 May 2024</h3>
        <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-label-lg text-deep-navy">Alex Nguyen</p>
              <p className="font-body-sm text-on-surface-variant">Check-in at 14:00</p>
            </div>
            <span className="font-label-sm bg-antique-gold/10 text-antique-gold px-3 py-1 rounded-full border border-antique-gold/20">Arriving</span>
          </div>
          
          <div className="bg-surface-container rounded-2xl p-4 flex gap-4 items-center">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzq36EQ65bZUEN1wIFEEt2zE1xmOa3p-V4UYDIbOleAdPGQ2PecsjHSz9QKtEnGT7Hx8vDsyUczAmXeSyeSft6uKeGa5q3z3rjL8v8aYhCDNo6OHkpj9le1KD8b_XnzYE-TOhvOz-UbReWCuMe7MECVUBzujSjJV6PeBy_Sfkko_2sSgUhd7DTs23ijArxmu7gAxxpYdzu7NNlV2ahh70aIcB-Kg-f-XpSASpkdOgWVhPskVPezVbSgIe86lOwVjx9vDLr1615O4w" alt="Property" className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <p className="font-label-lg text-deep-navy line-clamp-1">TA HomeX Rivergate</p>
              <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                 <span className="material-symbols-outlined text-[14px] text-antique-gold">payments</span>
                 Paid 4,500,000đ
              </p>
            </div>
          </div>
        </div>
      </main>

      <OwnerBottomNav />
    </div>
  );
}
