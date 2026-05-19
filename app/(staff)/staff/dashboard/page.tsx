import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import StaffBottomNav from '@/components/layout/StaffBottomNav';
import { mockUsers, mockTasks } from '@/data/mock-data';

export default function StaffDashboardPage() {
  const staffUser = mockUsers['staff1'];

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar showProfile profileImageUrl={staffUser.avatarUrl} showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        <div className="mb-8">
          <h2 className="font-headline-lg text-deep-navy">
            Hi, {staffUser.name.split(' ')[0]}
          </h2>
          <p className="font-body-sm text-on-surface-variant mt-1">You have 4 tasks assigned today.</p>
        </div>

        {/* Task Summary Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-deep-navy rounded-3xl p-5 shadow-lg flex flex-col justify-between h-32 relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none" />
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-antique-gold relative z-10">
              <span className="material-symbols-outlined">assignment</span>
            </div>
            <div className="relative z-10">
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Total Tasks</p>
              <p className="font-headline-sm text-white mt-1">4 Today</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
            <div className="w-10 h-10 rounded-full bg-warning-amber/10 flex items-center justify-center text-warning-amber">
              <span className="material-symbols-outlined">cleaning_services</span>
            </div>
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Cleaning</p>
              <p className="font-headline-sm text-deep-navy mt-1">3 Units</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
            <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
              <span className="material-symbols-outlined">build</span>
            </div>
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Maintenance</p>
              <p className="font-headline-sm text-deep-navy mt-1">1 Issue</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
            <div className="w-10 h-10 rounded-full bg-success-green/10 flex items-center justify-center text-success-green">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider text-[10px]">Completed</p>
              <p className="font-headline-sm text-deep-navy mt-1">2 Today</p>
            </div>
          </div>
        </div>

        {/* Priority Task */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline-sm text-deep-navy">Priority Task</h3>
          <Link href="/staff/tasks" className="font-label-sm text-antique-gold hover:underline">
            All tasks
          </Link>
        </div>

        <Link
          href="/staff/tasks/1"
          className="block bg-error/5 border border-error/20 rounded-3xl p-5 shadow-sm mb-8 transition-transform active:scale-[0.98] hover:shadow-md"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                <span className="material-symbols-outlined">build</span>
              </div>
              <div>
                <p className="font-label-lg text-error font-semibold">Fix AC Unit</p>
                <p className="font-body-sm text-on-surface-variant">Rivergate • Unit 12A</p>
              </div>
            </div>
            <span className="font-label-sm bg-error text-white px-2 py-1 rounded-lg text-[10px] uppercase tracking-wider">High</span>
          </div>
          <div className="bg-white rounded-2xl p-3 flex justify-between items-center border border-error/10">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-deep-navy font-label-sm">A</div>
              <span className="font-label-sm text-deep-navy">Current guest: Alex Nguyen</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant text-[18px]">chevron_right</span>
          </div>
        </Link>
      </main>

      <StaffBottomNav />
    </div>
  );
}
