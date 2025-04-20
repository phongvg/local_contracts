import { ethers } from "hardhat";

async function main() {
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const userAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

  const token = await ethers.getContractAt("MockUSDT", tokenAddress);
  const balance = await token.balanceOf(userAddress);

  console.log(
    `Số dư của ${userAddress}:`,
    ethers.formatUnits(balance, 6),
    "mUSDT"
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
