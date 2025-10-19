
document.addEventListener('DOMContentLoaded', function () {
const navPills = document.querySelector('#movie-pills-nav');
const navLinks = navPills.querySelectorAll('.nav-link');
const activeLink = navPills.querySelector('.nav-link.active');

// Hàm để di chuyển lớp nền trượt
function movePill(targetLink) {
    if (!targetLink) return;

    // Lấy vị trí và kích thước của tab được chọn so với thanh nav
    const pillLeft = targetLink.offsetLeft;
    const pillWidth = targetLink.offsetWidth;

    // Cập nhật các biến CSS mà chúng ta đã định nghĩa ở trên
    navPills.style.setProperty('--pill-left', `${pillLeft}px`);
    navPills.style.setProperty('--pill-width', `${pillWidth}px`);
}

// 1. Di chuyển lớp nền đến vị trí tab active ban đầu khi tải trang
movePill(activeLink);

// 2. Thêm sự kiện click cho tất cả các tab
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
    // Xóa class 'active' khỏi tất cả các link (Bootstrap sẽ tự làm nhưng đây là để chắc chắn)
    navLinks.forEach(l => l.classList.remove('active'));
    // Thêm class 'active' vào link vừa được click
    event.currentTarget.classList.add('active');
    
    // Gọi hàm di chuyển lớp nền
    movePill(event.currentTarget);
    });
});
});
