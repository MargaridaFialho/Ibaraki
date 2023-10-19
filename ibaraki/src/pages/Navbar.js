import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Navbar expand='lg' fixed='top'>
				<Container fluid>
					<Navbar.Brand as={Link} to='/' style={{ fontFamily: 'Hatton200' }}>
						IBARAKI
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarNavDropdown' />
					<Navbar.Collapse id='navbarNavDropdown' className='justify-content-end'>
						<div className='navbar-content d-flex align-items-center'>
							<Nav>
								<Nav.Item className='px-3'>
									<Nav.Link as={Link} to='sobre-nos' active>
										Sobre Nós
									</Nav.Link>
								</Nav.Item>
								<Nav.Item className='px-3'>
									<Nav.Link as={Link} to='menu'>
										Menu
									</Nav.Link>
								</Nav.Item>
								<Nav.Item className='px-3'>
									<Nav.Link as={Link} to='reservas'>
										Reservas
									</Nav.Link>
								</Nav.Item>
								<Nav.Item className='px-3'>
									<Nav.Link as={Link} to='contactos'>
										Contactos
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Outlet />
		</>
	);
};

export default Navigation;
