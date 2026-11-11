const danhSachBangGia = [
  { ma: "MS-60", ten: "Massage 60 phut", gia: 300000 },
  { ma: "MS-90", ten: "Massage 90 phut", gia: 420000 },
  { ma: "GOI-DAU", ten: "Goi dau duong sinh", gia: 150000 },
  { ma: "CS-DA", ten: "Cham soc da mat", gia: 350000 },
];

function hienThiGoiSpa() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiGoiSpa();
