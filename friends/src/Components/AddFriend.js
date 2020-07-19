import React from "react";
import axios from "axios";
import FriendsList from "./FriendsList";

class AddFriend extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
			email: "",
			errorMessage: "",
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		
	};

	createFriendItem = e => {
		const { name, age, email } = this.state;
		const newFriend = { name, age, email };
		e.preventDefault();
		axios
		  .post("http://localhost:5000/friends", newFriend)
		  .then(response => {
			this.props.updateFriends(response.data);
			this.setState({
			  name: "",
			  age: 0,
			  email: ""
			});
		  })
		  .catch(err => {
			console.log("Error: ", err);
		  });
	  };
	render() {
		const {name, age, email,errorMessage} = this.state;
		return (
			<form>
				<h1>Add a Friend</h1>
				<p>{errorMessage}</p>
				
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="age"
					placeholder="Age"
					value={age}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="email"
					placeholder="e-mail"
					value={email}
					onChange={this.handleChange}
				/>
				<button type="submit"> +1UP </button>
			</form>
		);
	}
}

export default AddFriend;
