const GYEOLToken = artifacts.require("GYEOLToken");

module.exports = function(deployer){
    deployer.deploy(GYEOLToken,"GYEOLToken","GTK", 10000)
}