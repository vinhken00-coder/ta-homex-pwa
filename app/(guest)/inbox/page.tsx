import React from 'react';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCH4vQvEeWhiWd3ysQThYAeeaKyThfmlEjTcS3vD-xv574_T4_7vi_Ai4w_nYQm1xwTsqkSE7Nbd_hZi4O8MzMGAzD2eex07irjI5Ay7_WiyLUW-irNOAS-Z0jDE6rT9sEno71TgmcwSmnwgimbI29VIO0bnRiYVtXZEnycF2hZhscQ8Rt2-VK8Xaaq2wnoNpFzxCB8riiyfmzOvAtdBYZZov7OUOv9ht-nk7VW8eQ89TW1TMSRlegRwNeV3yneYjmgyHGyWvW7IIE';

const messages = [
  {
    id: '1',
    name: 'TA HomeX Support',
    preview: 'Your maintenance request #492 has been completed.',
    time: '10:45 AM',
    unread: true,
    online: true,
    isSupport: true,
    avatarUrl: null,
    pinned: true,
  },
  {
    id: '2',
    name: 'Mr. David Nguyen',
    preview: 'Thanks! See you soon at the lobby.',
    time: 'Yesterday',
    unread: false,
    online: true,
    isSupport: false,
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBU4iaZi0FyNFnI7OrJTrdJG5hq7aJ2Py7jyE_vT9ZNmNUdKAEO9r4kq5kY-vigYbn59tviOeXNRNE-Q4S6cv8pVxpLrXC2S5ZeBW9F_mA1lEj-qX_7OASTyehoxUz9ji1AyEiz5UTyDqM0M1as-zW9FGhuh8LzGhPvvADDS9JTwYBhaWaGqjxHF7KWcFULXhT6u_Cb-RWzLLgnRjpUnfBReTtjwwG_US5tBzcvcrwyq3ns74Kht7QJOXOdvQ7fYn2Qr9g3u6QK0o',
  },
  {
    id: '3',
    name: 'Emma Tran',
    preview: 'Can I request an early check-in for tomorrow?',
    time: '12:15 PM',
    unread: true,
    online: false,
    isSupport: false,
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7iMATosIly3CgKuOQvMQvqyZCmxaI3ploS7y-lZXr1vEf8TsCiBqq7z4pQW-Y_uakzHcZ1-fV-lD1RNmRwFlVGDD8ZRhmRawNPSKW6v57yJexnVdnsyN0bJ2ioOX1C1RDqN-1aHpgA9hdgEV0ThzYTdSp8eFs--UA32FjWDXQ5HqOXBY5NxKjQEDykRKy9pBptM-TyQngvI_n6z4m4FmTmOmtd-0yVOH4ZIJDvUfMmMmWzTzF-ygskJc8sumjQe1GAp-kYRUclrY',
  },
  {
    id: '4',
    name: 'James Smith',
    preview: 'The WiFi issue in Room 1205 has been resolved.',
    time: 'Yesterday',
    unread: false,
    online: false,
    isSupport: false,
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-CpHDC86QU5SzWP-e6iblt6WTMPN1y5-lVCqobgYluShR_dpFi-ZF8hwyR7wQvFVVc0HYO-nvibnleWNFf9lkFXQZgFsn09pVF5HD9Fhvy7Pqd5PGOKiWEBwcySxGU7n9wb-iNM0g05cM01rbiGoZ6xr5bIV1Tb7ndBIf5qg9cqDEu5ZQSdhSh2pLW6ePF5Qefrgi9y_aYTnEwsyrs557BHqv0OoMrsAYSmKQxY2ObQnl0SOmlbITHUQHkisdn1ny5HkROlYD9hY',
  },
  {
    id: '5',
    name: 'Sophia Le',
    preview: 'Thank you so much for the feedback!',
    time: 'Wednesday',
    unread: false,
    online: false,
    isSupport: false,
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAz3RFyeYVA3aYW57uHugle3T2R18tX-v8dvqSQZ_-YjfYQz7LvYgTRp-uzBXJf4sL_Spo8rSe17Kh5tj7f3y_1SV2qQxp98t8nQ7wrQiza7F-BUUqmwLD7m7NZ3tH-_cKLxapqOQ02hPXWpt7TODrsAKmBFYX8rJ1idbyjikveM1bgyq1ExBcX6ZPgOcPbk1oOTYceWNJndom9OsBxwb-5IFI0kdL5DE0fTuLoRzy2Keb1NHuPm_AIKS7GxeNaRqTCflf8J1vyPQ4',
  },
];

export default function InboxPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Top AppBar */}
      <header
        className="flex justify-between items-center px-margin-mobile h-16 w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-outline-variant/20"
      >
        <div className="flex items-center gap-3">
          <img alt="TA HomeX Logo" className="h-9 w-auto object-contain" src={LOGO_URL} />
          <h1 className="text-lg font-bold text-deep-navy tracking-tight">Inbox</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="material-symbols-outlined text-deep-navy p-1.5 rounded-full hover:bg-surface-container-low transition-colors">
            notifications
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw"
            />
          </div>
        </div>
      </header>

      <main className="pb-28">
        {/* Search Bar */}
        <section className="px-margin-mobile py-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-2xl py-3 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all"
              placeholder="Search messages..."
              type="text"
            />
          </div>
        </section>

        {/* Message List */}
        <section className="flex flex-col divide-y divide-outline-variant/10">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-white px-margin-mobile py-4 flex gap-4 items-center hover:bg-surface-container-low transition-colors cursor-pointer active:bg-surface-container ${
                msg.pinned ? 'border-l-4 border-antique-gold' : 'border-l-4 border-transparent'
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                {msg.isSupport ? (
                  <div className="w-14 h-14 rounded-full bg-deep-navy flex items-center justify-center shadow-sm">
                    <span
                      className="material-symbols-outlined text-antique-gold text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      support_agent
                    </span>
                  </div>
                ) : msg.avatarUrl ? (
                  <img
                    alt={msg.name}
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                    src={msg.avatarUrl}
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-deep-navy font-bold text-lg">
                    {msg.name[0]}
                  </div>
                )}
                {/* Online indicator */}
                <div
                  className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                    msg.online ? 'bg-success-green' : 'bg-outline-variant'
                  }`}
                />
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3
                    className={`text-sm truncate ${
                      msg.unread ? 'font-extrabold text-deep-navy' : 'font-semibold text-deep-navy'
                    }`}
                  >
                    {msg.name}
                  </h3>
                  <span
                    className={`text-[11px] font-semibold ml-2 flex-shrink-0 ${
                      msg.unread ? 'text-antique-gold font-bold' : 'text-on-surface-variant/60'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
                <p
                  className={`text-xs truncate ${
                    msg.unread
                      ? 'text-on-surface font-semibold'
                      : 'text-on-surface-variant'
                  }`}
                >
                  {msg.preview}
                </p>
              </div>

              {/* Unread dot */}
              {msg.unread && (
                <div className="w-2.5 h-2.5 bg-antique-gold rounded-full flex-shrink-0" />
              )}
            </div>
          ))}
        </section>
      </main>

      {/* Floating Compose Button */}
      <div className="fixed bottom-24 right-4 z-40">
        <button className="w-14 h-14 bg-deep-navy text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-transform hover:bg-antique-gold hover:text-deep-navy duration-200">
          <span className="material-symbols-outlined">edit_square</span>
        </button>
      </div>

      <GuestBottomNav />
    </div>
  );
}
