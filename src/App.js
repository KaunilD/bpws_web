import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      gen_count: 0
    }

    this.getWorksheet = this.getWorksheet.bind(this);
  }

  getWorksheet = () => {
    console.log("fetching worksheet link");
    var parent = this;
    axios.post('http://localhost:8890/', { })
    .then(function (response) {
      parent.setState({gen_count: parent.state.gen_count+1});
      window.open('http://localhost:8890/'+response.data.link);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="outline-success" onClick={this.getWorksheet}>
            {this.state.gen_count  === 0 ? 'Get Worksheet' : 'Another one!'}
          </Button>


        </header>
      </div>
    );
  }
}

export default App;
