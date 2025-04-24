import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const to = "0xA17BD2a15fc0710302aDcAD291E1adD8FD332031";
  const tx = await signer.sendTransaction({
    to,
    value: ethers.parseEther("10"),
  });
  await tx.wait();

  console.log(`✅ Đã gửi 10 ETH test tới ${to}`);
}

main();
