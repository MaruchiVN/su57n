import React from 'react';
import { ModelViewer3D } from './ModelViewer3D';
import { ShoppingCart, ShieldCheck, Zap, Crosshair } from 'lucide-react';

interface HeroSectionProps {
  onOpenAcquisition: (mode: 'deposit' | 'full') => void;
  onAddToCart: () => void;
  isAddedToCart: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAcquisition,
  onAddToCart,
  isAddedToCart
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-vignette opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subtitle / Domain trust indicator */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
          <span className="text-red-500 font-bold">VKS MILITARY AEROSPACE</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>THẾ HỆ THỨ 5 (5TH GEN)</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>NATO CODE: FELON</span>
        </div>

        {/* Top Header Split: Headline & Pricing */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase text-balance">
              Sukhoi Su-57 Felon
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-slate-300 mt-1">
                Kẻ Thống Trị Bầu Trời
              </span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-400 font-normal leading-relaxed text-pretty">
              Tiêm kích tàng hình thế hệ thứ 5. Sức mạnh vượt trội, cơ động tối đa.
            </p>
          </div>

          {/* Luxury Pricing Box */}
          <div className="flex flex-col items-start lg:items-end justify-end shrink-0 bg-slate-900/40 lg:bg-transparent p-4 lg:p-0 rounded-lg border border-slate-800 lg:border-0">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Giá niêm yết thương mại quốc tế
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white tabular-nums">
                $36,000,000
              </span>
              <span className="text-sm font-semibold font-mono text-red-500 uppercase">
                USD
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Đặt cọc khởi điểm 10%:</span>
              <span className="font-semibold text-slate-200 tabular-nums">$3,600,000 USD</span>
            </div>
          </div>
        </div>

        {/* 3D Visualizer Module */}
        <div id="visualizer-3d" className="mt-8">
          <ModelViewer3D />
        </div>

        {/* Action Controls & Fast Buy Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/90 bg-[#0d111a]/80 backdrop-blur-xs">
          <div className="flex items-center gap-4 text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Bàn giao chính hãng Sukhoi
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden md:inline">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Zap className="h-4 w-4 text-amber-400" />
              Sẵn sàng bàn giao theo lô
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onAddToCart}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                isAddedToCart
                  ? 'border-emerald-600 bg-emerald-950/40 text-emerald-400'
                  : 'border-slate-700 bg-slate-800/80 text-slate-200 hover:border-slate-500 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              {isAddedToCart ? 'Đã thêm vào giỏ' : 'Thêm vào giỏ hàng'}
            </button>

            <button
              onClick={() => onOpenAcquisition('deposit')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-red-950/50 hover:bg-red-500 transition-all active:scale-[0.98]"
            >
              <Crosshair className="h-4 w-4" />
              Đặt cọc ngay (10%)
            </button>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-800 bg-[#0c1017] p-4 text-left">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tốc độ tối đa</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono text-white tabular-nums">Mach 2.0</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">2,135 km/h không afterburner</span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#0c1017] p-4 text-left">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tầm bay tối đa</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono text-white tabular-nums">3,500 km</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">4,500 km với thùng dầu phụ</span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#0c1017] p-4 text-left">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tải trọng vũ khí</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono text-white tabular-nums">10 Tấn</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Khoang thân trong + giá treo ngoài</span>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#0c1017] p-4 text-left">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Radar quét 360°</span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono text-white tabular-nums">N036 AESA</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Mắt thần Byelka 5 mảng ăng-ten</span>
          </div>
        </div>
      </div>
    </section>
  );
};
