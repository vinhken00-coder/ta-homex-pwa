import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

export default function ProfilePage() {
  const profileImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw';

  return (
    <div className="bg-surface text-on-surface min-h-screen relative">
      
      {/* Curved Header Background */}
      <div className="absolute top-0 left-0 w-full h-48 bg-deep-navy rounded-b-[40px] z-0"></div>

      <div className="relative z-10">
        <TopAppBar title="Profile" />

        <main className="px-margin-mobile pt-8 pb-28">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden mb-4 relative shadow-lg bg-white">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black/50 py-1.5 flex justify-center backdrop-blur-sm cursor-pointer hover:bg-black/60 transition-colors">
                <span className="material-symbols-outlined text-white text-[16px]">edit</span>
              </div>
            </div>
            <h2 className="font-headline-md text-deep-navy">Alex Nguyen</h2>
            <p className="font-body-sm text-on-surface-variant bg-white px-3 py-1 rounded-full shadow-sm mt-1 border border-outline-variant/30">alex.n@example.com</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            <Link href="/profile/personal-info" className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/30 active:scale-[0.98] transition-transform hover:shadow-md hover:border-antique-gold/50 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="font-label-lg text-deep-navy">Personal Info</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-antique-gold transition-colors">chevron_right</span>
            </Link>

            <Link href="/smart-home" className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/30 active:scale-[0.98] transition-transform hover:shadow-md hover:border-antique-gold/50 group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold">
                  <span className="material-symbols-outlined">home_iot_device</span>
                </div>
                <span className="font-label-lg text-deep-navy">Smart Home Controls</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-antique-gold transition-colors">chevron_right</span>
            </Link>

            <div className="my-6 border-t border-outline-variant/30"></div>

            <Link href="/owner/dashboard" className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-outline-variant/50 active:scale-[0.98] transition-transform hover:bg-surface-container group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-navy/10 flex items-center justify-center text-deep-navy">
                  <span className="material-symbols-outlined">real_estate_agent</span>
                </div>
                <span className="font-label-lg text-deep-navy">Switch to Owner View</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-deep-navy transition-colors">chevron_right</span>
            </Link>

            <Link href="/staff/dashboard" className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-outline-variant/50 active:scale-[0.98] transition-transform hover:bg-surface-container group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-navy/10 flex items-center justify-center text-deep-navy">
                  <span className="material-symbols-outlined">engineering</span>
                </div>
                <span className="font-label-lg text-deep-navy">Switch to Staff View</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-deep-navy transition-colors">chevron_right</span>
            </Link>

            <Link href="/login" className="flex items-center justify-between bg-error/5 p-4 rounded-2xl border border-error/20 active:scale-[0.98] transition-transform mt-8 hover:bg-error/10">
              <div className="flex items-center gap-4 text-error">
                <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
                  <span className="material-symbols-outlined">logout</span>
                </div>
                <span className="font-label-lg">Log out</span>
              </div>
            </Link>
          </div>
        </main>
      </div>

      <GuestBottomNav />
    </div>
  );
}
