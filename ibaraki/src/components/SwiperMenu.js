import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import image8 from '../imgs/library/image8.png';
import image9 from '../imgs/library/image9.png';
import image10 from '../imgs/library/image10.png';

const SliderMenu = () => {
	// Define the array of images and texts
	const slides = [
		{ image: image8, text: 'Pratos Gourmet', link: '/menu/pratos-gourmet' },
		{ image: image9, text: 'Cervejas Artesanais', link: '/menu/cervejas-artesanais' },
		{ image: image10, text: 'Carta de Vinhos', link: '/menu/carta-de-vinhos' },
	];

	return (
		<>
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
				pagination={false}
				modules={[EffectCoverflow, Pagination]}
				className='mySwiper'
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<Link to={slide.link}>
							<img src={slide.image} alt={slide.text} />
							<p className='slider-text'>{slide.text}</p>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SliderMenu;
