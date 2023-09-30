import React from 'react';
import PostsComp from './Components/PostsComp';

const App = () => {
	return (
		<div className='App'>
			<h1 style={{ marginBottom: '0px' }}>React Redux Practice</h1>
			<p className='subtitle'>
				-- Take a look at the code for better understanding of{' '}
				<b>how redux works</b> --
			</p>
			<PostsComp />
			<p className='subtitle'>
				-- This data is being fetched using jsonplaceholder api --
			</p>
		</div>
	);
};

export default App;
