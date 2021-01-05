import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`

`;

//This class will not bring in any further class.
//This class will be called by HeaderBar with any relevant props.

//we will have to define the metamask code here, or else import the metamask button, maybe from
//a library.

export default class MetamaskButton extends Component {
    render() {
        return (
            <Div>
                
            </Div>
        )
    }
}
