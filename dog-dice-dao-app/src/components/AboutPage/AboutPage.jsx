import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageFrame from '../PageFrame/PageFrame';
import AboutText from '../AboutText/AboutText';

//fill out the below (or change the tags) for css styling ideas
const Div = styled.div`

`;

//This class will bring in PageFrame and AboutText, with any relevant props.
//This class will be called by App.

//Any call to PageFrame has to be careful about ensuring proper prop drilling for
//the NavBarButton. We have to drill handleRefresh down to it.

export default class AboutPage extends Component {
    render() {
        return (
            <Div>
                <PageFrame handleRefresh={this.props.handleRefresh} />
                <AboutText />    
            </Div>
        )
    }
}
