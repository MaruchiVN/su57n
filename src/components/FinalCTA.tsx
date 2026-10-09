import React from 'react';
import { Plane, GraduationCap, ShieldCheck, PhoneCall, Check, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenAcquisition: (mode: 'deposit' | 'full') => void;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenAcquisition,
  onOpenContact
}) => {
  return (
    <section id="acquisition" className="relative overflow-hidden py-20 lg:py-28 border-t border-slate-800 bg-[#07090f]">
      {/* Background glow and subtle tactical markings */}
      <div className="pointer-events-none absolute inset-0 bg-radial-vignette opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/20 px-3.5 py-1 text-xs font-mono font-medium text-red-400 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>NGHI THỨC CHUYỂN GIAO KHÍ TÀI QUÂN SỰ HẠNG SANG</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase text-balance">
            Bạn Đã Sẵn Sàng Thống Lĩnh Không Gian?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-pretty">
            Sở hữu kiệt tác hàng không quân sự thế hệ thứ 5 với quy trình bàn giao bảo mật, hỗ trợ kỹ thuật trực tiếp từ các kỹ sư trưởng Sukhoi.
          </p>

          {/* Three Core Guarantees & Policies */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="rounded-xl border border-slate-800/90 bg-[#0c1017]/80 p-5 backdrop-blur-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-950/60 border border-red-800/50 text-red-400 mb-4">
                <Plane className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Vận chuyển Toàn cầu
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                Hỗ trợ vận chuyển đặc biệt bằng máy bay vận tải siêu nặng Antonov An-124 hoặc bay trực tiếp bàn giao tại căn cứ không quân chỉ định.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/90 bg-[#0c1017]/80 p-5 backdrop-blur-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 mb-4">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Huấn luyện Bay 6 Tháng
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                Đi kèm gói đào tạo chuyên sâu trọn gói cho 2 phi công tác chiến và 10 kỹ sư bảo trì mặt đất tại Trung tâm huấn luyện Chkalov.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/90 bg-[#0c1017]/80 p-5 backdrop-blur-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Bảo hành Chính hãng 5 Năm
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                Cam kết hỗ trợ linh kiện thay thế, đại tu khung thân máy bay và kiểm định định kỳ động cơ Saturn AL-41F1 chuẩn tiêu chuẩn quân sự.
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAcquisition('deposit')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-2xl shadow-red-950/60 hover:bg-red-500 transition-all active:scale-[0.98]"
            >
              <span>Đặt cọc ngay (10%) · $3,600,000 USD</span>
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white transition-all"
            >
              <PhoneCall className="h-4 w-4 text-red-400" />
              <span>Liên hệ Đại lý Vũ khí Cấp cao</span>
            </button>
          </div>

          {/* Quiet Trust Checklist */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-red-400" />
              Thẩm định phái đoàn theo quy chuẩn quốc tế
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-red-400" />
              Mã hóa kênh liên lạc cấp ngoại giao
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-red-400" />
              Bàn giao hồ sơ kỹ thuật số ICAO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
