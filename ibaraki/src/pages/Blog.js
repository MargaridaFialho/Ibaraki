import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Container, Alert, Row, Col, Card } from 'react-bootstrap';

import FullpageLayout from '../components/FullpageLayout'
import Pagination from '../components/Pagination';

import sushi3 from '../imgs/sushi3.png';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);
	const navigate = useNavigate();

	const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts');

				if (!response.ok) {
					throw new Error('Não há resposta da rede');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	return (
        <FullpageLayout imageUrl={sushi3} pageTitle={"BLOG"}>
		    <section id='blog' className='blog'>
		    	<Container className='white'>
		    		<div className='blog__wrapper'>

		    			<div className='blog__posts'>
		    				{error && <Alert variant="danger">{error.message}</Alert>}

		    				<Row>
		    					<Col className='mb-5'>
		    						{currentPosts.filter((_, index) => index % 2 === 0).map(post => (
		    							<Card className='blog__post mb-5' key={post.id}>
		    								<Card.Header className='brand-color bold-text'>
		    									{post.title}
		    								</Card.Header>
		    								<Card.Body>
		    									<Card.Text className='normal-text'>{post.body}</Card.Text>
		    									<Button variant="primary" onClick={() => navigate(`update/${post.id}`)} className='blog__btn update'>
		    										Editar
		    									</Button>
		    									<Button variant="danger" onClick={() => navigate(`delete/${post.id}`)} className='blog__btn delete'>
		    										Eliminar
		    									</Button>
		    								</Card.Body>
		    							</Card>
		    						))}
		    					</Col>
		    					<Col>
		    						{currentPosts.filter((_, index) => index % 2 !== 0).map(post => (
		    							<Card className='blog__post mb-5' key={post.id}>
		    								<Card.Header className='brand-color bold-text'>
		    									{post.title}
		    								</Card.Header>
		    								<Card.Body>
		    									<Card.Text className='normal-text'>{post.body}</Card.Text>
		    									<Button variant="primary" onClick={() => navigate(`update/${post.id}`)} className='blog__btn update'>
		    										Editar
		    									</Button>
		    									<Button variant="danger" onClick={() => navigate(`delete/${post.id}`)} className='blog__btn delete'>
		    										Eliminar
		    									</Button>
		    								</Card.Body>
		    							</Card>
		    						))}
		    					</Col>
		    				</Row>
							</div>

		    			<div className='blog__controls'>
		    				<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
		    				<Button variant="primary" onClick={() => navigate('/blog/create')} className='blog__btn create'>
		    					Criar Artigo
		    				</Button>
		    			</div>
		    		</div>
		    	</Container>
		    </section>
        </FullpageLayout>
	);
};

export default Blog;
