import React, { useState } from 'react';
import { TECHNICAL_SPECS, CAMOUFLAGE_OPTIONS, WEAPON_LOADOUTS, CamouflageOption, WeaponLoadout } from '../data/su57Data';
import { Cpu, Crosshair, Palette, CheckCircle2, Sliders } from 'lucide-react';

interface TechnicalSpecsProps {
  selectedCamo: CamouflageOption;
  onSelectCamo: (camo: CamouflageOption) => void;
  selectedLoadout: WeaponLoadout;
  onSelectLoadout: (loadout: WeaponLoadout) => void;
  onConfigureNow: () => void;
}

export const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  selectedCamo,
  onSelectCamo,
  selectedLoadout,
  onSelectLoadout,
  onConfigureNow
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'configurator'>('specs');
  const [specCategory, setSpecCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả thông số' },
    { id: 'Vận hành', label: 'Vận hành & Tầm bay' },
    { id: 'Khung vỏ', label: 'Khung vỏ & Kích thước' },
    { id: 'Động lực', label: 'Động cơ TVC' },
    { id: 'Hỏa lực', label: 'Vũ khí & Radar' },
  ];

  const filteredSpecs = specCategory === 'all'
    ? TECHNICAL_SPECS
    : TECHNICAL_SPECS.filter(s => s.category === specCategory || (specCategory === 'Hỏa lực' && (s.category === 'Hỏa lực' || s.category === 'Avionics')));

  return (
    <section id="specs" className="relative py-16 lg:py-24 border-t border-slate-800/80 bg-[#080a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 mb-2">
              <Cpu className="h-3.5 w-3.5" />
              <span>DỮ LIỆU KỸ THUẬT QUÂN SỰ CHÍNH XÁC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase text-balance">
              Thông Số Kỹ Thuật Chi Tiết
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
              Trang bị hệ thống động lực Saturn AL-41F1 tích hợp véc-tơ lực đẩy 3D, hệ thống cảm biến đa dải tần và khoang vũ khí tùy biến linh hoạt.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center rounded-lg border border-slate-800 bg-[#0c1017] p-1 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="h-3.5 w-3.5" />
              Bảng dữ liệu
            </button>
            <button
              onClick={() => setActiveTab('configurator')}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeTab === 'configurator'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette className="h-3.5 w-3.5" />
              Tùy biến cấu hình
            </button>
          </div>
        </div>

        {activeTab === 'specs' ? (
          <div>
            {/* Category Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSpecCategory(cat.id)}
                  className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    specCategory === cat.id
                      ? 'bg-slate-800 text-white border border-slate-600'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800/90 bg-[#0c1017] p-5 hover:border-slate-700 transition-colors"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    {spec.label}
                  </span>
                  <div className="mt-2 text-xl font-bold font-mono text-white tracking-tight tabular-nums">
                    {spec.value}
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Armament & Engine Deep Dive Detail Card */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-[#0d121c] p-6 lg:p-8">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Crosshair className="h-4 w-4 text-red-500" />
                Hệ Thống Hỏa Lực Tiêu Chuẩn & Cấu Hình Khoang Giấu
              </h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
                  <h4 className="font-semibold text-slate-100 font-mono text-sm text-red-400">
                    Khoang Thân Chính Kép
                  </h4>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    2 khoang vũ khí chính dạng tandem nằm giữa hai động cơ, chứa tối đa 4 tên lửa không đối không ngoài tầm nhìn R-77M hoặc tên lửa hành trình tàng hình Kh-59MK2.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
                  <h4 className="font-semibold text-slate-100 font-mono text-sm text-cyan-400">
                    Khoang Cánh Hông Khí Động Học
                  </h4>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    2 khoang khí động học hình tam giác dưới gốc cánh (wing roots) chứa tên lửa tự vệ tầm nhiệt R-74M2, mở cửa phóng tức thì chỉ trong 0.4 giây.
                  </p>
                </div>

                <div className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-4">
                  <h4 className="font-semibold text-slate-100 font-mono text-sm text-emerald-400">
                    Pháo Tự Động Nội Thân
                  </h4>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Pháo Gryazev-Shipunov GSh-30-1 cỡ nòng 30mm với 150 viên đạn, tốc độ bắn 1,800 phát/phút với cửa che tàng hình tự động mở khi ngắm bắn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Customizer View */
          <div className="rounded-xl border border-slate-800 bg-[#0c1017] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customizer Option 1: Camouflage */}
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Palette className="h-4 w-4 text-red-400" />
                  1. Chọn Phối Màu Sơn Ngụy Trang (Camouflage)
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Lớp phủ polymer RAM giảm hấp thụ phản xạ radar theo từng chiến trường tác chiến:
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAMOUFLAGE_OPTIONS.map(camo => {
                    const isSelected = selectedCamo.id === camo.id;
                    return (
                      <div
                        key={camo.id}
                        onClick={() => onSelectCamo(camo)}
                        className={`cursor-pointer rounded-lg border p-3.5 transition-all ${
                          isSelected
                            ? 'border-red-500 bg-[#141a24] shadow-md shadow-red-950/30'
                            : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span
                              className="h-4 w-4 rounded-full border border-white/20"
                              style={{ backgroundColor: camo.colorCode }}
                            />
                            <span className="text-xs font-bold text-white">{camo.name}</span>
                          </div>
                          {isSelected && <CheckCircle2 className="h-4 w-4 text-red-400" />}
                        </div>
                        <p className="mt-2 text-[11px] text-slate-400 leading-normal">
                          {camo.description}
                        </p>
                        <span className="mt-2 inline-block text-[10px] font-mono text-red-400 uppercase">
                          {camo.badge}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Customizer Option 2: Armament Loadout */}
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Crosshair className="h-4 w-4 text-red-400" />
                  2. Chọn Gói Cấu Hình Trang Bị Vũ Khí
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Tùy chỉnh hệ vũ khí lắp đặt đồng bộ trước khi bàn giao:
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  {WEAPON_LOADOUTS.map(loadout => {
                    const isSelected = selectedLoadout.id === loadout.id;
                    return (
                      <div
                        key={loadout.id}
                        onClick={() => onSelectLoadout(loadout)}
                        className={`cursor-pointer rounded-lg border p-4 transition-all ${
                          isSelected
                            ? 'border-red-500 bg-[#141a24] shadow-md shadow-red-950/30'
                            : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-white">{loadout.name}</h4>
                            <span className="text-[11px] font-mono text-slate-400">{loadout.role}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-bold font-mono text-white tabular-nums">
                              {loadout.priceDelta === 0 ? 'Kèm theo tiêu chuẩn' : `+$${loadout.priceDelta.toLocaleString()} USD`}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="h-4 w-4 text-red-400 ml-auto mt-0.5" />
                            )}
                          </div>
                        </div>

                        <p className="mt-2 text-[11px] text-slate-400">
                          {loadout.description}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {loadout.missiles.map((m, idx) => (
                            <span key={idx} className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Customizer Subtotal Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Cấu hình đã chọn:</span>
                <p className="text-sm font-bold text-white">
                  Su-57 [{selectedCamo.name}] + {selectedLoadout.name}
                </p>
                <p className="text-xs font-mono text-slate-400">
                  Tổng giá trị ước tính: <span className="text-red-400 font-bold tabular-nums">${(36000000 + selectedLoadout.priceDelta).toLocaleString()} USD</span>
                </p>
              </div>

              <button
                onClick={onConfigureNow}
                className="rounded-lg bg-red-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-red-500 transition-all whitespace-nowrap"
              >
                Tiến hành Đặt cọc cấu hình này &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
