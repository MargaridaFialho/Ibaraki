import { Row, Col, Container } from 'react-bootstrap';

function LayoutPage(props) {
	return (
		<>
			<section>
				<Container fluid>
					<Row>
						<Col className='col-12 white section-image' style={{ background: `url('${props.imagePath}') no-repeat center center` }}></Col>
					</Row>
					<Row>
						<Col className='col-10 offset-1 py-5'>
							<h2 className='light-text white'>{props.pageTitle}</h2>
						</Col>
					</Row>
					<Row>
						<Col xs={10} className='offset-1 offset-lg-6 pt-1 py-5' lg={5}>
							{props.children}
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}

export default LayoutPage;
