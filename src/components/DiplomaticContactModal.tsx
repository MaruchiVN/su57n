import React, { useState } from 'react';
import { X, PhoneCall, ShieldCheck, Mail, Send, CheckCircle2 } from 'lucide-react';

interface DiplomaticContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiplomaticContactModal: React.FC<DiplomaticContactModalProps> = ({
  isOpen,
  onClose
}) => {
  const [delegationName, setDelegationName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-[#0d111a] p-6 sm:p-8 shadow-2xl text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-500 mb-2">
              <PhoneCall className="h-4 w-4" />
              <span>KÊNH NGOẠI GIAO & PHÂN PHỐI QUÂN SỰ</span>
            </div>
            <h3 className="text-xl font-bold uppercase text-white">
              Liên Hệ Đại Lý Vũ Khí Cấp Cao
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Kết nối trực tiếp với đại diện ủy quyền Sukhoi & Rosoboronexport để thu xếp các chuyến bay trình diễn thực tế hoặc đàm phán hợp đồng đặc biệt.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Đoàn đại biểu / Quốc gia / Cơ quan liên lạc
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Tùy viên Quốc phòng / Phái đoàn Cấp cao"
                  value={delegationName}
                  onChange={(e) => setDelegationName(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Địa chỉ Email bảo mật hoặc Kênh mã hóa
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@defense-ministry.gov"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">
                  Nội dung đề xuất / Yêu cầu bay khảo sát
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Yêu cầu tham quan trực tiếp tại Viện Nghiên cứu Bay Gromov hoặc đăng ký lịch bay trải nghiệm thực tế..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Mọi trao đổi được bảo vệ theo hiệp định bảo mật quân sự song phương.</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-all"
              >
                <Send className="h-4 w-4" />
                Gửi Công Văn Liên Lạc Bảo Mật
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 border border-emerald-600/60 text-emerald-400 mb-3">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white uppercase">Công Văn Đã Được Tiếp Nhận</h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Văn phòng Tùy viên Quân sự Cấp cao sẽ thiết lập đường truyền liên lạc bảo mật với đại diện <strong>{delegationName}</strong> trong vòng 24 giờ làm việc.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-slate-800 border border-slate-700 px-6 py-2 text-xs font-bold uppercase text-white hover:bg-slate-700"
            >
              Đóng Cửa Sổ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
