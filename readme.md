<!--Readme for Dog Dice DAO project -->
<!--Welcome! This is a quiet town and we're happy to have a visitor.-->
<!--My skillset with many of the utilised frameworks / languages is pretty poor. -->
<!--This idea started after I got stir crazy during travel quarantine and took up -->
<!--Ivan on Tech Academy's pro course on annual fee basis (about two paychecks for me.)-->
<!--Came back to my senses, asked for my money back and they are going to send it soon, -->
<!--but I've got the bug to do programming stuff again after that - a deadly bug. So anyway I'm -->
<!--going to be doing this, hopefully if I keep at it there's some kind of freelance etc -->
<!--opportunity that correlates with the wellbeing of my saner prerogatives. -->
<!--Brad Traversy at Travery Media, and numerous other altruistic folks have further helped me -->
<!--to obtain some sort of basic facility to start to slowly learn to do -->
<!-- whatever it is this project is. -->


# Dog Dice DAO

[Brad Traversy](http://www.traversymedia.com)  taught me Markdown.

[Learn it yourself :)](https://www.youtube.com/watch?v=HUBNt18RFbo&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=29)


Further credits to Ivan Liljeqvist, Filip Martinnson, Zsolt Nagy, Grant Hawkins et al at [Ivan on Tech Academy](https://academy.ivanontech.com/) (even though I had to jump out of that for financial reasons, they were a source of inspiration to try coding).

## Basic Premise

A kind of Dog Park. It will have a body corp.
* The DAO paradigm, however implemented (eventually), offers a way to leave this project in an actually live, mutable, evolving state to whatever community it may accrue.
* The fundamental game is a dice game. The underlying contract (to be built using an upgradeable proxy-storage-functional model) has functionality to call an on-chain random number generating oracle.
* This is meant to be a game that involves cryptocurrency.

## Initial Model
* Another aspect of this game is that the game will be situated in a medieval RPG-like milieu at the start of its life (i.e. in testing phase and possibly after).
* The dogs run around, stake money on dice bets that is either drawn from their Enjin wallet or the Metamask wallet, and lose or gain money depending on how the dice-roll goes.


## Thoughts on Second Steps
* The DAO itself is going to have to be a second step. Maybe even step 2.5, after first implementing some simple forum for players.
* (The terms of the DAO and its protocols would need fleshing out.)
* There is a potential for real estate sales on similar terms to Sandbox, with a potential RPG game-maker built into the site to allow people to easily build games. If we want we can take it to the desktop too, and easily, via something like Electron.
* There is a potential for skin building for dogs (and NPCs) and similar sales too.
* These would tentativelty use ERC-1155, likely the Open-Zeppelin implementation since that's all I've actually looked at.
* Multiplayer gameplay can be introduced. Initially it's just single play.
* Probably at the same time as this or just after, we can move to Enjin integration.

## Initial Build

* Tech stack: React, Axios, Node, Truffle (and Unity).
* Initial deployment might be on Github Pages.
* Start the live version with only test eth betting.
* I'm not sure if the library we used in Ivan on Tech Academy's Eth 201 course, Provable, accepts test eth. Better check. It may be most cost-effective to go live with Math.Random() from the JS library or some similar pseudorandom functionality built into the smart contract.

## Initial Gameplay
* Simple RPG village style setting. 
* There are dog NPCs. 
* You are a dog player character.
* 2.5D world view, similar gameplay to isometric.
* You can run up to a dog character and initiate a dice game with the dog.

## Task List (Short Term)
* [ ] Make the three smart contracts - subject to further revision and correction if errors are made.
* [ ] Prototype the website experience on Figma. (Don't get carried away.)
    * There will be a landing page
    * Every page should have a connect button for Web3 wallets.
    * There will be an About page which will also segue into some kind of blog that keeps people updated on the latest news re Dog Dice DAO
    * Just a super simple setup is the goal, but offering people opportunities for engagement despite being a rough product.
* [ ] Make the website using React, Node, etc.
* [ ] Make the game on Unity.
* [ ] Push product to Github and then to Github Pages.

## Research
* (3rd January 2021)
* [Open-Zeppelin's explainer re the proxy contract model](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies)
* [Open Zeppelin's contract materials](https://docs.openzeppelin.com/contracts/3.x/api/proxy) were / are likely to be used in the proxy construction.
* Per Open Zeppelin on storage issues:
    >When upgrading a proxy from one implementation to another, the storage layout of both implementations must be compatible. This means that, even though you can completely change the code of the implementation, you cannot modify the existing contract state variables. The only operation allowed is to append new state variables after the ones already declared.

* This was why Filip wanted us to use a template state-storage contract with every possible state mapping on it, then have the proxy and functional contract both inherit it. But this doesn't precisely fit with how Open Zeppelin wants us to do things, with an Open Zeppelin special proxyAdmin contract and proxy contract that uses randomized memory slots to magically not interfere with logic-contract storage mappings. According to OpenZeppelin, as long as we're careful with base contracts etc and inheritance and making sure the order of variable declaration never changes we'll be fine. At the same time, they themselves offer a single instance of declaring a placeholder variable. I.e. maybe we should just declare the full suite of placeholder mappings anyway? Ultimately, it might be best to do away with OpenZeppelin altogether and avoid the hassle of compliance with their deps.
* Conclusion: Do up a contract per Open Zeppelin's terms, but put in all types of data type mappings and getter, setter, delete functions for each one (per [fravoll's pretty eternal-storage solidity-pattern example](https://github.com/fravoll/solidity-patterns/blob/master/docs/eternal_storage.md) but extended to match Filip's more extensive implementation), then deploy locally first and see what exactly Open Zeppelin decides to do / deploy. Obviously if I was worth anything as a coder I'd just read the code and instantly know what's going on but I don't have the energy - the docs are hard enough.

Current status (5 Jan 2021):
* [x] Had some sort of a go at the smart contracts. Basic stuff.
* [x] Had some sort of a go at the game on Unity. Just a mockup.
* [x] Basic mockup of some sort of landing page on Figma
* [x] To do now: some of the webpage coding maybe using create-react-app.


