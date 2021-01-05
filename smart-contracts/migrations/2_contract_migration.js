const { deployProxy } = require( "@openzeppelin/truffle-upgrades");
const DogDiceDAOGame = artifacts.require("DogDiceDAOGame");

module.exports = async function (deployer) {
  const instance = await deployProxy(DogDiceDAOGame, { deployer });
  console.log("Deployed", instance.address);
};
