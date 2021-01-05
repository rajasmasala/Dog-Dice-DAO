import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavBarButton from '../NavBarButton/NavBarButton';

const Div = styled.div`

`;

//This class will bring in the NavBarButton, with any relevant props.
//This class will be called by PageFrame.

//Do we need to specifically call handleRefresh()?

export default class NavBar extends Component {
    render() {
        return (
            <Div>
               <NavBarButton pageName="LandingPage" 
               pageText="Home" 
               handleRefresh={this.props.handleRefresh}/>
               <NavBarButton pageName="AboutPage" 
               pageText="About" 
               handleRefresh={this.props.handleRefresh}/>
               <NavBarButton pageName="GamePage" 
               pageText="Game" 
               handleRefresh={this.props.handleRefresh}/> 
            </Div>
        )
    }
}
