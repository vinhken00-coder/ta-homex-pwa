import React from 'react';
import Link from 'next/link';
import { mockApartments } from '@/data/mock-data';
import TopAppBar from '@/components/layout/TopAppBar';

export default async function PaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = mockApartments.find(a => a.id === resolvedParams.id) || mockApartments[0];
  const totalPrice = apartment.pricePerNight * 3 + 500000;

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-safe">
      <TopAppBar title="Payment" showBack backHref={`/booking/${apartment.id}`} />

      <main className="px-margin-mobile pt-6 pb-32">
        {/* Total Price Summary */}
        <div className="bg-deep-navy text-white rounded-3xl p-8 mb-8 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
          </div>
          <p className="font-label-sm text-outline-variant mb-2 uppercase tracking-widest relative z-10">Total to pay</p>
          <h2 className="font-display-lg text-antique-gold relative z-10">{totalPrice.toLocaleString('vi-VN')} <span className="text-xl">VND</span></h2>
        </div>

        <h3 className="font-headline-sm text-deep-navy mb-4">Payment Method</h3>
        
        {/* Payment Methods */}
        <div className="space-y-4">
          <label className="flex items-center justify-between bg-white border-2 border-antique-gold rounded-2xl p-4 cursor-pointer shadow-[0_4px_12px_rgba(212,175,55,0.15)] transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-antique-gold">credit_card</span>
              </div>
              <div>
                <p className="font-label-lg text-deep-navy">Credit / Debit Card</p>
                <p className="font-body-sm text-on-surface-variant">Visa, Mastercard, JCB</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-antique-gold flex items-center justify-center">
               <div className="w-3 h-3 bg-antique-gold rounded-full"></div>
            </div>
          </label>

          <label className="flex items-center justify-between bg-white border border-outline-variant/50 hover:border-antique-gold/50 rounded-2xl p-4 cursor-pointer transition-colors shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-outline-variant">account_balance_wallet</span>
              </div>
              <div>
                <p className="font-label-lg text-deep-navy">MoMo Wallet</p>
                <p className="font-body-sm text-on-surface-variant">Pay via MoMo app</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-outline-variant/50"></div>
          </label>
        </div>

        {/* Card Details Mock Form */}
        <div className="mt-8 space-y-5 bg-white p-5 rounded-3xl border border-outline-variant/30 shadow-sm">
          <div>
             <label className="font-label-sm text-deep-navy mb-2 block">Card Number</label>
             <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-14 px-4 rounded-xl border border-outline-variant/50 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none font-body-md text-deep-navy bg-surface" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="font-label-sm text-deep-navy mb-2 block">Expiry Date</label>
               <input type="text" placeholder="MM/YY" className="w-full h-14 px-4 rounded-xl border border-outline-variant/50 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none font-body-md text-deep-navy bg-surface" />
             </div>
             <div>
               <label className="font-label-sm text-deep-navy mb-2 block">CVV</label>
               <input type="text" placeholder="123" className="w-full h-14 px-4 rounded-xl border border-outline-variant/50 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none font-body-md text-deep-navy bg-surface" />
             </div>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-outline-variant/30 px-margin-mobile py-4 flex justify-center items-center z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link 
          href="/booking-success" 
          className="w-full text-center bg-antique-gold hover:bg-secondary-container text-deep-navy py-4 rounded-xl font-headline-sm shadow-lg transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">lock</span>
          Pay {(totalPrice).toLocaleString('vi-VN')}đ
        </Link>
      </div>
    </div>
  );
}
