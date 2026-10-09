import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06080d] py-12 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider">
              <span className="inline-block h-3.5 w-1 bg-red-600 rounded-xs"></span>
              SUKHOI FELON DEFENSE
            </div>
            <p className="mt-1 text-slate-400 text-xs">
              Tiêm kích tàng hình thế hệ thứ 5 đa nhiệm Sukhoi Su-57. Đẳng cấp kỹ thuật hàng không quân sự tối thượng.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Tính năng</a>
            <a href="#pros-cons" className="hover:text-white transition-colors">Đánh giá</a>
            <a href="#specs" className="hover:text-white transition-colors">Thông số</a>
            <a href="#acquisition" className="hover:text-white transition-colors">Chính sách mua</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Sukhoi Aviation Corporation. Phân phối và giới thiệu thương mại quốc tế.
          </div>
          <div className="flex items-center gap-3">
            <span>Tiêu chuẩn ICAO / Military Airworthiness Standard</span>
            <span aria-hidden="true">·</span>
            <span>Kiểm soát xuất khẩu khí tài số 1993/RU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
