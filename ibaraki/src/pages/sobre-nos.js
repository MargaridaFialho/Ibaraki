import FooterPage from '../components/footer-page';
import LayoutPage from '../components/layout-page';

import sushi1 from '../imgs/sushi1.png';

const SobreNos = () => {
	return (
		<>
			<LayoutPage pageTitle='SOBRE NÓS' imagePath={sushi1}>
				<p>
					O nosso restaurante, no coração do Alentejo, tem como principal missão proporcionar aos nossos clientes uma experiência única que une a excelência da culinária japonesa com a beleza serena
					da paisagem alentejana.
				</p>
			</LayoutPage>
			<FooterPage />
		</>
	);
};

export default SobreNos;
