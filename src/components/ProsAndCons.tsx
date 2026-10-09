import React from 'react';
import { PROS_LIST, CONS_LIST } from '../data/su57Data';
import { Check, AlertTriangle, Layers, Award } from 'lucide-react';

export const ProsAndCons: React.FC = () => {
  return (
    <section id="pros-cons" className="relative py-16 lg:py-24 border-t border-slate-800/80 bg-[#090c13]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 mb-2">
            <Layers className="h-3.5 w-3.5" />
            <span>ĐÁNH GIÁ CHUYÊN SÂU TỪ CHUYÊN GIA KHÔNG CHIẾN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase text-balance">
            Phân Tích Ưu & Nhược Điểm
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Minh bạch tối đa về năng lực thực chiến, triết lý thiết kế quân sự Nga và thực tế chuỗi cung ứng sản xuất giới hạn.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Ưu điểm - Pros */}
          <div className="flex flex-col rounded-xl border border-slate-700/80 bg-[#0d121c] p-6 lg:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                  Ưu Điểm Vượt Trội (Pros)
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                5 Lợi thế áp đảo
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-6 flex-1">
              {PROS_LIST.map((pro, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono font-bold mt-0.5 border border-emerald-800/40">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">
                      {pro.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed font-normal">
                      {pro.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 bg-slate-900/40 -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-5 rounded-b-xl flex items-center justify-between text-xs">
              <span className="font-mono text-slate-400">Tỷ lệ chi phí / hiệu năng:</span>
              <span className="font-mono font-bold text-emerald-400">TỐI ƯU HÀNG ĐẦU THẾ GIỚI</span>
            </div>
          </div>

          {/* Column 2: Nhược điểm & Thực tế Khan hiếm - Cons */}
          <div className="flex flex-col rounded-xl border border-slate-700/80 bg-[#0d121c] p-6 lg:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-950/80 border border-amber-700/50 text-amber-400">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                  Nhược Điểm & Thực Tế (Cons)
                </h3>
              </div>
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                Hạn mức khan hiếm
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-6 flex-1">
              {CONS_LIST.map((con, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-950 text-amber-400 text-xs font-mono font-bold mt-0.5 border border-amber-800/40">
                    !
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">
                      {con.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed font-normal">
                      {con.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FOMO Allocation Banner */}
            <div className="mt-8 pt-5 border-t border-slate-800/80 bg-red-950/20 border-red-900/30 -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-5 rounded-b-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-mono text-red-400 font-semibold uppercase block">
                  Hạn ngạch đợt phân bổ (Lot 2026-2027)
                </span>
                <span className="text-slate-400 text-[11px]">Chỉ còn 3 suất đặt hàng ưu tiên giao sớm</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-red-900/50 text-red-200 border border-red-700/60 font-semibold self-start sm:self-auto">
                Ưu tiên đặt cọc sớm
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Table vs F-35 & F-22 */}
        <div className="mt-12 overflow-hidden rounded-xl border border-slate-800 bg-[#0c1017]">
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-red-500" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Bảng So Sánh Chiến Đấu Cơ Thế Hệ 5 Trực Tiếp
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">Dữ liệu công khai quốc tế</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#080b10] text-slate-400 uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 font-semibold">Tiêu chí so sánh</th>
                  <th className="py-3 px-4 text-red-400 font-bold bg-red-950/20">Sukhoi Su-57 Felon</th>
                  <th className="py-3 px-4">Lockheed F-35A Lightning II</th>
                  <th className="py-3 px-4">Lockheed F-22 Raptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">Giá niêm yết thương mại</td>
                  <td className="py-3 px-4 font-bold text-emerald-400 bg-red-950/10 tabular-nums">$36,000,000 USD</td>
                  <td className="py-3 px-4 tabular-nums">~$80,000,000 USD</td>
                  <td className="py-3 px-4 tabular-nums">~$143,000,000 USD (Ngừng SX)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">Tốc độ tối đa</td>
                  <td className="py-3 px-4 font-bold text-white bg-red-950/10 tabular-nums">Mach 2.0 (2,135 km/h)</td>
                  <td className="py-3 px-4 tabular-nums">Mach 1.6 (1,960 km/h)</td>
                  <td className="py-3 px-4 tabular-nums">Mach 2.25 (2,410 km/h)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">Véc-tơ lực đẩy</td>
                  <td className="py-3 px-4 font-bold text-emerald-400 bg-red-950/10">3D Đa hướng (Pitch + Yaw)</td>
                  <td className="py-3 px-4 text-slate-400">Không có (Động cơ cố định)</td>
                  <td className="py-3 px-4">2D Chỉ Pitch (Lên/Xuống)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">Đường băng dã chiến</td>
                  <td className="py-3 px-4 font-bold text-emerald-400 bg-red-950/10">Cất/hạ cánh đường băng gồ ghề</td>
                  <td className="py-3 px-4 text-slate-400">Yêu cầu đường băng siêu sạch FOD</td>
                  <td className="py-3 px-4 text-slate-400">Yêu cầu bảo trì nhà chứa đặc biệt</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">Tải trọng vũ khí tối đa</td>
                  <td className="py-3 px-4 font-bold text-emerald-400 bg-red-950/10 tabular-nums">10,000 kg (10 Tấn)</td>
                  <td className="py-3 px-4 tabular-nums">8,160 kg</td>
                  <td className="py-3 px-4 tabular-nums">9,000 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
