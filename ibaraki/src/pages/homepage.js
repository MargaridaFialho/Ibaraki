import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

import carousel1 from '../imgs/carousel1.png';
import carousel2 from '../imgs/carousel2.png';
import carousel3 from '../imgs/carousel3.png';
import Countdown from '../components/countdown';
import Footer from '../components/footer';

const Homepage = () => {
	useEffect(() => {
		const resizeSlider = () => {
			const slider = document.querySelector('.awssld');
			if (slider) {
				slider.style.height = `${window.innerHeight}px`;
			}
		};
		resizeSlider();
		window.addEventListener('resize', resizeSlider);
		return () => window.removeEventListener('resize', resizeSlider);
	}, []);

	return (
		<>
			<AwesomeSlider bullets={false} cssModule={AwesomeSliderStyles}>
				<div className='carousel-caption' data-src={carousel1}>
					<h1>
						<span className='light-text'>Um novo conceito</span>
						<span className='bold-text'> no Alentejo</span>
					</h1>
					<Button href='/reservas' variant='primary' className='button-big'>
						Reservar
					</Button>
				</div>
				<div className='carousel-caption' data-src={carousel2}>
					<h1>
						<span className='light-text'>Uma experiência </span>
						<span className='bold-text'> no Alentejo</span>
					</h1>
					<Button href='/reservas' variant='primary' className='button-big'>
						Reservar
					</Button>
				</div>
				<div className='carousel-caption' data-src={carousel3}>
					<h1>
						<span className='light-text'>Sabores únicos </span>
						<span className='bold-text'> no Alentejo</span>
					</h1>
					<Button href='/reservas' variant='primary' className='button-big'>
						Reservar
					</Button>
				</div>
			</AwesomeSlider>
			<Countdown day='14' month='12' year='2023'></Countdown>
			<Footer/>
		</>
	);
};

export default Homepage;
