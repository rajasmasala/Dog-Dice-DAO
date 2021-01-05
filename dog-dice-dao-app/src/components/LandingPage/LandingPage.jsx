import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PageFrame from '../PageFrame/PageFrame';
import DogImages from '../DogImages/DogImages';
import MainTitle from '../MainTitle/MainTitle';

const Div = styled.div`

`;

//This class will bring in PageFrame, DogImages and MainTitle, with any relevant props.
//This class will be called by App.

export default class LandingPage extends Component {
    render() {
        return (
            <Div>
               <PageFrame handleRefresh={this.props.handleRefresh} />
               <DogImages />
               <MainTitle /> 
            </Div>
        )
    }
}
