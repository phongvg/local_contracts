import { ethers } from "hardhat";

async function main() {
  const tokenAddress = "0x73bFE136fEba2c73F441605752b2B8CAAB6843Ec";
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
