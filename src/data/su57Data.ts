export interface CamouflageOption {
  id: string;
  name: string;
  description: string;
  colorCode: string;
  badge: string;
}

export interface WeaponLoadout {
  id: string;
  name: string;
  role: string;
  description: string;
  priceDelta: number;
  missiles: string[];
}

export const CAMOUFLAGE_OPTIONS: CamouflageOption[] = [
  {
    id: 'digital-camo',
    name: 'Digital Pixelated Camo',
    description: 'Họa tiết ngụy trang số hóa xanh lam - xám tiêu chuẩn VKS Nga, tối ưu hóa tán xạ thị giác tầng bình lưu.',
    colorCode: '#4a6572',
    badge: 'Tiêu chuẩn Nhà máy'
  },
  {
    id: 'stealth-black',
    name: 'Stealth Matte Titanium',
    description: 'Sơn hấp thụ sóng radar (RAM) màu đen nhám carbon, chuyên dụng cho tác chiến tàng hình ban đêm.',
    colorCode: '#1a1f26',
    badge: 'Tối ưu Tàng hình'
  },
  {
    id: 'arctic-splinter',
    name: 'Arctic Splinter Grey',
    description: 'Màu xám băng tuyết sắc cạnh, che chắn tầm nhìn hồng ngoại trong điều kiện nhiệt độ cực âm.',
    colorCode: '#8a9ba8',
    badge: 'Tác chiến Bắc Cực'
  },
  {
    id: 'desert-mirage',
    name: 'Desert Mirage Khaki',
    description: 'Sắc vàng cát kết hợp xám nhiệt đới, che chắn tầm quét quang điện tử trên địa hình sa mạc khô hạn.',
    colorCode: '#9e8a68',
    badge: 'Tác chiến Sa mạc'
  }
];

export const WEAPON_LOADOUTS: WeaponLoadout[] = [
  {
    id: 'air-superiority',
    name: 'Gói Chiếm Ưu Thế Trên Không (Air Dominance)',
    role: 'Không đối không tầm xa & cận chiến',
    description: '4x Tên lửa R-77M radar chủ động khoang trong + 2x R-74M2 hồng ngoại cánh gập bên má.',
    priceDelta: 0,
    missiles: ['4x R-77M (190 km)', '2x R-74M2 (Dogfight)', 'Pháo 30mm Gryazev-Shipunov GSh-30-1']
  },
  {
    id: 'deep-strike',
    name: 'Gói Đột Kích Tầm Xa & Chống Hạm (Maritime & Strike)',
    role: 'Tấn công đối đất, diệt hạm tàng hình',
    description: '2x Tên lửa hành trình tàng hình Kh-59MK2 + 2x Tên lửa chống hạm siêu âm Kh-31AD + 2x R-77M bảo vệ.',
    priceDelta: 2400000,
    missiles: ['2x Kh-59MK2 Tàng hình', '2x Kh-31AD Diệt hạm Mach 3.5', '2x R-77M Tự vệ']
  },
  {
    id: 'multi-role-heavy',
    name: 'Gói Đa Nhiệm Tối Đa Tải Trọng 10 Tấn',
    role: 'Toàn diện chiến trường mở rộng',
    description: 'Kết hợp giá treo ngoài và khoang trong: 4x Bom lượn KAB-500Kr + 4x R-77M + 2x Thùng dầu phụ vứt bỏ.',
    priceDelta: 3800000,
    missiles: ['4x Bom thông minh KAB-500Kr', '4x Tên lửa không đối không', '2x Thùng dầu 1,500L']
  }
];

