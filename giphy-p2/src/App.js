import React, { Component } from 'react';
import GifList from './components/GifList';
import axios from 'axios';
import './App.css';
import AddGifForm from './components/AddGifForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      inputTypeValue: '',
      inputNumberValue: '',
    }
     this.handleInputTypeChange = this.handleInputTypeChange.bind(this);
     this.handleInputNumberChange = this.handleInputNumberChange.bind(this);
     this.handleGifSubmit = this.handleGifSubmit.bind(this);
  }


  handleInputTypeChange(event) {
    this.setState({
      inputTypeValue: event.target.value,
    });
  }
  handleInputNumberChange(event) {
    this.setState({
      inputNumberValue: event.target.value,
    });
  }

  handleGifSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputTypeValue);
    console.log(this.state.inputNumberValue);
    let url = `https://api.giphy.com/v1/gifs/search?api_key=e7bf1af8bb7444789cbe1afb19def670&q=${this.state.inputTypeValue}&limit=${this.state.inputNumberValue}`;
  axios(url)
  .then(res => {
      this.setState((prevState) => {
        return{
          gifs: res.data.data,
        }
      })
    }).catch(err => console.log(err));
}

    render() {
    return (
      <div className="App">
        <div className="App-header">
         <h1> Welcome to Pick Your Own Giphy</h1>
         <h2>(the best giphy) </h2>
         </div>
          <AddGifForm
          handleGifSubmit={this.handleGifSubmit}
          handleInputTypeChange={this.handleInputTypeChange}
          handleInputNumberChange={this.handleInputNumberChange}
          inputTypeValue={this.state.inputTypeValue}
          inputNumberValue={this.state.inputNumberValue}
        />
        <GifList
          data={this.state.gifs}/>

          </div>
    );
  }
}

export default App;

