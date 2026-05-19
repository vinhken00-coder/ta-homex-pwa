import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';
import { mockUsers } from '@/data/mock-data';

export default function ProfilePage() {
  const user = mockUsers['guest1'];

  return (
    <div className="bg-surface text-on-surface min-h-screen relative">
      {/* Curved Header Background */}
      <div className="absolute top-0 left-0 w-full h-52 bg-deep-navy rounded-b-[40px] z-0" />

      <div className="relative z-10">
        <TopAppBar title="Profile" />

        <main className="px-margin-mobile pt-8 pb-28">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden mb-4 relative shadow-lg bg-white">
              <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-headline-md text-deep-navy">{user.name}</h2>
            <p className="font-body-sm text-on-surface-variant bg-white px-3 py-1 rounded-full shadow-sm mt-1 border border-outline-variant/30">
              {user.email}
            </p>
          </div>

          {/* Account Section */}
          <p className="font-label-sm text-outline-variant uppercase tracking-widest text-[10px] mb-3 px-1">Account</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="font-label-lg text-deep-navy">{user.name}</p>
                  <p className="font-body-sm text-on-surface-variant">{user.phone}</p>
                </div>
              </div>
              <span className="font-label-sm text-antique-gold bg-antique-gold/10 px-2 py-1 rounded-lg">Guest</span>
            </div>

            <Link
              href="/smart-home"
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/30 active:scale-[0.98] transition-transform hover:shadow-md hover:border-antique-gold/50 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
                  <span className="material-symbols-outlined">home_iot_device</span>
                </div>
                <span className="font-label-lg text-deep-navy">Smart Home Controls</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-antique-gold transition-colors">chevron_right</span>
            </Link>

            <Link
              href="/bookings"
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/30 active:scale-[0.98] transition-transform hover:shadow-md hover:border-antique-gold/50 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <span className="font-label-lg text-deep-navy">My Bookings</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-antique-gold transition-colors">chevron_right</span>
            </Link>
          </div>

          {/* Switch Role Section */}
          <p className="font-label-sm text-outline-variant uppercase tracking-widest text-[10px] mb-3 px-1">Demo Roles</p>
          <div className="space-y-3 mb-6">
            <Link
              href="/owner/dashboard"
              className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-outline-variant/50 active:scale-[0.98] transition-transform hover:bg-surface-container group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-navy/10 flex items-center justify-center text-deep-navy">
                  <span className="material-symbols-outlined">real_estate_agent</span>
                </div>
                <div>
                  <p className="font-label-lg text-deep-navy">Owner Dashboard</p>
                  <p className="font-body-sm text-on-surface-variant">Manage properties & revenue</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-deep-navy transition-colors">chevron_right</span>
            </Link>

            <Link
              href="/staff/dashboard"
              className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-outline-variant/50 active:scale-[0.98] transition-transform hover:bg-surface-container group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-navy/10 flex items-center justify-center text-deep-navy">
                  <span className="material-symbols-outlined">engineering</span>
                </div>
                <div>
                  <p className="font-label-lg text-deep-navy">Staff Dashboard</p>
                  <p className="font-body-sm text-on-surface-variant">View tasks & guest details</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-deep-navy transition-colors">chevron_right</span>
            </Link>
          </div>

          {/* Sign Out */}
          <Link
            href="/login"
            className="flex items-center gap-4 bg-error/5 p-4 rounded-2xl border border-error/20 active:scale-[0.98] transition-transform hover:bg-error/10"
          >
            <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
              <span className="material-symbols-outlined">logout</span>
            </div>
            <span className="font-label-lg text-error">Sign Out</span>
          </Link>
        </main>
      </div>

      <GuestBottomNav />
    </div>
  );
}
