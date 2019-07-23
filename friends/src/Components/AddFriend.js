import React from "react"
import axios from "axios"

class AddFriend extends React.Component{
    constructor() {
        super();
        this.state={
            name:"",
        }
    }
    render() {
        return (
            <form>
                <h1>Add a Friend</h1>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={false} />
                <button type="submit"> +1UP </button>
            </form>
        )
    }
}

export default AddFriend
