import { ethers } from "hardhat";

async function main() {
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const fromAddress = "0xA17BD2a15fc0710302aDcAD291E1adD8FD332031";
  const toAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
  const amount = ethers.parseUnits("100", 6);

  const [signer] = await ethers.getSigners();

  const token = await ethers.getContractAt("MockUSDT", tokenAddress);
  const tokenWithSigner = token.connect(signer);

  const tx = await tokenWithSigner.transfer(toAddress, amount);
  await tx.wait();

  console.log(`✅ Đã chuyển từ ${fromAddress} tới ${toAddress}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
