import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

function PostList() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function fetchPosts() {
			await axios.get(`http://127.0.0.1:8000/api`).then((response) => {
				setPosts(response.data.results);
			});
		}

		fetchPosts();
	}, []);

	return (
		<>
			{posts.map((post) => (
				<Col key={post.id} sm={12} lg={4} xl={3}>
					<p>{post.title}</p>
					<p>{post.created_at}</p>
				</Col>
			))}
			<p>{posts.count}</p>
			<h1>asdasd</h1>
		</>
	);
}

export default PostList;
