import "../style/app.css";
import logo from "../img/logo.svg";
import { ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

function HomeScreen() {
	return (
		<div className="homeScreen">
			<img src={logo} />
			<h1>Patronus</h1>
			<h2>Stay alert, stay safe</h2>
			<div className="thinDivider" />
			<Link to="/main">
				<ChevronRight className="icon" />
			</Link>
		</div>
	);
}

export default HomeScreen;
