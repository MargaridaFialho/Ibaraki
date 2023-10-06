import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import SobreNos from './pages/sobre-nos';
import Contactos from './pages/contactos';
import Reservas from './pages/reservas';
import Menu from './pages/menu';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/sobre-nos' element={<SobreNos />} />
				<Route path='/contactos' element={<Contactos />} />
				<Route path='/reservas' element={<Reservas />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
