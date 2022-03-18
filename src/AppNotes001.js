import React from 'react';

function AppNotes001 () {
	const title = 'Blog Post';
	const body = 'This is my blog post';
	// comment array
	const comments = [
		{ id: 1, text: 'comment one' },
		{ id: 2, text: 'comment two' },
		{ id: 3, text: 'comment three' }
	];

	const loading = false;
	const showComments = true;
	// variable with jsx between paranthesis
	const commentBlock = (
		<div className='comments'>
			<h3>Comments ({comments.length})</h3>
			<ul>
				{comments.map((comment, index) => (
					<li key={index}>{comment.text}</li>
				))}
			</ul>
		</div>
	);

	if (loading) return <h1>Loading...</h1>;

	return (
		<div className='container'>
			<h1>{title.toUpperCase()}</h1>
			<p>{body}</p>
			{/if showComments is true show comment block/}
			{showComments && commentBlock}
			{/Or written as/}
			{/showComments ? commentBlock : 'showComments is false'/}
		</div>
	);
}

export default AppNotes001;
