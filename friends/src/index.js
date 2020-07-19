import React from "react";
import ReactDOM from "react-dom";
import {Route, Link,BrowserRouter} from "react-router-dom";
import axios from "axios";
import FriendsList from "./Components/FriendsList";
import AddFriend from "./Components/AddFriend";
import "./App.css";
import Friend from "./Components/Friend"
import Home from "./Components/Home"

class App extends React.Component {
	state = {
		friends: [],
	};
	componentDidMount() {
		axios
			.get("http://localhost:5000/friends/")
			.then((response) => {
				this.setState({
					friends: response.data,
				});
				console.log(this.state.friends);
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}
	updateFriendItems = (friends) => {
		this.setState({friends});
	};
	render() {
		const {friends} = this.state;

		return (
			<div className="App">
				<nav>
					<Link to="/">Home</Link>
					<h2>
						<Link to="/friendslist">Friends List</Link>{" "}
					</h2>
					<h3>
						<Link to="/newfriend">Add New Friend</Link>
					</h3>
        </nav>
        
				<Route path="/"	exact	render={(props) => <Home {...props} friends={friends} />}
        />
        <Route
        path="/friend/:id"
        exact
        render={(props) => <Friend {...props} friends={friends} />}
      />
				<Route
					exact
					path="/friendslist"
					render={(props) => (
						<FriendsList {...props} friends={friends} />
					)}
				/>
				<Route
					exact
					path="/newfriend"
					render={(props) => (
						<AddFriend
							{...props}
							updateFriendItems={this.updateFriendItems}
						/>
					)}
				/>
			</div>
		);
	}
}
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

