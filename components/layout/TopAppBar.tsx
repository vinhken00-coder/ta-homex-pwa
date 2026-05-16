import React from 'react';
import Link from 'next/link';

interface TopAppBarProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
  showProfile?: boolean;
  profileImageUrl?: string;
  showNotifications?: boolean;
  actionIcon?: string;
  onActionClick?: () => void;
}

export default function TopAppBar({
  title,
  showBack,
  backHref = '#',
  showProfile,
  profileImageUrl,
  showNotifications,
  actionIcon,
  onActionClick,
}: TopAppBarProps) {
  return (
    <header className="bg-surface flex justify-between items-center px-margin-mobile h-20 w-full sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      {/* Left section: Back button or Profile picture */}
      {showBack ? (
        <Link href={backHref} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container transition-colors text-deep-navy">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      ) : showProfile ? (
        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden flex-shrink-0">
          <img alt="User Profile" className="w-full h-full object-cover" src={profileImageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw"} />
        </div>
      ) : (
        <div className="w-10" />
      )}

      {/* Middle section: Title or Logo */}
      <div className="flex-1 flex justify-center">
        {title ? (
          <h2 className="font-headline-sm text-headline-sm text-deep-navy">{title}</h2>
        ) : (
          <img alt="TA HomeX Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4vQvEeWhiWd3ysQThYAeeaKyThfmlEjTcS3vD-xv574_T4_7vi_Ai4w_nYQm1xwTsqkSE7Nbd_hZi4O8MzMGAzD2eex07irjI5Ay7_WiyLUW-irNOAS-Z0jDE6rT9sEno71TgmcwSmnwgimbI29VIO0bnRiYVtXZEnycF2hZhscQ8Rt2-VK8Xaaq2wnoNpFzxCB8riiyfmzOvAtdBYZZov7OUOv9ht-nk7VW8eQ89TW1TMSRlegRwNeV3yneYjmgyHGyWvW7IIE" />
        )}
      </div>

      {/* Right section: Actions */}
      <div className="flex items-center gap-2 flex-shrink-0 w-10 justify-end">
        {actionIcon ? (
          <button onClick={onActionClick} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-primary">{actionIcon}</span>
          </button>
        ) : showNotifications ? (
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-primary">notifications</span>
          </button>
        ) : null}
      </div>
    </header>
  );
}
