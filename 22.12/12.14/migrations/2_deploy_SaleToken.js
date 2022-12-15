const NftToken = artifacts.require("NftToken");
const SaleToken = artifacts.require("SaleToken");

module.exports = async function (deployer){
    // 세번째 매개변수가
    // http://localhost:3000/metadata 이런 json 파일 있는 url
    await deployer.deploy(NftToken, "MyNFT", "MFT", "/")
    // NftToken 배포를 진행하고
    const token = await NftToken.deployed();
    // 배포 완료된 인스턴스 가져오기
    await deployer.deploy(SaleToken, token.address); // 배포 진행
    const saleToken = await SaleToken.deployed();
}