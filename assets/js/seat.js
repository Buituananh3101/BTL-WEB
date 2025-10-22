document.addEventListener("DOMContentLoaded", () => {
  // ===== BẮT ĐẦU KHỐI CODE MỚI =====
  // 🎬 Lấy thông tin từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  const date = urlParams.get("date");
  const time = urlParams.get("time");

  if (!movieId || !date || !time || typeof ALL_MOVIES === "undefined") {
    alert(
      "Lỗi: Thiếu thông tin phim, ngày chiếu, suất chiếu hoặc dữ liệu phim!"
    );
    window.location.href = "index.html";
    return;
  }

  // 2. Tìm phim trong CSDL
  const movie = ALL_MOVIES.find((m) => m.id === movieId);

  if (!movie) {
    alert(`Lỗi: Không tìm thấy phim với ID: ${movieId}`);
    window.location.href = "index.html";
    return;
  }

  // 3. Cập nhật thông tin lên sidebar
  document.querySelector(".sidebar h2").textContent = movie.title;
  document.querySelector(".sidebar .poster img").src = movie.poster;
  document.querySelector("title").textContent = `Đặt vé: ${movie.title}`;

  // 4. Cập nhật ngày VÀ suất chiếu
  const paragraphs = document.querySelectorAll(".sidebar p");
  if (paragraphs.length >= 2) {
    paragraphs[0].innerHTML = `Ngày chiếu: <strong>${date}</strong>`;
    paragraphs[1].innerHTML = `Suất chiếu: <strong>${time}</strong>`;
  }
  // ===== KẾT THÚC KHỐI CODE MỚI =====

  //  Xử lý chọn ghế (PHẦN NÀY GIỮ NGUYÊN)
  const seatMap = document.getElementById("seatMap");
  const countSpan = document.getElementById("count");
  const totalSpan = document.getElementById("total");
  const payBtn = document.getElementById("payBtn");
  const overlay = document.getElementById("overlay");
  const selectedList = document.getElementById("selectedList");
  const payTotal = document.getElementById("payTotal");
  const qrImage = document.getElementById("qrImage");

  let selectedSeats = [];

  seatMap.addEventListener("click", (e) => {
    const seat = e.target.closest(".seat");
    if (!seat || seat.classList.contains("booked")) return;

    seat.classList.toggle("selected");
    const seatId = seat.dataset.id;

    if (seat.classList.contains("selected")) {
      selectedSeats.push(seatId);
    } else {
      selectedSeats = selectedSeats.filter((s) => s !== seatId);
    }

    calculateTotal();
  });

  // ✅ Hàm tính tổng tiền & cập nhật giao diện
  function calculateTotal() {
    countSpan.textContent = selectedSeats.length;

    let total = 0;
    selectedSeats.forEach((id) => {
      const seatEl = document.querySelector(`.seat[data-id='${id}']`);
      if (seatEl) {
        // Thêm kiểm tra
        total += seatEl.classList.contains("vip") ? 100000 : 50000;
      }
    });

    totalSpan.textContent = total.toLocaleString("vi-VN") + "₫";
    payBtn.disabled = selectedSeats.length === 0;
    return total;
  }

  // 💳 Hiển thị overlay thanh toán
  payBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");

    selectedList.innerHTML = selectedSeats.map((s) => `<li>${s}</li>`).join("");

    const total = calculateTotal();
    payTotal.textContent = total.toLocaleString("vi-VN") + "₫";

    qrImage.src = "./assets/img/qr.png";
  });

  // ❌ Đóng overlay
  document.getElementById("closePay").addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  // ✅ Hoàn tất thanh toán
  document.getElementById("confirmPay").addEventListener("click", () => {
    alert("🎉 Thanh toán thành công! Chúc bạn xem phim vui vẻ.");
    overlay.classList.add("hidden");

    document.querySelectorAll(".seat.selected").forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("booked");
    });

    selectedSeats = [];
    calculateTotal();
  });
});
