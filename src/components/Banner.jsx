
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img from '../assets/blog.jpg'
import img1 from '../assets/online-blog .jpg'
import img2 from '../assets/word-blog.jpg'
const Banner = () => {
    return (
        <div className='rounded-lg mt-6 rounded-t-none'>
            <Swiper
                spaceBetween={30}
                // slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='  rounded-lg rounded-t-none'>
                    <img src={img2} alt="" className='rounded-lg rounded-t-none' />
                </SwiperSlide>
                <SwiperSlide className='border-2 border-t-0 rounded-lg'>
                    <img src={img1} alt="" className=' rounded-lg rounded-t-none' />
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <img src={img} alt="" className='rounded-lg rounded-t-none' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;