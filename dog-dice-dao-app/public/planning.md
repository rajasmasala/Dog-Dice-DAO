#Working out the website.

* Well we need to think in terms of React Components, and using this and Flexbox CSS we can sort of rough out that Figma doodle we did.
* So with the dog pictures
    * Each dog pic will be a component
    * All dog pics will be in a framing div in order to arrange it.
    * Effects and implementation?
* DOG DICE DAO in big wrapping letters, red or purple colours in the middle.
* Along the bottom of the screen, maybe we have our ABOUT | HOME | GAME bar.
* See how the metamask button is implemented on websites like Uniswap and see how we can port that to our project.

The above aspects will all be componentized in scr>components folder of the app directory.

Components of the Landing Page (maybe this is just assembled anyway i.e. just rearrange components for different 'pages'):
1) NavBar
1) NavBarButton
1) MetamaskButton
1) DogImage
1) DogImagesFrame
1) MainTitle

Components of the About Page:
1) NavBar
1) NavBarButton
1) MetamaskButton
1) About Text

Components of the Game Page:
1) NavBar
1) NavBarButton
1) MetamaskButton
1) GameObject (Unity WASM player that is able to handle in-game money interactions)


If we are to have the pages themselves be Components, this will be how it is constructed:

- Main App.js will have NavBar, NavBarButton and MetamaskButton (and maybe a custom favicon) directly tagged in from their respective component files.
- NavBarButtons will have to push the props back up again using either props or stateful hooks to allow for main page changes.
- Central component will be the Page components - LandingPage, AboutPage, GamePage.
- If we want to have it be even more modularized, have the NavBar, NavBarButtons and MetmaskButton be componentized into a commbined component that is then referenced by each page component.
- On the face of it this may seem like overkill but it actually ends up being mor structurally consistent IMO.

So overall component structure will be something like:

App
* LandingPage
    * PageFrame (see below)
    * DogImages (see below)
    * MainTitle
* AboutPage
    * PageFrame (see below)
    * AboutText
* GamePage
    * PageFrame (see below)
    * GameObject

Now for the individual components so referenced:
* PageFrame
    * NavBar (see below)
    * HeaderBar (see below)
* NavBar
    * NavBarButton
    * (sundry/future internal styling and markup)
* HeaderBar
    * MetamaskButton
    * (sundry/future internal styling and markup)
* DogImages
    * DogImage
    * (sundry/future internal styling and markup)

Let's try and use the Styled library to speed up coding / so we don't have to tab through to different pages to see what is going on.

Styled syntax:

>import styled from 'styled-components';
>
>//( we may need to install something first)
>
>//....
>
>const Div = styled.div\`
>  text-align: center;
>  background-color: #0e3342;
>  color: aliceblue;
>\`;
>
>//^Note the backticks used to bring CSS
>//as object literals into a .js file. 

React Component syntax:

>//Firstly, make sure to have the file extension be .jsx.
>
>//This may be important. 
>
>//Assuming everything is in the same src folder... 
>
>//this would be caled from app.js level:
>
>import CoinList from './components/CoinList/CoinList';
>
>//Note the file extension drops out in the import call.
>
>import React from 'react';
>
>class App extends React.Component {...

src/component-side version (and really App.js could be similarly destructured if you wanted):

>import React, { Component } from 'react';
>
>import Coin from '../Coin/Coin';
>
>export default class CoinList extends Component {

Implementation Problems

* We need to be able to have a press of a component (the navbar button) result in switching of the called at the app component level.
* Solution : prop drilldown so that on click of an navbarButton the injected prop function will refresh the app-level's single react component tag name with the clicked-on page's component name.

* We need to figure out how to bring in the game object and integrate Metamask and Eth into the game. For that matter, we have to see how to integrate Metamask into React especially in light of recent warning messages from Metamask about not injecting Web3 providers anymore.
* So regarding the warning messages, [this StackExchange answer by Roman Frolov helps solve the issue](https://ethereum.stackexchange.com/questions/41783/what-are-the-web3-httpprovider-options/41790#41790?newreg=15ca992de15846c0b67b3a2b3ef5caf9). Basically the answerer offers some conditional code that first takes in any injected web3 provider and then if not provided just grabs the infura provided node access via your generated API key (a comment below says it's no longer needed.)
>   // Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
} else {
    web3js = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<API_TOKEN>"));
}
* Please also note the video by EatTheBlocks which highlights the model code of Truffle's
/web3 library for this purpose, with race-condition guards etc. Maybe we can use the lib in its most updated iteration (we'll have to change the Ganache localhost fallback to the infura address).
* It looks like there is a Unity library that allows WebGL builds to talk to Javascript. [This vid by codeabled goes over it.](https://www.youtube.com/watch?v=DEBsnDglbYs) Get the latest implementation from the docs or rather the one that applies to our v2019.4 build.


