import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PostProvider } from './context/Context';

//components
import Navigation from './components/Navbar';

//pages
import Homepage from './pages/Homepage';
import SobreNos from './pages/SobreNos';
import Menu from './pages/Menu';
import MenuDetalhe from './pages/MenuDetalhe';
import Blog from './pages/Blog';
import Reservas from './pages/Reservas';
import Contactos from './pages/Contactos';
import NoPage from './pages/404';

//crud
import CreatePost from './api/CreatePost';
import UpdatePost from './api/UpdatePost';
import DeletePost from './api/DeletePost';

function App() {
	return (
		<React.StrictMode>
			<PostProvider>
				<BrowserRouter basename='Ibaraki'>
					<Routes>
						<Route path='/' element={<Navigation />}>
							<Route index element={<Homepage />} />
							<Route path='sobre-nos' element={<SobreNos />} />
							<Route path='menu' element={<Menu />} />
							<Route path='menu/:id' element={<MenuDetalhe />} />
							<Route path='blog' element={<Blog />} />
							<Route path='blog/create' element={<CreatePost />} />
							<Route path='blog/update/:id' element={<UpdatePost />} />
							<Route path='blog/delete/:id' element={<DeletePost />} />
							<Route path='reservas' element={<Reservas />} />
							<Route path='contactos' element={<Contactos />} />
							<Route path='*' element={<NoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</PostProvider>
		</React.StrictMode>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
