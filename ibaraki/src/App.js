import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Layout from './components/layout';

import Homepage from './pages/homepage';
import SobreNos from './pages/sobre-nos';
import Menu from './pages/menu';
import Reservas from './pages/reservas';
import Contactos from './pages/contactos';
import NoPage from './pages/404';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='/sobre-nos' element={<SobreNos />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/reservas' element={<Reservas />} />
					<Route path='/contactos' element={<Contactos />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
