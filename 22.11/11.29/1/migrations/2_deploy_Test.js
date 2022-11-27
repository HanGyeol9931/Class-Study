const Test = artifacts.require("Token")

module.exports = function(deployer){
    // Test의 배포가 되기전에
    // constructor의 매개변수가 전달 되어야 한다.
    // constructor의 매개변수를 전달하기 위해서
    // deploy함수의 두번째 인자로 추가 해주면 된다.
    // npx truffle migration 배포
    // tracsaction hash : 0x0f41e341dcd4983efad8c353e6acebe6fb096b8f1f044447b7b83e0d555bdcab
    // contract address : 0xCaF7440A34D070c98D99B157997f5f9cB5C07435


    deployer.deploy(Test);
}