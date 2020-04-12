import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {userName: 'Mohan'};
  }

  changeStateData = () => {
    console.log('Changing State');
    let userName = this.state.userName === 'Mohan' ? 'Ruchir' : 'Mohan';
    this.setState({userName: userName});
  }

  render(){
    return (
      <div>
        <h2 className="text-center bg-primary p-2 text-white">{this.state.userName}'s To Do List</h2>
        <button className="btn btn-primary m-2" onClick={ this.changeStateData }>Change</button>
      </div>
    );
  }
  
}


