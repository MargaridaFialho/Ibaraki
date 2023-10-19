// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Navigation from './pages/Navbar';
import Homepage from './pages/Homepage';
import SobreNos from './pages/SobreNos';
import Menu from './pages/Menu';
import MenuDetalhe from './pages/MenuDetalhe';
import Reservas from './pages/Reservas';
import Contactos from './pages/Contactos';
import NoPage from './pages/404';

import reportWebVitals from './reportWebVitals';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigation />}>
						<Route index element={<Homepage />} />
						<Route path='sobre-nos' element={<SobreNos />} />
						<Route path='menu' element={<Menu />} />
						<Route path='menu/:id' element={<MenuDetalhe />} />
						<Route path='reservas' element={<Reservas />} />
						<Route path='contactos' element={<Contactos />} />
						<Route path='*' element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
