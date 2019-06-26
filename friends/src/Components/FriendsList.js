import React from "react";



const FriendsList= function( props ) {
    return (
        <div>
            {props.friends.map( ( friend ) => (
                <div>{friend.name}</div>
            ))
            }
        </div>
    )
}


export default FriendsList;
