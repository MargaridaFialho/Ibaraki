import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import FullpageLayout from '../components/FullpageLayout';

import sushi3 from '../imgs/sushi3.png';

import axios from 'axios';

const UpdatePost = () => {
	const { id: postId } = useParams();
	const id = Number(postId);
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(`http://localhost:5000/posts/${id}`);
				const post = response.data;

				setTitle(post.title);
				setBody(post.body);
			} catch (error) {
				console.error('Erro ao buscar post:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await axios.put(`http://localhost:5000/posts/${id}`, {
				title,
				body,
			});

			const updatedPost = response.data;

			dispatch({ type: 'UPDATE_POST', payload: updatedPost });

			alert('Post atualizado');
			navigate('/blog');
		} catch (error) {
			console.error('Erro ao atualizar post:', error);
		}
	};

	return (
		<>
			<FullpageLayout imageUrl={sushi3} pageTitle={"EDITAR POST"}>
				<PostForm action='update' id={id} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
			</FullpageLayout>
		</>
	);
};

export default UpdatePost;