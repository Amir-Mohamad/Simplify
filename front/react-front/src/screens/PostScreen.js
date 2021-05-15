import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// The Post Detail screen
function PostScreen({ match }) {
	const [post, setPost] = useState([]);
	useEffect(() => {
		async function fetchPost() {
			await axios
				.get(`http://127.0.0.1:8000/api/${match.params.id}`)
				.then((response) => {
					setPost(response.data.results);
				});
		}

		fetchPost();
	}, []);
	return (
		<div>
			<p>{post.title}</p>
		</div>
	);
}

export default PostScreen;
