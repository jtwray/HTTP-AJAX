import React from "react";



const FriendsList= function( props ) {
        <div>
            {props.friends.map( ( friend ) => (
                <ul>
                <div>{friend.name}</div>
                <div>{friend.age} yrs old</div>
    return (
                <div>Email: {friend.email}</div>
                </ul>
            ))
            }
        </div>
    )
}


export default FriendsList;
