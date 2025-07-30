import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export function Promos() {

    const images = [
        '/images/banner1.jpg',
        '/images/banner2.webp',
        '/images/banner3.jpg'
    ];

    return (
    <section className="promos">
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            loop={true}
            style={{
                marginTop: '3rem',
                width: 'auto',
                height: '250px',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                overflow: 'hidden',
            }}
        >
            {images.map((src, index) => (
                <SwiperSlide key={index} style={{ position: 'relative' }}>
                    <img
                        src={src}
                        alt={`Promo ${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
    
  );
}
