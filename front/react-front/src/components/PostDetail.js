import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PostDetail.css";

// The Post Detail screen
function PostScreen({ match }) {
	const [post, setPost] = useState([]);
	useEffect(() => {
		async function fetchPost() {
			await axios
				.get(`http://127.0.0.1:8000/api/${match.params.id}`)
				.then((response) => {
					setPost(response.data);
				});
		}

		fetchPost();
	}, []);
	return (
		<div className="detail">
			<h1>{post.title}</h1>
			<p>{post.description}</p>
			<p>created at: {post.created_at}</p>
		</div>
	);
}

export default PostScreen;
