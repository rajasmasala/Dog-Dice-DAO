import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PageFrame from '../PageFrame/PageFrame';
import GameObject from '../GameObject/GameObject';

const Div = styled.div`

`;

//This class will bring in PageFrame and GameObject, with any relevant props.
//This class will be called by App.

export default class GamePage extends Component {
    render() {
        return (
            <Div>
                <PageFrame handleRefresh={this.props.handleRefresh} />
                <GameObject />
            </Div>
        )
    }
}
