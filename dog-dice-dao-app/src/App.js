// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageFrame from './components/PageFrame/PageFrame';
import LandingPage from '/components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import GamePage from './components/GamePage/GamePage';

const Div = styled.div`
  text-align: center;
  background-color: #0e3342;
  color: aliceblue;
`;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageToDisplay : "LandingPage",
    };

    this.handleRefresh = this.handleRefresh.bind(this);

  }

  handleRefresh(navBarButtonPressed){
    this.state.pageToDisplay = navBarButtonPressed;
  }

//idea behind the below object literal is to have the react component change to match the string
//that represents whatever component is pressed on in the nav bar.
  render() {
    return (
      <Div>
          <{this.state.pageToDisplay} handleRefresh={this.handleRefresh}/>
      </Div>
    )
  }
}

