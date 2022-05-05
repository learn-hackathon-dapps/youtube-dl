const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YoutubeDownLoader", function () {
  let Contract, contract;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    Contract = await ethers.getContractFactory("YoutubeDownLoader");
    contract = await Contract.deploy();
    await contract.deployed();
  })

  it("Should upload video", async function () {
    const tx = await contract.createVideo("RickRoll","iamastringCID");
    await tx.wait();
    const video = await contract.searchVideo("RickRoll");
    expect(video.id).to.equal("RickRoll");
    expect(video.contentCID).to.equal("iamastringCID");
  })

  it("Search video empty string", async function () {
    const video = await contract.searchVideo("");
    expect(video.id).to.equal('');
    expect(video.author).to.equal('0x0000000000000000000000000000000000000000');
    expect(video.contentCID).to.equal('');
  })

  it("Search video which does not exist", async function () {
    const video = await contract.searchVideo("Not_Exist");
    expect(video.id).to.equal('');
    expect(video.author).to.equal('0x0000000000000000000000000000000000000000');
    expect(video.contentCID).to.equal('');
  })
});

