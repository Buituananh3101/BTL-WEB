// Nội dung cho file: assets/js/movie-data.js
// (ĐÃ DỌN DẸP CÁC KÝ TỰ UNICODE VÔ HÌNH)

const ALL_MOVIES = [
    // === PHIM ĐANG CHIẾU ===
    {
        id: "tro-choi-ao-giac",
        title: "Trò Chơi Ảo Giác: Ares (Tron: Ares)",
        poster: "./assets/img/banner_trochoiaogiac.jpg",
        background_img: "./assets/img/banner/trochoiaogiac_banner.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 118 phút",
        rating_text: "Đang thịnh hành",
        tagline: "Thể loại: Hành động, Khoa học viễn tưởng",
        description: "Ares, một chương trình hư cấu, được gửi từ thế giới kỹ thuật số vào thế giới thực trong một nhiệm vụ nguy hiểm, đánh dấu cuộc gặp gỡ đầu tiên của loài người với trí tuệ nhân tạo.",
        release_date: "10/10/2025",
        trailer_link: "https://www.youtube.com/embed/EMl9KVH1b3Y",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:58",
                    "13:00 ~ 14:58",
                    "19:00 ~ 20:58"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:58",
                    "20:00 ~ 21:58"
                ]
            }
        ]
    },
    {
        id: "quy-an-tang-3",
        title: "Quỷ Ăn Tạng 3 (Tee Yod 3)",
        poster: "./assets/img/banner_teeyod3.jpg",
        background_img: "./assets/img/banner/quyetang3_banner.webp",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 104 phút",
        rating_text: "Đang sợ hãi",
        tagline: "Thể loại: Kinh dị",
        description: "Tiếp nối câu chuyện rùng rợn, phần 3 đi sâu vào nguồn gốc của quỷ Tee Yod và những bí mật đen tối của gia đình.",
        release_date: "10/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:30 ~ 12:14",
                    "14:30 ~ 16:14",
                    "20:00 ~ 21:44",
                    "22:00 ~ 23:44"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "15:00 ~ 16:44",
                    "21:00 ~ 22:44"
                ]
            }
        ]
    },
    {
        id: "van-may",
        title: "Vận May (Good Fortune)",
        poster: "./assets/img/banner_vanmay.jpg",
        background_img: "./assets/img/banner/vanmay_banner.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 120 phút",
        rating_text: "Hài hước",
        tagline: "Thể loại: Hài, Hành động, Phiêu lưu",
        description: "Một bộ phim hài hành động với sự tham gia của Keanu Reeves và Seth Rogen.",
        release_date: "17/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:15 ~ 12:15",
                    "13:15 ~ 15:15",
                    "19:15 ~ 21:15"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:15 ~ 16:15",
                    "20:15 ~ 22:15"
                ]
            }
        ]
    },
    {
        id: "thanh-guom-diet-quy",
        title: "Thanh Gươm Diệt Quỷ: Vô Hạn Thành",
        poster: "./assets/img/banner_thanhguomdietquy.jpg",
        background_img: "./assets/img/banner/thanhguomdietquy_banner2.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 155 phút",
        rating_text: "Rất được mong đợi",
        tagline: "Nhà sản xuất: Ufotable <br> Thể loại: Anime, hành động <br> Đạo diễn: Haruo Sotozaki",
        description: "Mở đầu cho trận chiến cuối cùng chống lại Muzan, phần tiếp theo của 'Kimetsu no Yaiba' là phim chiếu rạp mới nhất về phần Vô Hạn Thành.",
        release_date: "15/08/2025",
        trailer_link: "https://www.youtube.com/embed/x7uLutVRBfI",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "11:15 ~ 13:33",
                    "13:30 ~ 15:48",
                    "14:30 ~ 16:48",
                    "15:45 ~ 18:03",
                    "18:00 ~ 20:18"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 12:18",
                    "14:00 ~ 16:18",
                    "19:00 ~ 21:18"
                ]
            }
        ]
    },
    {
        id: "chu-thuat-hoi-chien",
        title: "Chú Thuật Hồi Chiến: Hoài Ngọc",
        poster: "./assets/img/banner_thuatchu.jpg",
        background_img: "./assets/img/banner/chuthuathoichien_banner.webp",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 110 phút",
        rating_text: "Rất được mong đợi",
        tagline: "Thể loại: Hoạt hình, Hành động, Kỳ ảo",
        description: "Câu chuyện về quá khứ của Gojo Satoru và Geto Suguru thời còn là học sinh trường Chú thuật.",
        release_date: "10/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "11:00 ~ 12:50",
                    "13:30 ~ 15:20",
                    "18:30 ~ 20:20"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:30 ~ 16:20",
                    "20:30 ~ 22:20"
                ]
            }
        ]
    },
    {
        id: "em-xinh-tinh-quai",
        title: "Em Xinh Tinh Quái (Pretty Crazy)",
        poster: "./assets/img/banner_emxinhtinhquai.jpg",
        background_img: "./assets/img/banner/emxinhtinhquai_banner.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 113 phút",
        rating_text: "Lãng mạn",
        tagline: "Thể loại: Hài, Lãng mạn",
        description: "Một cô gái xinh đẹp nhưng tính tình kỳ quái gặp phải một anh chàng CEO lạnh lùng.",
        release_date: "05/09/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:53",
                    "13:00 ~ 14:53",
                    "19:00 ~ 20:53"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:53",
                    "20:00 ~ 21:53"
                ]
            }
        ]
    },
    {
        id: "cau-be-ca-heo",
        title: "Cậu Bé Cá Heo Và Bí Mật 7 Đại Dương",
        poster: "./assets/img/banner_caubecaheo.jpg",
        background_img: "./assets/img/banner/caubecaheo_banner.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2025 • 96 phút",
        rating_text: "Dành cho gia đình",
        tagline: "Thể loại: Hoạt hình",
        description: "Hành trình của cậu bé cá heo đi tìm bí mật của bảy đại dương.",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:30 ~ 11:06",
                    "15:00 ~ 16:36",
                    "17:30 ~ 19:06"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:00 ~ 11:36",
                    "16:00 ~ 17:36"
                ]
            }
        ]
    },
    {
        id: "cuc-vang-cua-ngoai",
        title: "Cục Vàng Của Ngoại",
        poster: "./assets/img/banner_cucvangcuangoai.jpg",
        background_img: "./assets/img/banner/cucvangcuangoai_banner.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2025 • 119 phút",
        rating_text: "Cảm động",
        tagline: "Thể loại: Gia đình, Tâm lý",
        description: "Câu chuyện cảm động về tình bà cháu.",
        release_date: "17/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:00 ~ 10:59",
                    "14:00 ~ 15:59",
                    "17:00 ~ 18:59"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:30 ~ 12:29",
                    "16:30 ~ 18:29"
                ]
            }
        ]
    },
    {
        id: "chi-nga-em-nang",
        title: "Chị Ngã Em Nâng",
        poster: "./assets/img/banner_chingaemnang.jpg",
        background_img: "./assets/img/banner_chimgiaemnang.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2025 • 122 phút",
        rating_text: "Tình cảm gia đình",
        tagline: "Thể loại: Gia đình, Hài, Tâm lý",
        description: "Câu chuyện về hai chị em gái đùm bọc lẫn nhau vượt qua khó khăn.",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:15 ~ 11:17",
                    "14:15 ~ 16:17",
                    "17:15 ~ 19:17"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:45 ~ 12:47",
                    "16:45 ~ 18:47"
                ]
            }
        ]
    },
    {
        id: "tay-anh-giu-mot-vi-sao",
        title: "Tay Anh Giữ Một Vì Sao",
        poster: "./assets/img/banner_tayanhgiuvisao.jpg",
        background_img: "./assets/img/banner_tayanhgiuvisao.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 117 phút",
        rating_text: "Lãng mạn",
        tagline: "Thể loại: Hài, Lãng mạn",
        description: "Mô tả phim...",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:57",
                    "13:00 ~ 14:57",
                    "19:00 ~ 20:57"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:57",
                    "20:00 ~ 21:57"
                ]
            }
        ]
    },
    {
        id: "tu-chien-tren-khong",
        title: "Tử Chiến Trên Không",
        poster: "./assets/img/banner_tuchientrenkhong.jpg",
        background_img: "./assets/img/banner/tuchientrenkhong_banner.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 118 phút",
        rating_text: "Hành động",
        tagline: "Thể loại: Tâm lý, Giật gân",
        description: "Mô tả phim...",
        release_date: "19/09/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:58",
                    "13:00 ~ 14:58",
                    "19:00 ~ 20:58"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:58",
                    "20:00 ~ 21:58"
                ]
            }
        ]
    },
    {
        id: "lam-giau-voi-ma-2",
        title: "Làm Giàu Với Ma 2: Cuộc Chiến Hột Xoàn",
        poster: "./assets/img/banner_lamgiauvoima.jpg",
        background_img: "./assets/img/banner_lamgiauvoima.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 133 phút",
        rating_text: "Hài hước",
        tagline: "Thể loại: Hài",
        description: "Mô tả phim...",
        release_date: "02/09/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:30 ~ 12:43",
                    "13:30 ~ 15:43",
                    "19:30 ~ 21:43"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:30 ~ 16:43",
                    "20:30 ~ 22:43"
                ]
            }
        ]
    },
    {
        id: "to-quoc-trong-tim",
        title: "Tổ Quốc Trong Tim: The Concert Film",
        poster: "./assets/img/banner_toquoctrongtim.jpg",
        background_img: "./assets/img/banner_toquoctrongtim.jpg",
        age_tag: "P",
        age_color: "#4CAF50",
        meta: "2025 • 120 phút",
        rating_text: "Âm nhạc",
        tagline: "Thể loại: Phim tài liệu, Âm nhạc",
        description: "Mô tả phim...",
        release_date: "17/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Lồng tiếng",
                times: [
                    "09:45 ~ 11:45",
                    "15:15 ~ 17:15",
                    "17:45 ~ 19:45"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Lồng tiếng",
                times: [
                    "10:15 ~ 12:15",
                    "16:15 ~ 18:15"
                ]
            }
        ]
    },
    {
        id: "nam-cua-anh-ngay-cua-em",
        title: "Năm Của Anh, Ngày Của Em",
        poster: "./assets/img/banner_namcuaanh.jpg",
        background_img: "./assets/img/banner_namcuaanh.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Lãng mạn",
        tagline: "Thể loại: Tình cảm",
        description: "Mô tả phim...",
        release_date: "17/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 12:00",
                    "13:00 ~ 15:00",
                    "19:00 ~ 21:00"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 16:00",
                    "20:00 ~ 22:00"
                ]
            }
        ]
    },
    {
        id: "zombie-cung-cua-ba",
        title: "Zombie Cưng Của Ba (2025)",
        poster: "./assets/img/banner_zombie.jpg",
        background_img: "./assets/img/banner_zombie.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 107 phút",
        rating_text: "Hài hước",
        tagline: "Thể loại: Hài, gia đình",
        description: "Mô tả phim...",
        release_date: "08/08/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:45 ~ 12:32",
                    "13:45 ~ 15:32",
                    "19:45 ~ 21:32"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:45 ~ 16:32",
                    "20:45 ~ 22:32"
                ]
            }
        ]
    },

    // === PHIM SẮP CHIẾU ===
    {
        id: "cai-ma",
        title: "Cải Mả (2025)",
        poster: "./assets/img/Cai_Ma.jpg",
        background_img: "./assets/img/Cai_Ma.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Tâm linh",
        description: "Mô tả phim...",
        release_date: "31/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "31/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 20:00",
                    "20:00 ~ 22:00",
                    "22:00 ~ 24:00"
                ]
            }
        ]
    },
    {
        id: "xa-thuat-tieu-tam",
        title: "Xà Thuật Tiểu Tam (2025)",
        poster: "./assets/img/Xa_Thuat_Tieu_Tam.jpg",
        background_img: "./assets/img/Xa_Thuat_Tieu_Tam.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 99 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị",
        description: "Mô tả phim...",
        release_date: "24/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "24/10",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:00 ~ 20:39",
                    "21:00 ~ 22:39"
                ]
            }
        ]
    },
    {
        id: "good-boy",
        title: "Good Boy: Chó Cưng Đừng Sợ (2025)",
        poster: "./assets/img/Good_Boy_Cho_Cung_Dung_So.jpg",
        background_img: "./assets/img/Good_Boy_Cho_Cung_Dung_So.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 73 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Siêu nhiên",
        description: "Mô tả phim...",
        release_date: "03/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:13",
                    "13:00 ~ 14:13",
                    "19:00 ~ 20:13"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:13",
                    "20:00 ~ 21:13"
                ]
            }
        ]
    },
    {
        id: "bit-mat-bat-nai",
        title: "Bịt Mắt Bắt Nai (2025)",
        poster: "./assets/img/Bit_Mat_Bat_Nai.jpg",
        background_img: "./assets/img/background/patel-5.webp",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • 105 phút",
        rating_text: "Đang thịnh hành",
        tagline: "Thể loại: Hài, Phiêu lưu",
        description: "Một bộ phim hài hước về chuyến đi...",
        release_date: "31/10/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "25/10",
                day: "Thứ Bảy",
                format: "2D Lồng tiếng",
                times: [
                    "09:00 ~ 10:45",
                    "11:00 ~ 12:45",
                    "17:00 ~ 18:45"
                ]
            }
        ]
    },
    {
        id: "pha-dam-sinh-nhat-me",
        title: "Phá Đám: Sinh Nhật Mẹ (2025)",
        poster: "./assets/img/Pha_Dam_Sinh_Nhat_Me.jpg",
        background_img: "./assets/img/Pha_Dam_Sinh_Nhat_Me.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 98 phút",
        rating_text: "Hài kịch đen",
        tagline: "Thể loại: Chính kịch / Gia đình / Hài kịch đen",
        description: "Mô tả phim...",
        release_date: "05/09/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:38",
                    "13:00 ~ 14:38",
                    "19:00 ~ 20:38"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:38",
                    "20:00 ~ 21:38"
                ]
            }
        ]
    },
    {
        id: "phong-tro-ma-bau",
        title: "Phòng Trọ Ma Bầu (2025)",
        poster: "./assets/img/Phong_Tro_Ma_Bau.jpg",
        background_img: "./assets/img/Phong_Tro_Ma_Bau.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Hài",
        description: "Mô tả phim...",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:30 ~ 20:30",
                    "20:30 ~ 22:30"
                ]
            }
        ]
    },
    {
        id: "tinh-nguoi-duyen-ma",
        title: "Tình Người Duyên Ma: Nhắm Mak Yêu Luôn (2025)",
        poster: "./assets/img/Tinh_Nguoi_Duyen_Ma_Nham_Mak_Yeu_Luon.jpg",
        background_img: "./assets/img/Tinh_Nguoi_Duyen_Ma_Nham_Mak_Yeu_Luon.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 99 phút",
        rating_text: "Kinh dị / Hài",
        tagline: "Thể loại: Tình cảm / Hài / Kinh dị",
        description: "Mô tả phim...",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:15 ~ 20:54",
                    "21:15 ~ 22:54"
                ]
            }
        ]
    },
    {
        id: "trai-tim-que-quat",
        title: "Trái Tim Què Quặt (2025)",
        poster: "./assets/img/Trai_Tim_Que_Quat.jpg",
        background_img: "./assets/img/Trai_Tim_Que_Quat.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Ly kỳ",
        tagline: "Thể loại: Tâm lý / Ly kỳ",
        description: "Mô tả phim...",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:30 ~ 21:30",
                    "21:30 ~ 23:30"
                ]
            }
        ]
    },
    {
        id: "quai-thu-vo-hinh",
        title: "Quái Thú Vô Hình: Vùng Đất Chết Chóc (2025)",
        poster: "./assets/img/Quai_Thu_Vo_Hinh_Vung_Dat_Chet_Choc.jpg",
        background_img: "./assets/img/Quai_Thu_Vo_Hinh_Vung_Dat_Chet_Choc.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Hành động",
        tagline: "Thể loại: Hành động / Khoa học viễn tưởng",
        description: "Mô tả phim...",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:45 ~ 20:45",
                    "20:45 ~ 22:45"
                ]
            }
        ]
    },
    {
        id: "tron-chay-tu-than",
        title: "Trốn Chạy Tử Thần (2025)",
        poster: "./assets/img/Tron_Chay_Tu_Than.jpg",
        background_img: "./assets/img/Tron_Chay_Tu_Than.jpg",
        age_tag: "16+",
        age_color: "#f44336",
        meta: "2025 • 120 phút",
        rating_text: "Hành động",
        tagline: "Thể loại: Phiêu lưu / Khoa học viễn tưởng",
        description: "Mô tả phim...",
        release_date: "07/11/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "07/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 20:00",
                    "21:00 ~ 23:00"
                ]
            }
        ]
    },
    {
        id: "truy-tim-long-dien-huong",
        title: "Truy Tìm Long Diên Hương (2025)",
        poster: "./assets/img/Truy_Tim_Long_Dien_Huong.jpg",
        background_img: "./assets/img/Truy_Tim_Long_Dien_Huong.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Hài / Hành động",
        tagline: "Thể loại: Hành động / Hài",
        description: "Mô tả phim...",
        release_date: "14/11/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "14/11",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "18:00 ~ 20:00",
                    "20:15 ~ 22:15"
                ]
            }
        ]
    },
    {
        id: "avatar-lua-va-tro-tan",
        title: "Avatar: Lửa Và Tro Tàn (2025)",
        poster: "./assets/img/Avatar_Lua_Va_Tro_Tan.jpg",
        background_img: "./assets/img/Avatar_Lua_Va_Tro_Tan.jpg",
        age_tag: "13+",
        age_color: "#ff9800",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Bom tấn",
        tagline: "Thể loại: Khoa học viễn tưởng / Phiêu lưu",
        description: "Mô tả phim...",
        release_date: "19/12/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "19/12",
                day: "Thứ Sáu",
                format: "3D Phụ đề",
                times: [
                    "18:00 ~ 21:00",
                    "20:00 ~ 23:00"
                ]
            }
        ]
    },
    {
        id: "nam-dem-kinh-hoang-2",
        title: "Năm Đêm Kinh Hoàng 2 (2025)",
        poster: "./assets/img/Nam_Dem_Kinh_Hoang_2.jpg",
        background_img: "./assets/img/Nam_Dem_Kinh_Hoang_2.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • (chưa rõ) phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Bí ẩn",
        description: "Mô tả phim...",
        release_date: "05/12/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "05/12",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:00 ~ 21:00",
                    "21:30 ~ 23:30"
                ]
            }
        ]
    },
    {
        id: "mortal-kombat",
        title: "Mortal Kombat: Cuộc Chiến Sinh Tử",
        poster: "./assets/img/Mortal_Kombat_Cuoc_Chien_Sinh_Tu.jpg",
        background_img: "./assets/img/Mortal_Kombat_Cuoc_Chien_Sinh_Tu.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2021 • 110 phút",
        rating_text: "Hành động / Võ thuật",
        tagline: "Thể loại: Hành động / Võ thuật / Khoa học viễn tưởng",
        description: "Mô tả phim...",
        release_date: "23/04/2021",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "20/10",
                day: "Hôm nay",
                format: "2D Phụ đề",
                times: [
                    "10:00 ~ 11:50",
                    "13:00 ~ 14:50",
                    "19:00 ~ 20:50"
                ]
            },
            {
                date: "21/10",
                day: "Thứ Ba",
                format: "2D Phụ đề",
                times: [
                    "14:00 ~ 15:50",
                    "20:00 ~ 21:50"
                ]
            }
        ]
    },
    {
        id: "nha-hai-chu",
        title: "Nhà Hai Chủ (2025)",
        poster: "./assets/img/Nha_Hai_Chu.jpg",
        background_img: "./assets/img/Nha_Hai_Chu.jpg",
        age_tag: "18+",
        age_color: "#f44336",
        meta: "2025 • 110 phút",
        rating_text: "Kinh dị",
        tagline: "Thể loại: Kinh dị / Tâm linh",
        description: "Mô tả phim...",
        release_date: "05/12/2025",
        trailer_link: "https://www.youtube.com/embed/your-trailer-id",
        schedules: [
            {
                date: "05/12",
                day: "Thứ Sáu",
                format: "2D Phụ đề",
                times: [
                    "19:30 ~ 21:20",
                    "21:45 ~ 23:35"
                ]
            }
        ]
    }
];