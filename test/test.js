const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YoutubeDownLoader", function () {
  let Contract, contract;
  let owner

  //beforeEach will run before each test
  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    Contract = await ethers.getContractFactory("YoutubeDownLoader");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Video record exist", async function () {
    const newVideo = await contract.createVideo("sample", "bafybeic7thrieovizazkmhy32swliuc2wdvfyrc54wdq657f3pub5f52pe")
    const video = await contract.searchVideo("sample");
    expect(await video.id).to.equal('sample');
    expect(await video.author).to.equal(owner.address);
    expect(await video.contentCID).to.equal('bafybeic7thrieovizazkmhy32swliuc2wdvfyrc54wdq657f3pub5f52pe');
  });

  it("Video record does not exist", async function () {
    const video = await contract.searchVideo("RickRoll-Key");
    expect(await video.id).to.equal('');
    expect(await video.author).to.equal('0x0000000000000000000000000000000000000000');
    expect(await video.contentCID).to.equal('');
  });
});