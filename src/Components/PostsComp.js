import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const PostsComp = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		posts.loading ? setIsLoading(true) : setIsLoading(false);
	}, [posts]);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div className='container'>
			{isLoading ? (
				<h2 style={{ textAlign: 'center' }}>Loading...</h2>
			) : (
				<div className='card_wrapper'>
					{posts.posts.slice(0, 11).map((post) => (
						<div key={post.id} className='card'>
							<div className='card_title'>
								<h2>{post.id}.</h2>
								<h3>{post.title}</h3>
							</div>
							<hr />
							<p className='card_description'>{post.body}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PostsComp;
