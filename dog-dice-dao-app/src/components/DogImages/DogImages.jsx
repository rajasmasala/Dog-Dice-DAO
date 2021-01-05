import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DogImage from '../DogImage/DogImage';

const Div = styled.div`

`;

//maybe DogImage needs an image source specified as a prop?
//or even a FlexBox schemata for the three images?

//This class will bring in DogImage, with any relevant props.
//This class will be called by LandingPage.

export default class DogImages extends Component {
    render() {
        return (
            <Div>
               <DogImage />
               <DogImage />
               <DogImage />

            </Div>
        )
    }
}
