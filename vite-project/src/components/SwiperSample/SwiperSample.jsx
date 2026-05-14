import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperSample() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <img src="/swiperSlide01.webp" alt="スライダー画像１枚目" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/swiperSlide02.webp" alt="スライダー画像２枚目" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/swiperSlide03.webp" alt="スライダー画像３枚目" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="/swiperSlide04.webp" alt="スライダー画像４枚目" />
            </SwiperSlide>
        </Swiper>
    );
}