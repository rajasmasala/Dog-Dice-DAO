import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const Div = styled.div`

`;

//This class will not bring in any further class.
//This class will be called by LandingPage with any relevant props.

export default class MainTitle extends Component {
    render() {
        return (
            <Div>
               Dog Dice DAO 
            </Div>
        )
    }
}
