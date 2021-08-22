import "../style/app.css";
import { useState } from "react";
import logo from "../img/logo-white.svg";
import {
	AppBar,
	Toolbar,
	IconButton,
	Slide,
	InputBase,
	Tabs,
	Tab,
	Button,
} from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Menu, Search } from "@material-ui/icons";

function MainScreen() {
	const classes = makeStyles((theme) => ({
		search: {
			position: "relative",
			border: "1px solid #C4C4C4",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: alpha(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: alpha(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(1),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: "12ch",
				"&:focus": {
					width: "20ch",
				},
			},
		},
	}))();

	const NavBar = () => (
		<div className="appBar">
			<AppBar position="static" color="transparent">
				<Toolbar>
					<IconButton edge="start" className="white" aria-label="menu">
						<Menu />
					</IconButton>
					<div className="topLogo">
						<img src={logo} />
						<h1>Patronus</h1>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);

	const Searchbar = () => (
		<div className="searchbar">
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<Search />
				</div>
				<InputBase
					placeholder="Search destinations…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ "aria-label": "search" }}
				/>
			</div>
		</div>
	);

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const TabBar = () => (
		<Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered>
			<Tab label="Safest Path" />
			<Tab label="safe Places" />
		</Tabs>
	);

	const Map = () => (
		<MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", margin: "1rem 0" }}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
		</MapContainer>
	);

	return (
		<Slide direction="left" in={true}>
			<div className="mainScreen">
				<NavBar />
				<div className="mainContent">
					<Searchbar />
					<TabBar />
					<Map />
					<p style={{ textAlign: "center" }}>Have an incident or problem to report?</p>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<Button
							style={{
								fontFamily: "Poppins",
								border: "solid 1px #d4479c",
								textTransform: "capitalize",
								color: "#d4479c",
								fontSize: "0.75rem",
								margin: "0.25rem",
							}}
						>
							Add a New Report
						</Button>
						<Button
							style={{
								fontFamily: "Poppins",
								border: "solid 1px #d4479c",
								textTransform: "capitalize",
								color: "#d4479c",
								fontSize: "0.75rem",
								margin: "0.25rem",
							}}
						>
							View Previous Reports
						</Button>
						<p
							style={{
								fontFamily: "Poppins",
								margin: "0.5rem",
								fontSize: "0.675rem",
							}}
						>
							Tap below in case of an emergency. Your location will be sent to your close contacts
							and police.
						</p>
						<Button
							style={{
								fontFamily: "Poppins",
								backgroundColor: "#d4479c",
								textTransform: "uppercase",
								color: "white",
								margin: "0.5rem",
							}}
						>
							Emergency
						</Button>
					</div>
				</div>
			</div>
		</Slide>
	);
}

export default MainScreen;
