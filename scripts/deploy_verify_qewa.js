const { ethers } = require("hardhat");

const etherToWei = (n) => {
    return ethers.utils.parseEther(n.toString())
  };

const name_ = "QEWA";
const symbol_ = "QEWA1";
const initialSupplyToSet = {"type":"BigNumber","hex":"0x513206"};
const decimalsToSet = 18;
const tokenOwner = "0x001345463dAa9ec237242d04c74c4f4c87AEd2E2";
const customConfigProps = {"_isBlacklistEnabled":false,"_isBurnable":false,"_isDocumentAllowed":false,"_isMintable":false,"_isPausable":false,"_isWhitelistEnabled":false,"_isMaxAmountOfTokensSet":false,"_isForceTransferAllowed":false};
const maxTokenAmount = {"type":"BigNumber","hex":"0x00"};
const newDocumentUri = "";
const feeReceiver = "0x9254C0fcB2FaA4550B9ba582558cE1D03Ba3d05d";
const FEE = etherToWei(0.005);

async function main() {
    const FullFeatureToken = await ethers.getContractFactory("FullFeatureToken");
    const fullFeatureToken = await FullFeatureToken.deploy(
        name_, 
        symbol_, 
        initialSupplyToSet,
        decimalsToSet,
        tokenOwner,
        customConfigProps,
        maxTokenAmount,
        newDocumentUri,
        feeReceiver,
        { value: FEE.toString() }
        );
    await fullFeatureToken.deployed();
    console.log("FullFeatureToken deployed to: ", fullFeatureToken.address);

    await hre.run("verify:verify", {
        address: fullFeatureToken.address,
        constructorArguments: [
            name_, 
            symbol_, 
            initialSupplyToSet,
            decimalsToSet,
            tokenOwner,
            customConfigProps,
            maxTokenAmount,
            newDocumentUri,
            feeReceiver
        ],
      })
}
main();