import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostDetail from "./PostDetail";

// info about each post
function PostList({ post }) {
	return (
		<div className="post">
			<p>{post.title}</p>
			<br />
			<Link to={`/post/${post.id}`} className="post__more">
				Read More
			</Link>
		</div>
	);
}

export default PostList;
