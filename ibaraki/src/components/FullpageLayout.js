import { Row, Col, Container } from 'react-bootstrap';
import FooterPage from './FooterPage';

function FullpageLayout(props) {
	return (
		<main>
			<Container fluid>
				<Row as='section'>
					<Col xs={12} className='white section-image' style={{ background: `url(${props.imageUrl}) no-repeat center center` }}></Col>
					<Row>
						<Col xs={10} className='offset-1 py-5'>
							<h2 className='light-text white'>{props.pageTitle}</h2>
						</Col>
					</Row>
					<Row>
						<Col xs={10} className='offset-1 py-5'>
							{props.children}
						</Col>
					</Row>
				</Row>
			</Container>
			<FooterPage></FooterPage>
		</main>
	);
}

export default FullpageLayout;
