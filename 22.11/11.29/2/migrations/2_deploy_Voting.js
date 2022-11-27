const Voting = artifacts.require("Voting")

module.exports = function(deployed){
    deployed.deploy(Voting,["종화","석","지니","태수"])
}