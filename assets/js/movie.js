/* NỘI DUNG MỚI CHO FILE: assets/js/movie.js
  File này BÂY GIỜ chỉ còn 1 nhiệm vụ: 
  Xử lý BẬT/TẮT popup trailer.
*/

// --- 1. Xử lý Trailer Popup (Đã sửa lại) ---

// Phải bọc trong DOMContentLoaded để đảm bảo các thẻ #trailerPopup, #trailerFrame... đã tồn tại
document.addEventListener("DOMContentLoaded", () => {
  const trailerBtn = document.getElementById("trailer-btn"); // Dùng ID
  const trailerPopup = document.getElementById("trailerPopup");
  const trailerFrame = document.getElementById("trailerFrame");

  if (trailerBtn && trailerPopup && trailerFrame) {
    trailerBtn.addEventListener("click", () => {
      // Lấy link TẠI THỜI ĐIỂM CLICK
      // (Vì detail-page.js cần thời gian để "đổ" link vào)
      const trailerLink = trailerBtn.getAttribute("data-link");

      if (trailerLink) {
        // Thêm "?autoplay=1" để tự động phát
        trailerFrame.src = `${trailerLink}?autoplay=1`;
        trailerPopup.style.display = "flex";
      } else {
        console.error("Không tìm thấy data-link của trailer");
      }
    });

    // Đóng popup khi bấm ra ngoài (giữ logic cũ của bạn)
    trailerPopup.addEventListener("click", (e) => {
      if (e.target === trailerPopup) {
        closeTrailer(); // Gọi hàm closeTrailer() toàn cục
      }
    });
  }
});

/*
  Hàm này phải để ở BÊN NGOÀI (toàn cục/global)
  vì nó được gọi bằng "onclick="closeTrailer()"" trực tiếp từ HTML
*/
function closeTrailer() {
  const trailerPopup = document.getElementById("trailerPopup");
  const trailerFrame = document.getElementById("trailerFrame");

  if (trailerPopup && trailerFrame) {
    trailerPopup.style.display = "none";
    // Dừng video khi đóng (tránh chạy nền)
    trailerFrame.src = "";
  }
}

// --- 2. Xử lý chọn ngày ---
/*
  ĐÃ XÓA PHẦN NÀY.
  Lý do: File "detail-page.js" đã tự động "vẽ" các nút ngày
  và đã bao gồm logic xử lý 'active' (in đậm) cho nút được chọn.
  Nếu giữ lại code cũ sẽ gây xung đột.
*/

// --- 3. XỬ LÝ ĐẶT VÉ (PHẦN QUAN TRỌNG NHẤT) ---
/*
  ĐÃ XÓA PHẦN NÀY.
  Lý do: File "detail-page.js" đã tự động "vẽ" các nút giờ
  và gán sự kiện click cho chúng (chuyển sang trang seat.html
  với ID phim, ngày, giờ trên URL). 
  Code cũ này dùng localStorage và không còn phù hợp.
*/