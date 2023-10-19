import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

import carousel1 from '../imgs/carousel1.png';
import carousel2 from '../imgs/carousel2.png';
import carousel3 from '../imgs/carousel3.png';

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
			<AwesomeSlider cssModule={AwesomeSliderStyles} bullets={false}>
				<div className='carousel-caption slide-in' data-src={carousel1}>
					<h1>
						<span className='light-text'>Um novo conceito</span>
						<span className='bold-text'> no Alentejo</span>
					</h1>
					<Button variant='primary' href='/reservas' type='button' className='button-big'>
						Reservar
					</Button>
				</div>
				<div className='carousel-caption' data-src={carousel2}>
					<h1>
						<span className='light-text'>Um novo sabor</span>
						<span className='bold-text'> no Alentejo</span>
					</h1>
					<Button variant='primary' href='/reservas' type='button' className='button-big'>
						Reservar
					</Button>
				</div>
				<div className='carousel-caption' data-src={carousel3}>
					<h1>
						<span className='light-text'>Uma novo essência</span>
						<span className='bold-text'> no Alentejo</span>
					</h1>
					<Button variant='primary' href='/reservas' type='button' className='button-big'>
						Reservar
					</Button>
				</div>
			</AwesomeSlider>
			<Countdown day={12} month={12} year={2023}></Countdown>
			<Footer></Footer>
		</>
	);
};

export default Homepage;