export const TECHNICAL_SPECS = [
  {
    label: 'Tốc độ tối đa',
    value: 'Mach 2.0',
    detail: '2,135 km/h ở độ cao lớn (Supercruise không cần buồng đốt)',
    category: 'Vận hành'
  },
  {
    label: 'Tầm hoạt động',
    value: '3,500 km',
    detail: 'Đạt tới 4,500 km khi mang 2 thùng nhiên liệu phụ khí động học',
    category: 'Vận hành'
  },
  {
    label: 'Kích thước',
    value: '20.1m × 14.1m',
    detail: 'Chiều dài 20.1m, Sải cánh 14.1m, Chiều cao 4.6m',
    category: 'Khung vỏ'
  },
  {
    label: 'Hệ thống Động cơ',
    value: '2 × Saturn AL-41F1',
    detail: 'Động cơ phản lực cánh quạt đẩy với kiểm soát véc-tơ lực đẩy 3D',
    category: 'Động lực'
  },
  {
    label: 'Trần bay tác chiến',
    value: '20,000 m (66,000 ft)',
    detail: 'Tốc độ leo cao 330 m/giây, vượt trội trên tầng bình lưu',
    category: 'Vận hành'
  },
  {
    label: 'Hệ thống Vũ khí',
    value: 'Tải trọng 10,000 kg',
    detail: 'Khoang trong 4 giá treo chính + 2 khoang hông + giá treo ngoài đa nhiệm',
    category: 'Hỏa lực'
  },
  {
    label: 'Hệ thống Radar',
    value: 'Sh121 N036 Byelka AESA',
    detail: '5 mảng ăng-ten quét mảng pha chủ động 360 độ (băng X và L)',
    category: 'Avionics'
  },
  {
    label: 'Hệ thống Quang điện tử',
    value: 'OLS-50M & 101KS Atoll',
    detail: 'Hệ thống tìm kiếm bám bắt quang hồng ngoại IRST không phát xạ sóng',
    category: 'Avionics'
  }
];

export const PROS_LIST = [
  {
    title: 'Khả năng cận chiến (Dogfight) vô đối',
    description: 'Hệ thống véc-tơ lực đẩy 3D độc quyền cho phép xoay mũi máy bay độc lập với quỹ đạo bay, làm chủ hoàn toàn các góc cơ động hẹp.'
  },
  {
    title: 'Tốc độ cực đại ấn tượng (Mach 2)',
    description: 'Duy trì vận tốc Mach 2.0 bền bỉ và khả năng Supercruise vượt âm mà không tiêu tốn nhiên liệu sau buồng đốt.'
  },
  {
    title: 'Cất/hạ cánh trên đường băng dã chiến',
    description: 'Hệ thống càng đáp siêu bền gia cố kép và lưới chắn dị vật cửa hút gió, cất cánh hoàn hảo từ sân bay dã chiến gồ ghề vượt trội so với tiêm kích phương Tây.'
  },
  {
    title: 'Tải trọng vũ khí khổng lồ lên tới 10 tấn',
    description: 'Sức chứa hỏa lực áp đảo trong 2 khoang thân chính sâu lòng cùng 2 khoang hông phản ứng nhanh, linh hoạt mở rộng thêm giá treo ngoài.'
  },
  {
    title: 'Mức giá $36,000,000 cực kỳ cạnh tranh',
    description: 'Chi phí sở hữu chỉ bằng một phần ba so với các dòng tiêm kích thế hệ 5 khác (F-35: ~80 triệu USD, F-22: trên 140 triệu USD).'
  }
];

export const CONS_LIST = [
  {
    title: 'Chỉ số tàng hình (RCS) cân bằng',
    description: 'Diện tích phản xạ radar được thiết kế cân bằng khoảng 0.1 - 0.5 m² để ưu tiên tối đa tính cơ động không chiến và tầm bay thay vì tàng hình tuyệt đối.'
  },
  {
    title: 'Lộ trình động cơ thế hệ mới (Izdeliye 30)',
    description: 'Các lô hiện tại sử dụng Saturn AL-41F1 cực kỳ ổn định và đã được kiểm chứng chiến trường, trong khi động cơ Izdeliye 30 vẫn đang hoàn tất chu kỳ tích hợp.'
  },
  {
    title: 'Số lượng sản xuất giới hạn (Allocation Slots)',
    description: 'Dây chuyền Komsomolsk-on-Amur ưu tiên năng lực phân bổ ngoại giao cấp cao; khách hàng phải xếp hàng theo hạn ngạch bàn giao nghiêm ngặt.'
  }
];
