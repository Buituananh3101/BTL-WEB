document.addEventListener("DOMContentLoaded", function () {
  // 1. ĐỊA CHỈ CỦA RẠP (CẦN THAY THẾ)
  const cinemaAddress = "Trường Đại Học Giao Thông Vận Tải Hà Nội";

  // Mã hóa địa chỉ
  const encodedAddress = encodeURIComponent(cinemaAddress);

  // URL Google Maps (Sử dụng API tìm kiếm)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const findMapBtn = document.getElementById("findMapBtn");

  if (findMapBtn) {
    findMapBtn.addEventListener("click", function () {
      // Mở Google Maps trong một tab mới
      window.open(googleMapsUrl, "_blank");
    });
  }
});
