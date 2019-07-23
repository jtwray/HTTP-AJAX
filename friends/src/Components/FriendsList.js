import React from "react";

const FriendsList = function(props) {
	return (
		<div>
			{props.friends.map((friend) => (
				<ul>
					<div>{friend.name}</div>
					<div>{friend.age} yrs old</div>
					<div>Email: {friend.email}</div>
				</ul>
			))}
		</div>
	);
};

export default FriendsList;
