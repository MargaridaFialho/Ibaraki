import { Row, Col, Container } from 'react-bootstrap';

function Footer(props) {
	return (
		<>
			<footer className='footer-homepage'>
				<Container className='text-center'>
					<Row className='justify-content-center'>
						<a className='display-contents' href='https://www.facebook.com/ibaraki.rest' target='_blank' rel='noopener noreferrer'>
							<Col xs={2} lg={1} className='footer-element footer-fb'></Col>
						</a>
						<a className='display-contents' href='https://www.instagram.com/ibaraki.rest' target='_blank' rel='noopener noreferrer'>
							<Col xs={2} lg={1} className='footer-element footer-ig'></Col>
						</a>
						<a className='display-contents' href='mailto:ibarakisite@gmail.com' target='_blank' rel='noopener noreferrer'>
							<Col xs={2} lg={1} className='footer-element footer-email'></Col>
						</a>
					</Row>
				</Container>
			</footer>
		</>
	);
}

export default Footer;
