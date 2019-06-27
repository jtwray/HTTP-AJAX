import React from "react";
import axios from "axios";

class AddFriend extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: "",
			email: "",
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
    };
    
    render() {
        const {
            name, age, email
        }=this.state;
		return (
			<form>
				<h1>Add a Friend</h1>
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
