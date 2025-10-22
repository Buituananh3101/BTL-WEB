
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lấy ID phim từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (!movieId) {
        document.body.innerHTML = "<h1>Lỗi: Không tìm thấy ID phim.</h1>";
        return;
    }

    // 2. Tìm phim trong CSDL
    const movie = ALL_MOVIES.find(m => m.id === movieId);

    if (!movie) {
        document.body.innerHTML = `<h1>Lỗi: Không tìm thấy phim với ID: ${movieId}</h1>`;
        return;
    }

    // 3. Đổ dữ liệu PHIM vào HTML
    document.title = movie.title; // Cập nhật tiêu đề trang
    document.getElementById('movie-background-img').src = movie.background_img;
    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-age-tag').textContent = movie.age_tag;
    document.getElementById('movie-age-tag').style.backgroundColor = movie.age_color;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-meta').textContent = movie.meta;
    document.getElementById('movie-rating-text').textContent = movie.rating_text;
    document.getElementById('movie-tagline').innerHTML = movie.tagline; // Dùng innerHTML vì có <br>
    document.getElementById('movie-description').textContent = movie.description;
    document.getElementById('movie-release-date').textContent = movie.release_date;
    
    // Cập nhật link cho Trailer
    document.getElementById('trailer-btn').setAttribute('data-link', movie.trailer_link);
    document.getElementById('trailerFrame').src = movie.trailer_link;
    
    
    // ===== BẮT ĐẦU PHẦN 4: VẼ LỊCH CHIẾU =====
    
    // Cập nhật tiêu đề lịch chiếu
    document.getElementById('schedule-title').textContent = `Lịch chiếu ${movie.title}`;

    const dateSelector = document.getElementById('dateSelector');
    const showtimeFormat = document.getElementById('showtime-format');
    const timeSlots = document.getElementById('timeSlots');
    const scheduleContainer = document.querySelector('.schedule'); // Lấy cả container

    // Kiểm tra xem phim có lịch chiếu không
    if (movie.schedules && movie.schedules.length > 0) {
        
        // "Vẽ" các nút ngày
        movie.schedules.forEach((schedule, index) => {
            const dateBtn = document.createElement('button');
            dateBtn.className = 'date';
            // Sửa class của span ngày cho đúng (từ file seat.html cũ)
            dateBtn.innerHTML = `<span class="day">${schedule.date}</span><br /><span>${schedule.day}</span>`;
            
            dateBtn.setAttribute('data-index', index); 

            if (index === 0) {
                dateBtn.classList.add('active'); // Tự động active nút đầu tiên
            }
            
            dateSelector.appendChild(dateBtn);
        });

        // Hàm để "vẽ" các suất chiếu
        function loadShowtimes(scheduleIndex) {
            const selectedSchedule = movie.schedules[scheduleIndex];
            
            timeSlots.innerHTML = ''; // Xóa các giờ chiếu cũ
            
            showtimeFormat.textContent = selectedSchedule.format; // Cập nhật (2D, 3D...)
            
            // "Vẽ" các nút giờ
            selectedSchedule.times.forEach(time => {
                const timeBtn = document.createElement('button');
                timeBtn.textContent = time;
                
                // Khi click vào giờ, chuyển sang trang seat.html
                timeBtn.onclick = () => {
                    // Truyền cả 3 thông tin quan trọng
                    const url = `seat.html?id=${movie.id}&date=${selectedSchedule.date}&time=${encodeURIComponent(time)}`;
                    window.location.href = url;
                };
                timeSlots.appendChild(timeBtn);
            });
        }

        // Tải suất chiếu cho ngày đầu tiên (index 0)
        loadShowtimes(0);

        // Thêm sự kiện click cho các nút ngày
        dateSelector.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('.date');
            if (!clickedButton) return;

            dateSelector.querySelectorAll('.date').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');
            
            const scheduleIndex = clickedButton.getAttribute('data-index');
            loadShowtimes(scheduleIndex);
        });

    } else {
        // Nếu phim không có lịch chiếu, ẩn toàn bộ khu vực
        if (scheduleContainer) {
            scheduleContainer.style.display = 'none';
        }
    }
    // ===== KẾT THÚC PHẦN 4 =====
});