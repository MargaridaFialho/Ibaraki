import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const PostForm = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		if (action === 'delete') {
			onSubmit();
			return;
		}
		let url = 'http://localhost:5000/posts';

		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			action === 'update' ? await axios.put(url, { title, body }) : await axios.post(url, { title, body });

			navigate('/blog');
		} catch (error) {
			console.error(`Failed to ${action} post.`, error);
		}
	};

	return (
		<Container className="white">
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-5' controlId="formTitle">
							<Form.Label>Título</Form.Label>
							<Form.Control type="text" value={title} onChange={e => onTitleChange(e.target.value)} required />
						</Form.Group>
						<Form.Group className='mb-5' controlId="formBody">
							<Form.Label>Artigo</Form.Label>
							<Form.Control as="textarea" value={body} onChange={e => onBodyChange(e.target.value)} required />
						</Form.Group>
                        <div className='float-end'>
                            {action === 'delete' ? (
						    	<>
						    		<Button variant="danger" type='button' onClick={onSubmit}>
						    			Eliminar
						    		</Button>
						    		<Button variant="secondary" type='button' onClick={() => navigate('/blog')}>
						    			Cancelar
						    		</Button>
						    	</>
						    ) : (
						    	<>
						    		<Button variant="primary" type='submit'>
						    			{action === 'update' ? 'Editar' : 'Guardar'}
						    		</Button>
						    		<Button variant="secondary" type='button' onClick={() => navigate('/blog')}>
						    			Cancelar
						    		</Button>
						    	</>
						    )}
                        </div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default PostForm;
