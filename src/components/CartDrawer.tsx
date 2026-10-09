import React from 'react';
import { X, Trash2, Shield, ArrowRight } from 'lucide-react';
import { CamouflageOption, WeaponLoadout } from '../data/su57Data';
import heroImage from '../assets/images/su57_hero_cinematic_1791537846023.jpg';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
  onRemoveItem: () => void;
  selectedCamo: CamouflageOption;
  selectedLoadout: WeaponLoadout;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartCount,
  onRemoveItem,
  selectedCamo,
  selectedLoadout,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const basePrice = 36000000;
  const loadoutPrice = selectedLoadout.priceDelta;
  const total = basePrice + loadoutPrice;
  const deposit = total * 0.1;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
      <div className="w-full max-w-md h-full bg-[#0a0d14] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl text-slate-100 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white">
                Giỏ Hàng Khí Tài Quân Sự
              </h3>
              <span className="text-xs font-mono text-slate-400">
                {cartCount} Sản phẩm trong danh sách
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="mt-6 space-y-4">
            {cartCount > 0 ? (
              <div className="rounded-xl border border-slate-800 bg-[#0e121a] p-4">
                <div className="flex gap-4">
                  <div className="h-20 w-24 rounded-lg overflow-hidden shrink-0 border border-slate-700">
                    <img
                      src={heroImage}
                      alt="Sukhoi Su-57"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">
                      Sukhoi Su-57 Felon (Gen 5)
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                      Màu sơn: {selectedCamo.name}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400 truncate">
                      Gói: {selectedLoadout.name}
                    </p>
                    <div className="mt-2 text-sm font-bold font-mono text-red-400 tabular-nums">
                      ${total.toLocaleString()} USD
                    </div>
                  </div>
                  <button
                    onClick={onRemoveItem}
                    title="Xóa khỏi giỏ hàng"
                    className="text-slate-500 hover:text-red-400 p-1 self-start"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Đặt cọc ban đầu (10%):</span>
                  <span className="font-bold text-white tabular-nums">${deposit.toLocaleString()} USD</span>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-slate-400">
                <Shield className="h-10 w-10 mx-auto text-slate-600 mb-2" />
                <p className="text-sm">Giỏ hàng của bạn đang trống.</p>
                <p className="text-xs text-slate-400 mt-1">
                  Chọn "Thêm vào giỏ hàng" từ màn hình chính để lưu cấu hình Su-57.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        {cartCount > 0 && (
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Tổng giá trị đơn hàng:</span>
                <span className="text-white font-bold tabular-nums">${total.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Hạn mức cọc thanh toán ngay:</span>
                <span className="text-red-400 font-bold tabular-nums">${deposit.toLocaleString()} USD</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-red-500 transition-all"
            >
              <span>Tiến hành Đặt cọc / Ký hợp đồng</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
