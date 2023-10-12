import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import LayoutFull from '../components/layout-full';

import sushi2 from '../imgs/sushi2.png';

const Menu = () => {
	return (
		<>
			<LayoutFull pageTitle='MENU' imagePath={sushi2}>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-4.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-5.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-6.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-9.jpg' />
					</SwiperSlide>
				</Swiper>
			</LayoutFull>
		</>
	);
};

export default Menu;
