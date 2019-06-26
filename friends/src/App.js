import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
	state = {
		friends: []
	}
  componentDidMount() {
		axios.get('http://localhost:5000/friends/' )
		.then(response => {
			this.setState(response.data)
		} )
			.then( () => axios.get( 'http://localhost:5000/friends/' ) )
			.then( response => {
				console.log(response.data)
			})
			.catch( err => {
			console.log('Error:', err)
		})
	
  }
  render() {
    
    return (
      <div className="App">
      
      </div>
      );
    }
    
  }
export default App;
