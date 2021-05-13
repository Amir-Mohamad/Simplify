import React from "react";
// info about each post
function PostList({ post }) {
	return (
		<div className="post">
			<p>{post.title}</p>
			<br />
			<a href="#" className="post__more">
				Read More
			</a>
		</div>
	);
}

export default PostList;
