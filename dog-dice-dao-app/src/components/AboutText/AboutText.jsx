import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AboutPara = styled.div`

`;

//This class will not bring in any further classes.
//This class will be called by AboutPage, with any relevant props.

//consider having a direct import from source the github readme.

export default class AboutText extends Component {
    render() {
        return (
            <AboutPara>
                Welcome to Dog Dice DAO, where you get to Be Your Own Dog (BYOD)!

                This is the start of a project which was inspired by the energy of Ivan
                of Ivan on Tech and the hilarious name of DuckDimeDAO among other things.

                Right now it's pretty simple, but eventually it's meant to be like a
                the Civic Council / Body Corp of a virtual dog park. The DAO (decentrailized
                autonomous organization) will eventually be able to propose, vote on
                and effectuate upgrades or changes to the nature and functionality of
                this project.

                For this, other common elements of a DAO than just the obvious like voting
                and treasury need to come into being. Look at PieDAO to get a sense of what
                I mean; god the proposals are so well put together. But anyway this is just
                a dog park where dogs play dice with their Eth (and maybe within the short
                term future Enjin). 
                
                Additionally land once created may also be subject to ERC1155/721. We might
                use a Sandbox model where community pioneering of the gamemaking process is 
                rewarded.

                As an example of the value proposition of leaving this in the community's hands
                once sufficiently functional, let's say the community proposes an allegorical
                game model where the player's staked dice-money is effectively used (execution may
                not directly use the very same tokens) to model a real-time trading decision,
                with appropriate slippage accounted for, and the player wins or loses based on
                the outcome of their decision(s). If this is worked out by the community and
                generalised many will come to appreciate the members of this dog park.

            </AboutPara>
        )
    }
}
