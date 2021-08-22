import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/homeScreen";
import MainScreen from "./components/main";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/main">
					<MainScreen />
				</Route>
				<Route path="/">
					<HomeScreen />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
