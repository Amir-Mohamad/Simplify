import "./App.css";
import PostsScreen from "./screens/PostsScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostsNextComponent from "./components/PostsNextComponent";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" component={PostsScreen} exact />
				<Route path="/post/:id" component={PostDetail} />
				<Route path="/pagination/" component={PostsNextComponent} />
			</Router>
		</div>
	);
}

export default App;
