document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("trailerPopup");
  const frame = document.getElementById("trailerFrame");

  // Khi bấm nút trailer
  document.querySelectorAll(".trailer-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const link = btn.dataset.link;
      frame.src = link + "?autoplay=1&rel=0";
      popup.style.display = "flex";
    });
  });

  // Đóng popup
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.style.display = "none";
      frame.src = "";
    });
  });

  // Chọn ngày
  const dateButtons = document.querySelectorAll(".date");
  dateButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      dateButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Chọn giờ chiếu
  const timeButtons = document.querySelectorAll(".time-slots button");
  timeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      timeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      // Sau này có thể thêm chuyển hướng sang trang chọn ghế
      // window.location.href = "chon-ghe.html";
    });
  });
});
