/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// 1. Create a variable to hold an array of NFTs (objects)
let mintedNFTs = [];

// 2. mintNFT function creates an NFT object and stores it in mintedNFTs
function mintNFT(name, description, imageURL) {
  // Create an NFT object with metadata
  const nft = {
    name: name,
    description: description,
    imageURL: imageURL,
  };

  // Add the NFT object to the mintedNFTs array
  mintedNFTs.push(nft);
}

// 3. listNFTs function iterates through mintedNFTs and logs metadata
function listNFTs() {
  console.log("Your minted NFTs:");
  for (const nft of mintedNFTs) {
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image URL:", nft.imageURL);
    console.log("---");
  }
}

// 4. getTotalSupply function returns the length of the mintedNFTs array
function getTotalSupply() {
  return mintedNFTs.length;
}

// Example usage of the functions
mintNFT("AMUL", "A great milk company ", "https://example.com/amul.png");
mintNFT("Pixelated Punk", "A digital rebel from the 8-bit era", "https://example.com/punk.gif");

listNFTs();

const totalNFTs = getTotalSupply();
console.log("Total NFTs minted:", totalNFTs);
