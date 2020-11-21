const express = require("express");
const loader = require("./loaders/index")


let app = express();
require("dotenv").config();

// run the loader to load all modules into the memory
app = loader.load(app)

