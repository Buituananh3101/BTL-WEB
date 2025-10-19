document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Xử lý Trailer Popup ---
  const trailerBtn = document.querySelector(".trailer-btn");
  const trailerPopup = document.getElementById("trailerPopup");
  const closeBtn = document.querySelector(".close-btn");
  const trailerFrame = document.getElementById("trailerFrame");

  if (trailerBtn) {
    const trailerLink = trailerBtn.getAttribute("data-link");

    trailerBtn.addEventListener("click", () => {
      // Cập nhật link cho iframe VÀ thêm "?autoplay=1" để tự động phát
      trailerFrame.src = `${trailerLink}?autoplay=1`;
      trailerPopup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      trailerPopup.style.display = "none";
      // Dừng video khi đóng
      trailerFrame.src = "";
    });

    // Đóng popup khi bấm ra ngoài
    trailerPopup.addEventListener("click", (e) => {
      if (e.target === trailerPopup) {
        trailerPopup.style.display = "none";
        trailerFrame.src = "";
      }
    });
  }

  // --- 2. Xử lý chọn ngày ---
  const dateButtons = document.querySelectorAll(".date-selector .date");
  dateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Xóa class 'active' khỏi nút đang active
      const currentActive = document.querySelector(".date.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      // Thêm class 'active' cho nút vừa bấm
      button.classList.add("active");
    });
  });

  // --- 3. XỬ LÝ ĐẶT VÉ (PHẦN QUAN TRỌNG NHẤT) ---
  const timeButtons = document.querySelectorAll(".time-slots button");
  const movieTitle = document.querySelector(".movie-title").textContent;
  const moviePoster = document.querySelector(".poster img").src;

  timeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Lấy ngày đang được chọn
      const activeDateEl = document.querySelector(".date.active");
      const day = activeDateEl.querySelector(".day").textContent;
      const label = activeDateEl.querySelector("span:not(.day)").textContent;
      const selectedDate = `${day} (${label})`;

      // 2. Lấy giờ vừa bấm
      const selectedTime = button.textContent;

      // 3. Lưu tất cả vào localStorage
      localStorage.setItem("selectedMovie", movieTitle);
      localStorage.setItem("selectedPoster", moviePoster);
      localStorage.setItem("selectedDate", selectedDate);
      localStorage.setItem("selectedShowtime", selectedTime);

      // 4. Chuyển hướng sang trang đặt ghế
      // (Giả sử seat.html nằm cùng cấp với movie_thanhguomdietquy.html)
      window.location.href = "seat.html";
    });
  });
});