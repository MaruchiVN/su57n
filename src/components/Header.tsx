import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenAcquisition: (mode: 'deposit' | 'full') => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAcquisition,
  onOpenCart,
  cartCount
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-base font-bold tracking-wider text-slate-100 uppercase whitespace-nowrap shrink-0 hover:text-red-400 transition-colors"
        >
          <span className="inline-block h-3.5 w-1 bg-red-600 rounded-xs"></span>
          SUKHOI FELON
        </a>

        {/* Zone 2: 4-5 Single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-slate-400">
          <a href="#visualizer-3d" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Khí động học
          </a>
          <a href="#features" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Tính năng cốt lõi
          </a>
          <a href="#pros-cons" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Ưu & Nhược điểm
          </a>
          <a href="#specs" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Thông số kỹ thuật
          </a>
          <a href="#acquisition" className="hover:text-slate-100 transition-colors whitespace-nowrap shrink-0">
            Chính sách mua hàng
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="Giỏ hàng vũ khí"
            className="relative flex items-center justify-center h-9 w-9 rounded-md border border-slate-700/80 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onOpenAcquisition('deposit')}
            className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 hover:bg-red-500 transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            Đặt cọc ngay (10%)
          </button>
        </div>
      </div>
    </header>
  );
};
