import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from "../../assets/1st header.jpg"
import image2 from "../../assets/2nd header.jpg"
import image3 from "../../assets/3rd header.jpg"
import image4 from "../../assets/4th header.jpg"
import image5 from "../../assets/5th header.jpg"
import image6 from "../../assets/6th .jpg"


const Swiper1 = () => {


    return (
        <div className='max-w-[300px] lg:max-w-3xl mx-auto h-[300px]  lg:h-[500px] my-3 bg-slate-700 rounded-3xl relative object-cover'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:max-w-full lg:max-w-[100%] max-h-[300px] md:max-h-[550] lg:max-h-[500px] mix-blend-overlay object-cover rounded-3xl"
            >
                <SwiperSlide><img src={image1} alt=""  className='h-[300px] md:h-[550px] lg:h-[700px]' /> </SwiperSlide>
                <SwiperSlide><img src={image2} alt=""   className='h-[300px] md:h-[550px]  lg:h-[700px]'/> </SwiperSlide>
                <SwiperSlide><img src={image3} alt=""   className='h-[300px] md:h-[550px]  lg:h-[700px]'/> </SwiperSlide>
                <SwiperSlide><img src={image4} alt=""   className='h-[300px] md:h-[550px]  lg:h-[700px]'/> </SwiperSlide>
                <SwiperSlide><img src={image5} alt=""   className='h-[300px] md:h-[550px]  lg:h-[700px]'/> </SwiperSlide>
                <SwiperSlide><img src={image6} alt=""   className='h-[300px] md:h-[550px]  lg:h-[700px]'/> </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Swiper1;