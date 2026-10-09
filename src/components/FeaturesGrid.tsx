import React, { useState } from 'react';
import { EyeOff, Gauge, Wind, Radio, Shield, ChevronRight } from 'lucide-react';
import flightImage from '../assets/images/su57_supercruise_flight_1791537859538.jpg';
import radarImage from '../assets/images/su57_radar_avionics_1791537872956.jpg';

export const FeaturesGrid: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 'stealth',
      title: 'Tàng hình (Stealth)',
      sub: 'Giảm thiểu tiết diện phản xạ sóng Radar (RCS)',
      description: 'Thiết kế khí động học tiên tiến kết hợp vật liệu composite hấp thụ sóng vô tuyến RAM. Toàn bộ khoang vũ khí chính và khoang phụ được giấu kín bên trong thân giúp triệt tiêu phản xạ radar từ mọi góc quét đối phương.',
      icon: EyeOff,
      metric: 'RCS ~0.1 m²',
      metricLabel: 'Tiết diện radar khoang kín'
    },
    {
      id: 'supercruise',
      title: 'Supercruise (Bay siêu âm)',
      sub: 'Duy trì tốc độ vượt âm không cần buồng đốt sau',
      description: 'Khả năng duy trì hành trình bay với tốc độ siêu thanh Mach 1.3 - 1.6 liên tục mà không cần kích hoạt buồng đốt sau (afterburner), giúp tiết kiệm tới 60% nhiên liệu và hạn chế tối đa bức xạ nhiệt hồng ngoại bị tên lửa tầm nhiệt bám bắt.',
      icon: Gauge,
      metric: 'Mach 1.6+',
      metricLabel: 'Hành trình vượt âm ổn định'
    },
    {
      id: 'supermaneuverability',
      title: 'Siêu cơ động (Supermaneuverability)',
      sub: 'Động cơ véc-tơ lực đẩy 3D không đối xứng',
      description: 'Động cơ kiểm soát véc-tơ lực đẩy 3D cho phép vòi phun lệch trục đa hướng theo cả góc pitch và yaw (±20°), giúp Su-57 thực hiện hoàn hảo các bài bay thao diễn cực hạn như "Pugachev\'s Cobra", "Kulbit" và lượn phẳng xoay tròn tại chỗ.',
      icon: Wind,
      metric: '±20° 3D TVC',
      metricLabel: 'Góc lệch hướng lực đẩy'
    },
    {
      id: 'byelka',
      title: 'Mắt thần Byelka',
      sub: 'Hệ thống Radar N036 AESA quét mảng pha 360°',
      description: 'Tổ hợp radar N036 Byelka trang bị 5 mảng ăng-ten mảng pha quét điện tử chủ động AESA (mũi trước, 2 má sườn và 2 mép cánh băng tần L), mang lại tầm bao quát toàn cảnh 360 độ, theo dõi cùng lúc 60 mục tiêu và khóa bắn 16 mục tiêu.',
      icon: Radio,
      metric: '400+ km',
      metricLabel: 'Cự ly trinh sát phát hiện'
    }
  ];

  return (
    <section id="features" className="relative py-16 lg:py-24 border-t border-slate-800/80 bg-[#080b11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 mb-2">
            <Shield className="h-3.5 w-3.5" />
            <span>TỔ HỢP CÔNG NGHỆ THẾ HỆ THỨ 5</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase text-balance">
            Tính Năng Cốt Lõi Vượt Trội
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Sukhoi Su-57 Felon được định hình bởi sự kết hợp tinh vi giữa tính tàng hình quang phổ rộng, vận tốc siêu âm bền bỉ và hệ thống radar đa hướng độc tôn.
          </p>
        </div>

        {/* 4 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isSelected = activeFeature === idx;

            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(idx)}
                className={`group relative cursor-pointer rounded-xl border p-6 transition-all duration-200 ${
                  isSelected
                    ? 'border-red-600/70 bg-[#0f141f] shadow-lg shadow-red-950/20'
                    : 'border-slate-800/90 bg-[#0c0f16] hover:border-slate-700 hover:bg-[#0e121a]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-colors ${
                      isSelected
                        ? 'border-red-500 bg-red-600/20 text-red-400'
                        : 'border-slate-800 bg-slate-900 text-slate-300 group-hover:text-red-400 group-hover:border-slate-700'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        {feature.sub}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="block text-sm font-bold font-mono text-red-400 tabular-nums">
                      {feature.metric}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {feature.metricLabel}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {feature.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Trang bị tiêu chuẩn</span>
                  <span className="flex items-center gap-1 text-red-400 group-hover:translate-x-0.5 transition-transform">
                    Chi tiết kỹ thuật <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Visual Spotlight Banners */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Spotlight 1: Supersonic Flight */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0e14]">
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <img
                src={flightImage}
                alt="Sukhoi Su-57 Supercruise Stratospheric Flight"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider">
                VẬN TỐC & KHÍ ĐỘNG HỌC
              </span>
              <h4 className="mt-1 text-base font-bold text-white">
                Khí Động Học Nâng Thân Tích Hợp (Blended Wing-Body)
              </h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Thân máy bay đóng vai trò như một cánh nâng khổng lồ, tạo ra tỷ lệ lực nâng trên lực cản (L/D) tối ưu ở vận tốc siêu thanh và duy trì khả năng cơ động ở góc đón gió (AoA) cực lớn.
              </p>
            </div>
          </div>

          {/* Spotlight 2: Radar N036 Byelka */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0b0e14]">
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <img
                src={radarImage}
                alt="Sukhoi Su-57 AESA Radar Radome Architecture"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                AVIONICS & CẢM BIẾN
              </span>
              <h4 className="mt-1 text-base font-bold text-white">
                Mảng Quét Pha Băng L & Kháng Nhiễu Tác Chiến Điện Tử
              </h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Tích hợp ăng-ten băng L ở mép trước cánh cho phép phát hiện các mục tiêu tàng hình đối phương vốn được thiết kế tối ưu hóa chỉ để kháng phản xạ radar băng tần X phổ thông.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
