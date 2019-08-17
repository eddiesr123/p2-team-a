const axios = require("axios");
var fs = require("fs");

// create user
const makeUser = async body => {
  await axios.post("http://localhost:8080/users/signup", body);
};
const body = { email: "warehouse@evil.com", password: "pass" };
makeUser(body);

/* add a few items to database */

// get a list of image files
var files = fs.readdirSync("./src/images/alphas");
console.log(files);

// for each image file, create an object with the data for that item
const make = async files => {
  itemMap = {};
  for (let file of files) {
    if (!file.includes(".png")) continue;
    let myItem = {
      name: "",
      price: null,
      imgPath: "./src/images/alphas/",
      thumbnailPath: "./src/images/thumbnails/",
      clothingType: null,
      user: null
    };

    myItem.imgPath += file;
    myItem.thumbnailPath += file;
    myItem.name = file
      .substring(0, file.length - 4)
      .split("-")
      .join(" ");
    // Place switch below

    switch (myItem.name) {
      case "gloves male":
        myItem.name = "Super Gloves"; break;
      case "gloves female":
        myItem.name = "Gloves of Power"; break;
      case "bodysuit red male":
        myItem.name = "Suit of Flames"; break;
      case "mask red male":
        myItem.name = "Mask of Fury"; break;
      case "bodysuit grey male":
        myItem.name = "Suit of Ashes"; break;
      case "mask grey male":
        myItem.name = "Mask of Ashes"; break;
      case "bodysuit blue male":
        myItem.name = "The Blue Flyer"; break;
      case "mask blue male":
        myItem.name = "SkyMask of Blue"; break;
      case "bodysuit green female":
        myItem.name = "Green Cobra Suit"; break;
      case "bodysuit green male":
        myItem.name = "Green Mamba Suit"; break;
      case "mask green male":
        myItem.name = "Green Mamba Mask"; break;
      case "mask green female":
        myItem.name = "Green Cobra Mask"; break;
      case "bodysuit blue female":
        myItem.name = "Suit of the Blue Eagle"; break;
      case "mask blue female":
        myItem.name = "Blue Eagle Mask"; break;
      case "bodysuit black female":
        myItem.name = "The Black Suit"; break;
      case "mask black female":
        myItem.name = "The Black Mask"; break;
      case "bodysuit red female":
        myItem.name = "Red Rage Suit"; break;
      case "mask red female":
        myItem.name = "Red Rage Mask"; break;
    }

    itemMap = {
        ...itemMap,
        [myItem.imgPath]: [`require('${myItem.imgPath}')`, `require('${myItem.thumbnailPath}')`]
    }

    if (file.includes("suit")) {
      myItem.clothingType = "suit";
      myItem.price = 80.0;
    }
    if (file.includes("mask")) {
      myItem.clothingType = "mask";
      myItem.price = 20.0;
    }
    if (file.includes("gloves")) {
      myItem.clothingType = "gloves";
      myItem.price = 300.0;
    }
    console.log(myItem);
    await axios.post('http://localhost:8080/items/', myItem)
  }
  console.log(itemMap);
};

itemMap = make(files);

// output item map to load files on startup
console.log(itemMap);
