const { ethers } = require("hardhat");

const etherToWei = (n) => {
    return ethers.utils.parseEther(n.toString())
  };

//const contractAddress = "0x7482B0C11d676C78Be964961B81DC19Be5173324";
//const contractAddress = "0x4D451394D4737fA8f567F1f0b7bc4b00C3077db9";
//const contractAddress = {FullFeatureToken address}

async function main() {
    await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
      "QEWA", 
      "QEWA1", 
      {"type":"BigNumber","hex":"0x513206"},
      18,
      "0x001345463dAa9ec237242d04c74c4f4c87AEd2E2",
      {"_isBlacklistEnabled":false,"_isBurnable":false,"_isDocumentAllowed":false,"_isMintable":false,"_isPausable":false,"_isWhitelistEnabled":false,"_isMaxAmountOfTokensSet":false,"_isForceTransferAllowed":false},
      {"type":"BigNumber","hex":"0x00"},
      "",
      "0x9254C0fcB2FaA4550B9ba582558cE1D03Ba3d05d",
    ],
  });
}

main();