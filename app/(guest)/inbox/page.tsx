import React from 'react';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

export default function InboxPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="Inbox" />

      <main className="px-margin-mobile pt-6 pb-28">
        {/* Chat List */}
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-4 flex gap-4 items-center border border-outline-variant/30 shadow-sm cursor-pointer hover:bg-surface-container transition-colors active:scale-[0.98]">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-deep-navy flex items-center justify-center text-antique-gold font-headline-sm">
                S
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-success-green rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-headline-sm text-deep-navy">Support Team</h4>
                <span className="font-label-sm text-antique-gold">10:42 AM</span>
              </div>
              <p className="font-body-sm text-deep-navy font-medium line-clamp-1">
                Your smart lock code for check-in is ready. Please check the smart home tab.
              </p>
            </div>
            <div className="w-2.5 h-2.5 bg-error rounded-full flex-shrink-0 mt-1 self-start"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-4 flex gap-4 items-center border border-outline-variant/30 shadow-sm cursor-pointer hover:bg-surface-container transition-colors active:scale-[0.98]">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-deep-navy font-headline-sm">
                R
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-headline-sm text-deep-navy">TA HomeX Rivergate</h4>
                <span className="font-label-sm text-outline-variant">Yesterday</span>
              </div>
              <p className="font-body-sm text-on-surface-variant line-clamp-1">
                Thank you for staying with us! Hope to see you again soon.
              </p>
            </div>
          </div>
        </div>
      </main>

      <GuestBottomNav />
    </div>
  );
}
