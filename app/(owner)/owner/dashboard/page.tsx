import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import OwnerBottomNav from '@/components/layout/OwnerBottomNav';
import { mockUsers, mockApartments, mockRevenue } from '@/data/mock-data';

export default function OwnerDashboardPage() {
  const owner = mockUsers['owner1'];
  const currentRevenue = mockRevenue.find(r => r.month === '2026-05') ?? mockRevenue[0];
  const prevRevenue = mockRevenue.find(r => r.month === '2026-04') ?? mockRevenue[0];

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar showProfile profileImageUrl={owner.avatarUrl} showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="font-headline-lg text-deep-navy">Welcome, {owner.name.split(' ')[0]}</h2>
          <p className="font-body-sm text-on-surface-variant mt-1">Here is your property overview today.</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {/* Revenue */}
          <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
            <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">This Month</p>
              <p className="font-headline-sm text-deep-navy mt-1">
                {(currentRevenue.amount / 1_000_000).toFixed(0)}M <span className="text-sm font-normal text-on-surface-variant">VND</span>
              </p>
            </div>
          </div>

          {/* Check-ins */}
          <div className="bg-deep-navy rounded-3xl p-5 shadow-lg flex flex-col justify-between h-32 relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-antique-gold relative z-10">
              <span className="material-symbols-outlined">key</span>
            </div>
            <div className="relative z-10">
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Check-ins Today</p>
              <p className="font-headline-sm text-white mt-1">3 Guests</p>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
            <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error relative">
              <span className="material-symbols-outlined">cleaning_services</span>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-error rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Pending Tasks</p>
              <p className="font-headline-sm text-deep-navy mt-1">2 Cleanings</p>
            </div>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
            <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Avg Rating</p>
              <p className="font-headline-sm text-deep-navy mt-1">
                4.8 <span className="text-sm font-normal text-on-surface-variant">/ 5.0</span>
              </p>
            </div>
          </div>
        </div>

        {/* Today's Check-ins */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-sm text-deep-navy">Today's Check-ins</h3>
          <Link href="/owner/calendar" className="text-antique-gold font-label-sm hover:underline">
            View calendar
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-deep-navy">A</div>
              <div>
                <p className="font-label-lg text-deep-navy">Alex Nguyen</p>
                <p className="font-body-sm text-on-surface-variant">TA HomeX Rivergate</p>
              </div>
            </div>
            <span className="font-label-sm bg-success-green/10 text-success-green px-3 py-1 rounded-full border border-success-green/20">14:00</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30">
            <button className="flex justify-center items-center gap-2 bg-surface-container hover:bg-surface-container-high text-deep-navy py-2.5 rounded-xl font-label-sm transition-colors">
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Message
            </button>
            <button className="flex justify-center items-center gap-2 bg-antique-gold hover:bg-secondary-container text-deep-navy py-2.5 rounded-xl font-label-sm shadow-sm transition-colors">
              <span className="material-symbols-outlined text-[18px]">lock_open_right</span>
              Send Code
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-sm text-deep-navy">Manage</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/owner/properties" className="bg-white rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex items-center gap-3 hover:border-antique-gold/40 transition-colors active:scale-[0.98]">
            <span className="material-symbols-outlined text-antique-gold">apartment</span>
            <span className="font-label-lg text-deep-navy">Properties</span>
          </Link>
          <Link href="/owner/revenue" className="bg-white rounded-2xl p-4 border border-outline-variant/30 shadow-sm flex items-center gap-3 hover:border-antique-gold/40 transition-colors active:scale-[0.98]">
            <span className="material-symbols-outlined text-antique-gold">bar_chart</span>
            <span className="font-label-lg text-deep-navy">Revenue</span>
          </Link>
        </div>
      </main>

      <OwnerBottomNav />
    </div>
  );
}
