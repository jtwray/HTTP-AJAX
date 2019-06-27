import React from 'react'
import ReactDOM from "react-dom"
import {Route, Link} from "react-router-dom"
import axios from "axios"
import './App.css'
import FriendsList from './Components/FriendsList'
import AddFriend from "./Components/AddFriend"
class App extends React.Component {
	state = {
		friends: []
	}
  componentDidMount() {
		axios.get('http://localhost:5000/friends/' )
		.then(response => {
      this.setState( {
        friends: response.data
      } )
      console.log(this.state.friends)
		} )
			.catch( err => {
			console.log('Error:', err)
		})
	
  }
  render() {
    const {friends}=this.state
    return (
      <div className="App">
        <nav>
          <h1>Friends</h1>
        </nav>
        <FriendsList friends={friends} />
        {console.log( `${friends}` )}
        <Route/>
      </div>
      );
    }
    
  }
export default App;
