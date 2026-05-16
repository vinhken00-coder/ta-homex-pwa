import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import StaffBottomNav from '@/components/layout/StaffBottomNav';

export default function StaffTasksPage() {
  const tasks = [
    { id: '1', title: 'Fix AC Unit', prop: 'Rivergate Unit 12A', time: '10:00 AM', type: 'Maintenance', icon: 'build', status: 'High', color: 'error' },
    { id: '2', title: 'Checkout Cleaning', prop: 'Tresor Unit 05B', time: '12:00 PM', type: 'Cleaning', icon: 'cleaning_services', status: 'Pending', color: 'warning-amber' },
    { id: '3', title: 'Restock Amenities', prop: 'Rivergate Unit 18C', time: '14:30 PM', type: 'Service', icon: 'inventory_2', status: 'Pending', color: 'deep-navy' },
    { id: '4', title: 'Check-in Prep', prop: 'Tresor Unit 10A', time: '16:00 PM', type: 'Cleaning', icon: 'cleaning_services', status: 'Pending', color: 'warning-amber' },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="My Tasks" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        <div className="flex bg-surface-container rounded-xl p-1 mb-6">
          <button className="flex-1 py-2 rounded-lg bg-white shadow-sm font-label-sm text-deep-navy">Today (4)</button>
          <button className="flex-1 py-2 rounded-lg font-label-sm text-on-surface-variant hover:text-deep-navy transition-colors">Upcoming</button>
          <button className="flex-1 py-2 rounded-lg font-label-sm text-on-surface-variant hover:text-deep-navy transition-colors">Done</button>
        </div>

        <div className="space-y-4">
          {tasks.map(task => (
            <Link key={task.id} href={`/staff/tasks/${task.id}`} className="block">
              <div className="bg-white rounded-3xl border border-outline-variant/30 p-4 shadow-sm flex items-center justify-between transition-transform active:scale-[0.98] hover:shadow-md hover:border-antique-gold/30">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${task.color}/10 text-${task.color}`}>
                     <span className="material-symbols-outlined">{task.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-deep-navy">{task.title}</h4>
                    <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {task.prop}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`font-label-sm px-2 py-0.5 rounded text-[10px] uppercase tracking-wider ${task.status === 'High' ? 'bg-error/10 text-error' : 'bg-surface-container text-on-surface-variant'}`}>
                    {task.status}
                  </span>
                  <span className="font-label-sm text-deep-navy">{task.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <StaffBottomNav />
    </div>
  );
}
