import { ethers } from "hardhat";

async function main() {
  const [sender] = await ethers.getSigners();
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Điền sau khi deploy

  const token = await ethers.getContractAt("MockUSDT", tokenAddress);
  const to = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Điền địa chỉ MetaMask
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
