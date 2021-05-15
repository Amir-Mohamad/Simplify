import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import PostScreen from "../screens/PostScreen";

// info about each post
function PostList({ post }) {
	return (
		<div className="post">
			<p>{post.title}</p>
			<br />
			<Router>
				<Link to={`/${post.id}`} className="post__more">
					Read More
				</Link>
			</Router>
		</div>
	);
}

export default PostList;
