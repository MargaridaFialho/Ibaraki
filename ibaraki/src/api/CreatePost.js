import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import FullpageLayout from '../components/FullpageLayout';

import sushi3 from '../imgs/sushi3.png';

import axios from 'axios';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/posts', { title, body });

			const data = response.data;
			console.log(data);

			dispatch({ type: 'ADD_POST', payload: data });

			alert('Novo post criado');
			navigate('/blog');
		} catch (error) {
			console.error('Erro ao criar post:', error);
		}
	};

	return (
		<>
			<FullpageLayout imageUrl={sushi3} pageTitle={"CRIAR POST"}>
				<PostForm action='create' id={null} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
			</FullpageLayout>
		</>
	);
};

export default CreatePost;