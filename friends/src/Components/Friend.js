import React from "react";
import {Route, Link} from "react-router-dom";

export default function(props) {
    const friend=props.friends.find(
        ( i ) => String( i.id )===props.match.params.id
        );
        
	if (!friend) {
		return <div> Loading...</div>;
	}
	return (
		<div>
			<h2>{friend.name}</h2>
			<h2>{friend.age}</h2>
			<h2>{friend.email}</h2>
		</div>
	);
}
