import DatePicker from 'react-datepicker';
import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';

import PageLayout from '../components/PageLayout';

import sushi3 from '../imgs/sushi3.png';

const Reservas = () => {
	const [startDate, setStartDate] = useState(null);
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<>
			<PageLayout imageUrl={sushi3} pageTitle={'RESERVAS'}>
				<Form className='white' noValidate validated={validated} onSubmit={handleSubmit}>
					<Row className='mb-4'>
						<Form.Group as={Row} controlId='formNome'>
							<Form.Label column sm={2}>
								Nome
							</Form.Label>
							<Col sm={10}>
								<Form.Control type='text' required />
								<Form.Control.Feedback type='invalid'>Preencha um nome.</Form.Control.Feedback>
							</Col>
						</Form.Group>
					</Row>

					<Row className='mb-4'>
						<Form.Group as={Row} controlId='formTelefone'>
							<Form.Label column sm={2}>
								Telefone
							</Form.Label>
							<Col sm={10}>
								<Form.Control type='text' required />
								<Form.Control.Feedback type='invalid'>Coloque um contacto válido.</Form.Control.Feedback>
							</Col>
						</Form.Group>
					</Row>

					<Row className='mb-4'>
						<Form.Group as={Row} controlId='formEmail'>
							<Form.Label column sm={2}>
								Email
							</Form.Label>
							<Col sm={10}>
								<Form.Control type='email' required />
								<Form.Control.Feedback type='invalid'>Preencha um email válido.</Form.Control.Feedback>
							</Col>
						</Form.Group>
					</Row>

					<Row className='mb-4'>
						<Form.Group as={Row} controlId='formLugares'>
							<Form.Label column sm={2}>
								Lugares
							</Form.Label>
							<Col sm={10}>
								<Form.Control type='number' required />
								<Form.Control.Feedback type='invalid'>Coloque o número de lugares.</Form.Control.Feedback>
							</Col>
						</Form.Group>
					</Row>

					<Row className='mb-4'>
						<Form.Group as={Row} controlId='formDateHour'>
							<Form.Label column sm={2}>
								Data e hora
							</Form.Label>
							<Col sm={10}>
								<DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat='Pp' required />
								<Form.Control.Feedback type='invalid'>Insira uma data e hora.</Form.Control.Feedback>
							</Col>
						</Form.Group>
					</Row>

					<Button style={{ float: 'right' }} variant='primary' type='submit'>
						Enviar pedido
					</Button>
				</Form>
			</PageLayout>
		</>
	);
};

export default Reservas;
