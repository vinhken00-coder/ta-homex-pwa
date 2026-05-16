import React from 'react';
import Link from 'next/link';
import TopAppBar from '@/components/layout/TopAppBar';

export default async function StaffTaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-safe">
      <TopAppBar title="Task Detail" showBack backHref="/staff/tasks" />

      <main className="px-margin-mobile pt-6 pb-32">
        <div className="bg-white rounded-3xl border border-outline-variant/30 p-6 shadow-sm mb-6">
           <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                 <div className="w-14 h-14 rounded-2xl bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[28px]">build</span>
                 </div>
                 <div>
                    <h2 className="font-headline-md text-deep-navy mb-1">Fix AC Unit</h2>
                    <span className="font-label-sm bg-error/10 text-error px-2 py-1 rounded">High Priority</span>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-y-6 mb-6 pt-6 border-t border-outline-variant/30">
              <div>
                 <p className="font-label-sm text-outline-variant uppercase text-[10px] tracking-wider mb-1">Location</p>
                 <p className="font-label-lg text-deep-navy">Rivergate 12A</p>
              </div>
              <div>
                 <p className="font-label-sm text-outline-variant uppercase text-[10px] tracking-wider mb-1">Time</p>
                 <p className="font-label-lg text-deep-navy">10:00 AM Today</p>
              </div>
           </div>

           <div>
              <p className="font-label-sm text-outline-variant uppercase text-[10px] tracking-wider mb-2">Description</p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                 Guest reported AC in the master bedroom is not cooling properly. Needs immediate inspection and repair before new guest check-in at 14:00.
              </p>
           </div>
        </div>

        {/* Guest Info */}
        <h3 className="font-headline-sm text-deep-navy mb-4">Current Guest</h3>
        <Link href="/staff/guests/1" className="flex items-center justify-between bg-white p-4 rounded-3xl border border-outline-variant/30 shadow-sm transition-transform active:scale-[0.98] mb-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-deep-navy font-headline-sm">M</div>
              <div>
                 <p className="font-label-lg text-deep-navy">Maria Garcia</p>
                 <p className="font-body-sm text-on-surface-variant">Checking out today</p>
              </div>
           </div>
           <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
        </Link>

        {/* Checklist */}
        <h3 className="font-headline-sm text-deep-navy mb-4">Task Checklist</h3>
        <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm p-2">
           {[
             'Inspect AC unit power supply',
             'Clean filters if dirty',
             'Check refrigerant levels',
             'Test cooling performance'
           ].map((item, i) => (
             <label key={i} className="flex items-center gap-4 p-4 border-b border-outline-variant/30 last:border-0 cursor-pointer">
                <input type="checkbox" className="w-6 h-6 rounded border-outline-variant text-antique-gold focus:ring-antique-gold bg-surface" />
                <span className="font-body-md text-deep-navy">{item}</span>
             </label>
           ))}
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-outline-variant/30 px-margin-mobile py-4 flex gap-4 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
         <button className="flex-1 bg-surface-container hover:bg-surface-container-high text-deep-navy py-4 rounded-xl font-headline-sm transition-colors">
            Report Issue
         </button>
         <button className="flex-1 bg-deep-navy hover:bg-primary-container text-white py-4 rounded-xl font-headline-sm shadow-lg transition-colors flex justify-center items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span> Complete
         </button>
      </div>
    </div>
  );
}
