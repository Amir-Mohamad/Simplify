import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import PostList from "./PostList";

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>React app</h1>
				<PostList />
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
