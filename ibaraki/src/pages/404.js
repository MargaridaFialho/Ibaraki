import { Button } from 'react-bootstrap';

import FooterPage from '../components/footer-page';
import LayoutPage from '../components/layout-page';

import sushi1 from '../imgs/sushi1.png';

const NoPage = () => {
	return (
		<>
			<LayoutPage pageTitle='UPS!' imagePath={sushi1}>
				<p>Esta página não existe!</p>
				<Button href='/' variant='secondary' className="mb-5">
					Voltar à homepage
				</Button>
			</LayoutPage>
			<FooterPage />
		</>
	);
};

export default NoPage;
