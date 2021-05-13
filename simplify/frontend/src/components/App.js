import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>React app</h1>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
