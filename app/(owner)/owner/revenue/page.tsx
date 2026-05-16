import React from 'react';
import TopAppBar from '@/components/layout/TopAppBar';
import OwnerBottomNav from '@/components/layout/OwnerBottomNav';

export default function OwnerRevenuePage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="Revenue" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        {/* Total Balance Card */}
        <div className="bg-deep-navy text-white rounded-3xl p-6 mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
               <p className="font-label-sm text-outline-variant uppercase tracking-widest">Total Balance</p>
               <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                 <span className="material-symbols-outlined text-[18px]">more_horiz</span>
               </button>
            </div>
            <div>
              <h2 className="font-display-lg text-antique-gold mb-1">45,000,000<span className="text-2xl ml-1 font-bold">đ</span></h2>
              <p className="font-body-sm text-success-green flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +15.3% from last month
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-surface-container rounded-xl p-1 mb-6">
          <button className="flex-1 py-2 rounded-lg font-label-sm text-on-surface-variant hover:text-deep-navy transition-colors">Weekly</button>
          <button className="flex-1 py-2 rounded-lg bg-white shadow-sm font-label-sm text-deep-navy">Monthly</button>
          <button className="flex-1 py-2 rounded-lg font-label-sm text-on-surface-variant hover:text-deep-navy transition-colors">Yearly</button>
        </div>

        {/* Mock Chart Area */}
        <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-deep-navy">Income Overview</h3>
            <span className="font-label-sm text-antique-gold bg-antique-gold/10 px-2 py-1 rounded">2024</span>
          </div>
          
          <div className="h-48 flex items-end justify-between gap-2">
            {[40, 60, 45, 80, 55, 90].map((height, i) => (
              <div key={i} className="flex flex-col items-center flex-1 gap-2">
                <div className="w-full bg-surface-container rounded-t-lg relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-deep-navy rounded-t-lg group-hover:bg-primary-container transition-colors" 
                    style={{ height: `${height}%` }}
                  ></div>
                  {height === 90 && (
                    <div className="absolute bottom-0 w-full bg-antique-gold rounded-t-lg shadow-[0_0_10px_rgba(212,175,55,0.4)]" style={{ height: `${height}%` }}></div>
                  )}
                </div>
                <span className="font-label-sm text-outline-variant text-[10px]">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-headline-sm text-deep-navy">Recent Transactions</h3>
          <button className="text-antique-gold font-label-sm hover:underline">View all</button>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Alex Nguyen', prop: 'Rivergate', amount: '+4,500,000đ', date: 'Today, 14:30', status: 'completed' },
            { name: 'Cleaning Service', prop: 'Rivergate', amount: '-300,000đ', date: 'Yesterday, 10:00', status: 'expense' },
            { name: 'Maria Garcia', prop: 'Tresor', amount: '+3,200,000đ', date: '10 May, 09:15', status: 'completed' }
          ].map((trx, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${trx.status === 'expense' ? 'bg-error/10 text-error' : 'bg-success-green/10 text-success-green'}`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {trx.status === 'expense' ? 'south_east' : 'north_east'}
                  </span>
                </div>
                <div>
                  <p className="font-label-lg text-deep-navy">{trx.name}</p>
                  <p className="font-body-sm text-on-surface-variant">{trx.prop} • {trx.date}</p>
                </div>
              </div>
              <p className={`font-label-lg ${trx.status === 'expense' ? 'text-error' : 'text-success-green'}`}>
                {trx.amount}
              </p>
            </div>
          ))}
        </div>
      </main>

      <OwnerBottomNav />
    </div>
  );
}
