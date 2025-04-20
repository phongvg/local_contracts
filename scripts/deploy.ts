import { ethers } from "hardhat";
import { MockUSDT } from "../typechain-types/contracts/MockUSDT";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Factory = await ethers.getContractFactory("MockUSDT");
  const token = (await Factory.deploy()) as MockUSDT;
  await token.waitForDeployment();

  console.log("MockUSDT deployed at:", await token.getAddress());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
