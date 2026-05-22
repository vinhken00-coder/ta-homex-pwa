'use client';
import React, { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { mockApartments } from '@/data/mock-data';

export default function PaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const apartment = mockApartments.find(a => a.id === resolvedParams.id) || mockApartments[0];

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo' | 'zalopay' | 'bank'>('card');

  const roomRate = apartment.pricePerNight * 2;
  const cleaningFee = 300000;
  const serviceFee = 200000;
  const totalAmount = roomRate + cleaningFee + serviceFee;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/booking-success');
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32 flex flex-col">
      {/* Top AppBar */}
      <header className="bg-white sticky top-0 z-50 flex justify-between items-center px-margin-mobile h-16 w-full shadow-sm">
        <Link 
          href={`/booking/${apartment.id}`} 
          className="text-deep-navy hover:text-antique-gold active:scale-95 transition-all w-10 h-10 flex items-center justify-start"
        >
          <span className="material-symbols-outlined font-bold text-lg">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold text-deep-navy tracking-tight">Payment</h1>
        <div className="w-10"></div> {/* Spacer for balance */}
      </header>

      <main className="px-margin-mobile pt-6 space-y-6 flex-grow">
        {/* Dynamic Price Summary Card */}
        <div className="bg-deep-navy text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-antique-gold/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 space-y-4">
            <div>
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Total Amount to Pay</p>
              <h2 className="text-3xl font-black text-antique-gold mt-1">
                {totalAmount.toLocaleString('vi-VN')} <span className="text-sm font-semibold text-white/80">VND</span>
              </h2>
            </div>
            
            <div className="border-t border-white/10 pt-4 flex justify-between text-xs text-white/70">
              <div>
                <p className="font-semibold text-white/50 uppercase tracking-wider text-[9px]">Duration</p>
                <p className="font-bold text-white mt-0.5">2 Nights (20 - 22 May)</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white/50 uppercase tracking-wider text-[9px]">Guests</p>
                <p className="font-bold text-white mt-0.5">2 Guests</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-deep-navy">Payment Method</h3>

        {/* Payment Methods */}
        <div className="space-y-3">
          {/* Credit / Debit Card Option */}
          <div 
            onClick={() => setPaymentMethod('card')}
            className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${
              paymentMethod === 'card' 
                ? 'border-antique-gold bg-antique-gold/5 shadow-[0_4px_15px_rgba(212,175,55,0.1)]' 
                : 'border-outline-variant/60 bg-white hover:border-antique-gold/50 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'card' ? 'bg-antique-gold/20 text-antique-gold' : 'bg-surface-container text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-navy">Credit / Debit Card</p>
                  <p className="text-[10px] text-on-surface-variant/80 font-medium">Visa, Mastercard, JCB</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'card' ? 'border-antique-gold' : 'border-outline-variant'}`}>
                {paymentMethod === 'card' && <div className="w-3 h-3 bg-antique-gold rounded-full" />}
              </div>
            </div>

            {/* Nested Card Form - Only shows when card is active */}
            {paymentMethod === 'card' && (
              <div className="mt-5 pt-5 border-t border-antique-gold/20 space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                  <label className="absolute -top-2 left-3 px-1.5 bg-white text-[10px] font-bold text-antique-gold tracking-wide rounded">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="w-full h-12 border border-outline px-4 rounded-xl focus:ring-1 focus:ring-antique-gold focus:border-antique-gold outline-none text-sm text-deep-navy font-semibold bg-white"
                  />
                  <div className="absolute right-3 top-3 flex gap-1.5">
                    <div className="h-6 px-1.5 bg-surface-container-high rounded flex items-center justify-center text-[8px] font-extrabold text-deep-navy">VISA</div>
                    <div className="h-6 px-1.5 bg-surface-container-high rounded flex items-center justify-center text-[8px] font-extrabold text-red-500">MC</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <label className="absolute -top-2 left-3 px-1.5 bg-white text-[10px] font-bold text-on-surface-variant tracking-wide rounded">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM / YY" 
                      className="w-full h-12 border border-outline px-4 rounded-xl focus:ring-1 focus:ring-antique-gold focus:border-antique-gold outline-none text-sm text-deep-navy font-semibold bg-white"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2 left-3 px-1.5 bg-white text-[10px] font-bold text-on-surface-variant tracking-wide rounded">CVV</label>
                    <input 
                      type="password" 
                      placeholder="***" 
                      maxLength={3}
                      className="w-full h-12 border border-outline px-4 rounded-xl focus:ring-1 focus:ring-antique-gold focus:border-antique-gold outline-none text-sm text-deep-navy font-semibold bg-white"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MoMo Option */}
          <div 
            onClick={() => setPaymentMethod('momo')}
            className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${
              paymentMethod === 'momo' 
                ? 'border-antique-gold bg-antique-gold/5 shadow-[0_4px_15px_rgba(212,175,55,0.1)]' 
                : 'border-outline-variant/60 bg-white hover:border-antique-gold/50 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'momo' ? 'bg-[#ae2070]/10 text-[#ae2070]' : 'bg-surface-container text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-navy">MoMo Wallet</p>
                  <p className="text-[10px] text-on-surface-variant/80 font-medium">Pay via MoMo App</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-[#ae2070] text-white text-[8px] font-extrabold rounded tracking-wider">MOMO</div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'momo' ? 'border-antique-gold' : 'border-outline-variant'}`}>
                  {paymentMethod === 'momo' && <div className="w-3 h-3 bg-antique-gold rounded-full" />}
                </div>
              </div>
            </div>
          </div>

          {/* ZaloPay Option */}
          <div 
            onClick={() => setPaymentMethod('zalopay')}
            className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${
              paymentMethod === 'zalopay' 
                ? 'border-antique-gold bg-antique-gold/5 shadow-[0_4px_15px_rgba(212,175,55,0.1)]' 
                : 'border-outline-variant/60 bg-white hover:border-antique-gold/50 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'zalopay' ? 'bg-[#008fe5]/10 text-[#008fe5]' : 'bg-surface-container text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-navy">ZaloPay Wallet</p>
                  <p className="text-[10px] text-on-surface-variant/80 font-medium">Pay via ZaloPay App</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-[#008fe5] text-white text-[8px] font-extrabold rounded tracking-wider">ZALOPAY</div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'zalopay' ? 'border-antique-gold' : 'border-outline-variant'}`}>
                  {paymentMethod === 'zalopay' && <div className="w-3 h-3 bg-antique-gold rounded-full" />}
                </div>
              </div>
            </div>
          </div>

          {/* Bank Transfer Option */}
          <div 
            onClick={() => setPaymentMethod('bank')}
            className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${
              paymentMethod === 'bank' 
                ? 'border-antique-gold bg-antique-gold/5 shadow-[0_4px_15px_rgba(212,175,55,0.1)]' 
                : 'border-outline-variant/60 bg-white hover:border-antique-gold/50 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'bank' ? 'bg-antique-gold/20 text-antique-gold' : 'bg-surface-container text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-navy">Bank Transfer</p>
                  <p className="text-[10px] text-on-surface-variant/80 font-medium">Fast transfer via Napas 24/7</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'bank' ? 'border-antique-gold' : 'border-outline-variant'}`}>
                {paymentMethod === 'bank' && <div className="w-3 h-3 bg-antique-gold rounded-full" />}
              </div>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-4 py-4 border-t border-outline-variant/30 mt-6 text-on-surface-variant/70 text-xs">
          <div className="flex items-center gap-1.5 text-success-green">
            <span className="material-symbols-outlined text-lg">verified_user</span>
            <span className="font-bold uppercase tracking-wider text-[9px]">Secure SSL</span>
          </div>
          <div className="h-4 w-[1px] bg-outline-variant/40" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-lg">lock</span>
            <span className="font-bold uppercase tracking-wider text-[9px]">PCI Compliant</span>
          </div>
        </div>
      </main>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-outline-variant/40 px-margin-mobile py-4 z-50 flex items-center justify-center pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.08)] rounded-t-2xl">
        <button 
          onClick={handlePayment}
          className="w-full bg-antique-gold hover:bg-deep-navy hover:text-white text-deep-navy py-4 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-base">lock</span>
          Pay {totalAmount.toLocaleString('vi-VN')} VND
        </button>
      </div>
    </div>
  );
}
