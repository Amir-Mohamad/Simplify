import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		async function fetchPost() {
			const { data } = await axios.get(`/api`);
			setPost(data);
			console.log(data);
		}

		fetchPost();
	}, []);

	return (
		<>
			<p>{post.count} data</p>
			<h1>asdasd</h1>
		</>
	);
}

export default PostList;
