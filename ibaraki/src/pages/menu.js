import FullpageLayout from '../components/FullpageLayout';
import SliderMenu from '../components/SwiperMenu';

import sushi1 from '../imgs/sushi1.png';

const Menu = () => {
	return (
		<>
			<FullpageLayout imageUrl={sushi1} pageTitle={'MENU'}>
				<SliderMenu></SliderMenu>
			</FullpageLayout>
		</>
	);
};

export default Menu;
