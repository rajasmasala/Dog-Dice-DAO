import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import HeaderBar from '../HeaderBar/HeaderBar';

const Div = styled.div`

`;

//This class will bring in the NavBar and the HeaderBar, with any relevant props.
//This class will be called by LandingPage, AboutPage and GamePage.

export default class PageFrame extends Component {
    render() {
        return (
            <Div>
                <HeaderBar />
                <NavBar handleRefresh={this.props.handleRefresh} /> 
            </Div>
        )
    }
}
