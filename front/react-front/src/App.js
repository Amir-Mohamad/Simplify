import "./App.css";
import PostsScreen from "./screens/PostsScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" component={PostsScreen} exact />
				<Route path="/post/:id" component={PostDetail} exact />
			</Router>
		</div>
	);
}

export default App;
