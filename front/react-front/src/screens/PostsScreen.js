import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../components/PostList";
import { Row, Col } from "react-bootstrap";

// All posts
function PostsScreen() {
	const [posts, setPosts] = useState([]);
	const [postsFullInfo, setPostsFullInfo] = useState([]);
	useEffect(() => {
		async function fetchPosts() {
			await axios.get(`http://127.0.0.1:8000/api`).then((response) => {
				setPosts(response.data.results);
				setPostsFullInfo(response.data);
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
			<a href={postsFullInfo.next}>Next Page</a>
			{/* TODO: Pagination */}
			{/* <PostsNextComponent nextUrl={postsFullInfo.next}/> */}
		</>
	);
}

export default PostsScreen;
