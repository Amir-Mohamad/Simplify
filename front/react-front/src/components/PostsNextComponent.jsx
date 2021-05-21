import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../components/PostList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

function PostsNextComponent(props) {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function fetchPosts() {
			await axios.get(props.nextUrl).then((response) => {
				setPosts(response.data.results);
			});
		}

		fetchPosts();
	}, []);

	return (
		<>
			<div className="content">
				<h1>Simplify 👋</h1>
				<p>Simplify project using Django & React 🚀</p>
			</div>
			<div className="posts">
				{posts.map((post) => (
					<Col key={post.id} sm={12} lg={4} xl={3}>
						<PostList post={post} />
					</Col>
				))}
			</div>
		</>
	);
}
export default PostsNextComponent;
