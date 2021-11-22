import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/homeScreen";
import MainScreen from "./components/main";
import "./style/app.css";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/main">
						<MainScreen />
					</Route>
					<Route path="/">
						<HomeScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
