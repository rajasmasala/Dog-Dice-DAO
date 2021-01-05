import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MetamaskButton from '../MetamaskButton/MetamaskButton';

const Div = styled.div`

`;

//This class will bring in MetamaskButton, with any relevant props.
//This class will be called by PageFrame, with any relevant props.

export default class HeaderBar extends Component {
    render() {
        return (
            <Div>
               <MetamaskButton /> 
            </Div>
        )
    }
}
