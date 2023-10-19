import PageLayout from '../components/PageLayout';

import sushi1 from '../imgs/sushi1.png';

const SobreNos = () => {
	return (
		<>
			<PageLayout imageUrl={sushi1} pageTitle={'SOBRE NÓS'}>
				<p>
					O nosso restaurante, no coração do Alentejo, tem como principal missão proporcionar aos nossos clientes uma experiência única que une a excelência da culinária japonesa com a beleza serena
					da paisagem alentejana.
				</p>
			</PageLayout>
		</>
	);
};

export default SobreNos;
