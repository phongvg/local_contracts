import { ethers } from "hardhat";

async function main() {
  const [sender] = await ethers.getSigners();
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const token = await ethers.getContractAt("MockUSDT", tokenAddress);
  const to = "0xA17BD2a15fc0710302aDcAD291E1adD8FD332031";
  const amount = ethers.parseUnits("1000", 6); // 1000 mUSDT

  const tokenWithSender = token.connect(sender);
  const tx = await tokenWithSender.mint(to, amount);
  await tx.wait();

  console.log(`Minted 1000 mUSDT to ${to}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
