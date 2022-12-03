const { ethers } = require("hardhat");

const etherToWei = (n) => {
    return ethers.utils.parseEther(n.toString())
  };
const TOTAL_SUPPLY = etherToWei(1000_000);
const FEE = etherToWei(0.005);

async function main() {
    const FullFeatureToken = await ethers.getContractFactory("FullFeatureToken");
    const fullFeatureToken = await FullFeatureToken.deploy(
        "QEWA", 
        "QEWA1", 
        {"type":"BigNumber","hex":"0x513206"},
        18,
        "0x001345463dAa9ec237242d04c74c4f4c87AEd2E2",
        {"_isBlacklistEnabled":false,"_isBurnable":false,"_isDocumentAllowed":false,"_isMintable":false,"_isPausable":false,"_isWhitelistEnabled":false,"_isMaxAmountOfTokensSet":false,"_isForceTransferAllowed":false},
        {"type":"BigNumber","hex":"0x00"},
        "",
        "0x9254C0fcB2FaA4550B9ba582558cE1D03Ba3d05d",
        { value: FEE.toString() }
        );
    await fullFeatureToken.deployed();
    console.log("FullFeatureToken deployed to: ", fullFeatureToken.address);
}
main();
