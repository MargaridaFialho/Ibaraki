import { Button } from 'react-bootstrap';

import FullpageLayout from '../components/FullpageLayout';

import sushi1 from '../imgs/sushi1.png';

const NoPage = () => {
	return (
		<>
			<FullpageLayout imageUrl={sushi1} pageTitle={'UPS!'}>
				<p>Esta página não existe!</p>
				<Button variant='primary' className='button-big' onClick={() => (window.location.href = '/')}>
					Regressar à homepage
				</Button>
			</FullpageLayout>
		</>
	);
};

export default NoPage;
