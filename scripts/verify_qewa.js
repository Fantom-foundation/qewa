const { ethers } = require("hardhat");

const etherToWei = (n) => {
    return ethers.utils.parseEther(n.toString())
  };

const TOTAL_SUPPLY = etherToWei(1000_000);
const contractAddress = "0xbD0D9d57F057FD5e22C7617E038501E4CE2eda98";

async function main() {
    await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
        "QEWA TOKEN", 
        "QEWA", 
        TOTAL_SUPPLY.toString(),
        18,
        "0xE24199e4B4ECE5ef47db77bBD55db0A6AE0D83EB",
        [true, true, true, true, true, true, true, true],
        1000,
        "qewa.com",
        "0x94Fe3A104E4eBa7b795E06347bcD1912ED87CE9c",
    ],
  });
}

main();