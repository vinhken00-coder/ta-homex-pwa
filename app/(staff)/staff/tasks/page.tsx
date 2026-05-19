import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';
import StaffBottomNav from '@/components/layout/StaffBottomNav';
import { mockTasks } from '@/data/mock-data';

const taskMeta: Record<string, { icon: string; iconBg: string; iconColor: string }> = {
  cleaning:     { icon: 'cleaning_services', iconBg: 'bg-warning-amber/10', iconColor: 'text-warning-amber' },
  maintenance:  { icon: 'build',             iconBg: 'bg-error/10',         iconColor: 'text-error' },
  service:      { icon: 'inventory_2',       iconBg: 'bg-deep-navy/10',     iconColor: 'text-deep-navy' },
};

// Display tasks: combine mock tasks with extra demo tasks
const displayTasks = [
  { id: '1', title: 'Fix AC Unit',        prop: 'Rivergate – Unit 12A', time: '10:00 AM', type: 'maintenance', priority: 'High' },
  { id: '2', title: 'Checkout Cleaning',  prop: 'Tresor – Unit 05B',    time: '12:00 PM', type: 'cleaning',    priority: 'Normal' },
  { id: '3', title: 'Restock Amenities',  prop: 'Rivergate – Unit 18C', time: '14:30 PM', type: 'service',     priority: 'Normal' },
  { id: '4', title: 'Check-in Prep',      prop: 'Tresor – Unit 10A',    time: '16:00 PM', type: 'cleaning',    priority: 'Normal' },
];

export default function StaffTasksPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="My Tasks" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        {/* Tabs */}
        <div className="flex bg-surface-container rounded-2xl p-1 mb-6">
          <button className="flex-1 py-2.5 rounded-xl bg-white shadow-sm font-label-sm text-deep-navy">
            Today (4)
          </button>
          <button className="flex-1 py-2.5 rounded-xl font-label-sm text-on-surface-variant">
            Upcoming
          </button>
          <button className="flex-1 py-2.5 rounded-xl font-label-sm text-on-surface-variant">
            Done
          </button>
        </div>

        <div className="space-y-4">
          {displayTasks.map(task => {
            const meta = taskMeta[task.type] ?? taskMeta['service'];
            const isHigh = task.priority === 'High';
            return (
              <Link key={task.id} href={`/staff/tasks/${task.id}`} className="block">
                <div className="bg-white rounded-3xl border border-outline-variant/30 p-4 shadow-sm flex items-center justify-between transition-all active:scale-[0.98] hover:shadow-md hover:border-antique-gold/30">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${meta.iconBg} ${meta.iconColor}`}>
                      <span className="material-symbols-outlined">{meta.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-deep-navy">{task.title}</h4>
                      <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {task.prop}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-2">
                    {isHigh ? (
                      <span className="bg-error/10 text-error font-label-sm px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                        High
                      </span>
                    ) : (
                      <span className="bg-surface-container text-on-surface-variant font-label-sm px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                        Normal
                      </span>
                    )}
                    <span className="font-label-sm text-deep-navy">{task.time}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <StaffBottomNav />
    </div>
  );
}
