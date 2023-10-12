import React, { useState, useEffect } from 'react';

function Countdown({ day, month, year }) {
	const [time, setTime] = useState({
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0',
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const end = new Date(year, month - 1, day);
			const distance = end - now;

			if (distance > 0) {
				const days = Math.floor(distance / (1000 * 60 * 60 * 24));
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((distance % (1000 * 60)) / 1000);

				setTime({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [day, month, year]);

	const now = new Date();
	const end = new Date(year, month - 1, day);
	const distance = end - now;

	return distance > 0 ? (
		<div className='countdown'>
			<div className='intro-countdown'>
				<p>Countdown para a abertura</p>
			</div>
			<div className='numbers-countdown'>
				<div className='countdown-group'>
					<div className='number-countdown'>{time.days}</div>
					<div className='text-countdown'>Dias</div>
				</div>
				<div className='countdown-group'>
					<div className='number-countdown'>{time.hours}</div>
					<div className='text-countdown'>Horas</div>
				</div>
				<div className='countdown-group'>
					<div className='number-countdown'>{time.minutes}</div>
					<div className='text-countdown'>Minutos</div>
				</div>
				<div className='countdown-group'>
					<div className='number-countdown'>{time.seconds}</div>
					<div className='text-countdown'>Segundos</div>
				</div>
			</div>
		</div>
	) : (
		<div className='countdown'>
			<div className='intro-countdown'>
				<h1 className='white'>Já abriu!</h1>
			</div>
		</div>
	);
}

export default Countdown;
