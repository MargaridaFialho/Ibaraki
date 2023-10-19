import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Badge, Button } from 'react-bootstrap';

import PageLayout from '../components/PageLayout';
import NoPage from './404';

import sushi1 from '../imgs/sushi1.png';

function MenuDetalhe() {
	let { id } = useParams();

	if (id === 'pratos-gourmet') {
		return (
			<PageLayout imageUrl={sushi1} pageTitle={'PRATOS GOURMET'}>
				<Container id='menu_detalhe'>
					<Row>
						<Col>
							<ListGroup variant='flush'>
								{[
									{ name: 'Sushi', price: '20€' },
									{ name: 'Sashimi', price: '30€' },
									{ name: 'Tempura', price: '10€' },
									{ name: 'Sopa de Miso', price: '5€' },
									{ name: 'Ramen', price: '15€' },
									{ name: 'Udon', price: '15€' },
									{ name: 'Okonomiyaki', price: '25€' },
									{ name: 'Teppanyaki', price: '20€' },
								].map(item => (
									<ListGroup.Item className='d-flex justify-content-between align-items-start border-0 white'>
										<div className='ms-2 me-auto'>
											<div className='fw-bold'>{item.name}</div>
										</div>
										<Badge bg='secondary' rounded pill>
											{item.price}
										</Badge>
									</ListGroup.Item>
								))}
							</ListGroup>
							<Button variant='outline-secondary' className='mt-3 float-end button-medium' href='/menu'>
								Voltar
							</Button>
						</Col>
					</Row>
				</Container>
			</PageLayout>
		);
	} else if (id === 'cervejas-artesanais') {
		return (
			<PageLayout imageUrl={sushi1} pageTitle={'CERVEJAS ARTESANAIS'}>
				<Container id='menu_detalhe'>
					<Row>
						<Col>
							<ListGroup variant='flush'>
								{[
									{ name: 'Sapporo', price: '5€' },
									{ name: 'Asahi', price: '6€' },
									{ name: 'Super Bock Abadia', price: '3€' },
								].map(item => (
									<ListGroup.Item className='d-flex justify-content-between align-items-start border-0 white'>
										<div className='ms-2 me-auto'>
											<div className='fw-bold'>{item.name}</div>
										</div>
										<Badge bg='secondary' rounded pill>
											{item.price}
										</Badge>
									</ListGroup.Item>
								))}
							</ListGroup>
							<Button variant='outline-secondary' className='mt-3 float-end button-medium' href='/menu'>
								Voltar
							</Button>
						</Col>
					</Row>
				</Container>
			</PageLayout>
		);
	} else if (id === 'carta-de-vinhos') {
		return (
			<PageLayout imageUrl={sushi1} pageTitle={'CARTA DE VINHOS'}>
				<Container id='menu_detalhe'>
					<Row>
						<Col>
							<ListGroup variant='flush'>
								{[
									{ name: 'Couteiro Mor Signature', price: '12€' },
									{ name: 'Tapada das Lebres Premium', price: '13€' },
									{ name: 'Esporão', price: '30€' },
								].map(item => (
									<ListGroup.Item className='d-flex justify-content-between align-items-start border-0 white'>
										<div className='ms-2 me-auto'>
											<div className='fw-bold'>{item.name}</div>
										</div>
										<Badge bg='secondary' rounded pill>
											{item.price}
										</Badge>
									</ListGroup.Item>
								))}
							</ListGroup>
							<Button variant='outline-secondary' className='mt-3 float-end button-medium' href='/menu'>
								Voltar
							</Button>
						</Col>
					</Row>
				</Container>
			</PageLayout>
		);
	} else {
		return <NoPage />;
	}
}

export default MenuDetalhe;
