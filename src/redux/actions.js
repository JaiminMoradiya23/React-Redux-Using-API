import axios from 'axios';
import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
} from './constants';

export const fetchPostsRequest = () => ({
	type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: posts,
});

export const fetchPostsFailure = (error) => ({
	type: FETCH_POSTS_FAILURE,
	payload: error,
});

export const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsRequest());
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				const posts = response.data;
				dispatch(fetchPostsSuccess(posts));
			})
			.catch((error) => {
				dispatch(fetchPostsFailure(error.message));
			});
	};
};
