import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`

`;

//This class will not bring in anything further.
//This class will be called by NavBar with any relevant props.

//Modeled off of examples shown in Zsolt Nagy's React 101 course
//at Ivan On Tech Academy.

export default class NavBarButton extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        //prevent default form submission
        event.preventDefault();

        this.props.handleRefresh(this.props.pageName);
    }

    render() {
        return (
            <Div>
                <form action="#" method="POST">
                <button onClick={this.handleClick}>{this.props.pageText}</button>    
                </form>    
            </Div>
        )
    }
}
