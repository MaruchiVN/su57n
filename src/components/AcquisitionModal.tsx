import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, FileText, Printer, Building2, User, Mail } from 'lucide-react';
import { CamouflageOption, WeaponLoadout } from '../data/su57Data';

interface AcquisitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode: 'deposit' | 'full';
  selectedCamo: CamouflageOption;
  selectedLoadout: WeaponLoadout;
}

export const AcquisitionModal: React.FC<AcquisitionModalProps> = ({
  isOpen,
  onClose,
  defaultMode,
  selectedCamo,
  selectedLoadout
}) => {
  const [mode, setMode] = useState<'deposit' | 'full'>(defaultMode);
  const [quantity, setQuantity] = useState<number>(1);
  const [tailCode, setTailCode] = useState<string>('057-RED');
  const [delegationName, setDelegationName] = useState<string>('Bộ Quốc Phòng / Quân chủng Không quân');
  const [delegateOfficer, setDelegateOfficer] = useState<string>('Thiếu tướng / Trưởng đoàn Đàm phán');
  const [encryptedContact, setDelegateContact] = useState<string>('defense-procurement@gov.state');
  const [paymentMethod, setPaymentMethod] = useState<'swift-escrow' | 'government-credit' | 'bilateral'>('swift-escrow');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const basePricePerJet = 36000000;
  const loadoutPrice = selectedLoadout.priceDelta;
  const unitTotal = basePricePerJet + loadoutPrice;
  const grandTotal = unitTotal * quantity;
  const depositRequired = grandTotal * 0.1;
  const finalPayAmount = mode === 'deposit' ? depositRequired : grandTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 rounded-2xl border border-slate-700 bg-[#0d111a] p-6 sm:p-8 shadow-2xl text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 mb-2">
              <ShieldAlert className="h-4 w-4" />
              <span>GIAO THỨC ĐẶT HÀNG KHÍ TÀI CHIẾN LƯỢC</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-white">
              Đơn Đặt Mua & Khởi Tạo Hạn Ngạch Bàn Giao Su-57
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Vui lòng hoàn tất thông tin phái đoàn để hệ thống phân bổ slot sản xuất từ Nhà máy Hàng không Komsomolsk-on-Amur.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Payment Type Switcher */}
              <div className="grid grid-cols-2 gap-3 p-1 rounded-xl border border-slate-800 bg-[#080b11]">
                <button
                  type="button"
                  onClick={() => setMode('deposit')}
                  className={`flex flex-col items-center justify-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    mode === 'deposit'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Đặt Cọc Giữ Chỗ (10%)</span>
                  <span className="text-[10px] font-mono opacity-80 tabular-nums">
                    ${depositRequired.toLocaleString()} USD
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('full')}
                  className={`flex flex-col items-center justify-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    mode === 'full'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Thanh Toán Toàn Phần (100%)</span>
                  <span className="text-[10px] font-mono opacity-80 tabular-nums">
                    ${grandTotal.toLocaleString()} USD
                  </span>
                </button>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-slate-400" />
                    Tổ chức / Phái đoàn Quốc gia
                  </label>
                  <input
                    type="text"
                    required
                    value={delegationName}
                    onChange={(e) => setDelegationName(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-slate-400" />
                    Sĩ quan đại diện ủy quyền
                  </label>
                  <input
                    type="text"
                    required
                    value={delegateOfficer}
                    onChange={(e) => setDelegateOfficer(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                    Kênh liên lạc ngoại giao / Email
                  </label>
                  <input
                    type="email"
                    required
                    value={encryptedContact}
                    onChange={(e) => setDelegateContact(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">
                    Số lượng máy bay Sukhoi Su-57
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-white focus:border-red-500 focus:outline-none font-mono"
                  >
                    <option value={1}>1 Chiếc (Nguyên mẫu đơn chiếc)</option>
                    <option value={2}>2 Chiếc (Biên đội cơ bản)</option>
                    <option value={4}>4 Chiếc (Phi đội tuần tra)</option>
                    <option value={12}>12 Chiếc (Trung đoàn không quân)</option>
                  </select>
                </div>
              </div>

              {/* Order Specification Summary Box */}
              <div className="rounded-xl border border-slate-800 bg-[#090c13] p-4 text-xs font-mono space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Màu sơn ngụy trang:</span>
                  <span className="text-white font-semibold">{selectedCamo.name}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Gói trang bị vũ khí:</span>
                  <span className="text-white font-semibold">{selectedLoadout.name}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Đơn giá cơ sở:</span>
                  <span className="text-white tabular-nums">$36,000,000 USD / chiếc</span>
                </div>
                {selectedLoadout.priceDelta > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Phụ phí gói vũ khí:</span>
                    <span className="text-white tabular-nums">+${selectedLoadout.priceDelta.toLocaleString()} USD</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white">
                  <span>Tổng số tiền giao dịch:</span>
                  <span className="text-red-400 tabular-nums">
                    ${finalPayAmount.toLocaleString()} USD
                  </span>
                </div>
                {mode === 'deposit' && (
                  <p className="text-[11px] text-slate-400 pt-1">
                    * Khoản đặt cọc 10% sẽ được khóa vào tài khoản ký quỹ quốc tế (Escrow). Phần còn lại sẽ thanh toán sau khi hoàn tất nghiệm thu bay kỹ thuật.
                  </p>
                )}
              </div>

              {/* Payment Protocol Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Phương thức bảo lãnh thanh toán
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    paymentMethod === 'swift-escrow' ? 'border-red-500 bg-red-950/20' : 'border-slate-800 bg-slate-900/50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'swift-escrow'}
                      onChange={() => setPaymentMethod('swift-escrow')}
                      className="text-red-600"
                    />
                    <span>Thư tín dụng L/C Quốc tế</span>
                  </label>

                  <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    paymentMethod === 'government-credit' ? 'border-red-500 bg-red-950/20' : 'border-slate-800 bg-slate-900/50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'government-credit'}
                      onChange={() => setPaymentMethod('government-credit')}
                      className="text-red-600"
                    />
                    <span>Tín dụng Liên chính phủ</span>
                  </label>

                  <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    paymentMethod === 'bilateral' ? 'border-red-500 bg-red-950/20' : 'border-slate-800 bg-slate-900/50'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'bilateral'}
                      onChange={() => setPaymentMethod('bilateral')}
                      className="text-red-600"
                    />
                    <span>Thanh toán Ngoại tệ Đối ứng</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono">
                  Bảo mật cấp độ quân sự SSL 4096-bit
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-xl bg-red-600 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xl hover:bg-red-500 transition-all active:scale-[0.98]"
                >
                  Xác nhận Khởi tạo Lệnh Đặt Hàng &rarr;
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen / Certificate of Procurement */
          <div className="py-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-600/60 text-emerald-400 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              LỆNH ĐẶT HÀNG ĐÃ ĐƯỢC XÁC THỰC
            </span>
            <h3 className="mt-1 text-2xl font-bold uppercase text-white">
              Hạn Ngạch Bàn Giao Su-57 Đã Được Kích Hoạt
            </h3>

            <div className="mt-6 rounded-xl border border-slate-700 bg-[#080b11] p-6 text-left text-xs font-mono space-y-3">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Mã Lệnh Đặt Hàng:</span>
                <span className="text-red-400 font-bold">SU57-ORD-2026-VKS8842</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Đơn vị thụ hưởng:</span>
                <span className="text-slate-200">{delegationName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Đại diện ký hợp đồng:</span>
                <span className="text-slate-200">{delegateOfficer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Khí tài phân bổ:</span>
                <span className="text-slate-200">{quantity} × Sukhoi Su-57 Felon</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Màu sơn đặc chủng:</span>
                <span className="text-slate-200">{selectedCamo.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Trang bị hỏa lực:</span>
                <span className="text-slate-200">{selectedLoadout.name}</span>
              </div>
              <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-bold">
                <span className="text-white">Giá trị ký quỹ ({mode === 'deposit' ? '10% Cọc' : 'Toàn phần'}):</span>
                <span className="text-emerald-400 tabular-nums">${finalPayAmount.toLocaleString()} USD</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold uppercase text-slate-200 hover:text-white"
              >
                <Printer className="h-4 w-4" />
                In Chứng Thư Phê Duyệt
              </button>
              <button
                onClick={onClose}
                className="rounded-lg bg-red-600 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-red-500"
              >
                Hoàn tất & Quay lại Trang chủ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
