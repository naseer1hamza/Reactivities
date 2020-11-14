import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    values: []
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      this.setState({
        values: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header as='h2' icon='users' content='Reactivities' />
        <List>
          <List.Item>{this.state.values.map((value: any) => (
              <li key={value.id}>{value.name}</li>
            ))}</List.Item>
        </List>
      </div>
    );
  }
}

export default App;
