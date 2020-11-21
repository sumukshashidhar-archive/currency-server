const mongooseLoader = require("./mongodb");
const expressLoader = require("./express");

module.exports = {
    load: async (app) => {
        // connect to the mongodb database
        mongooseLoader.connectDB();

        // start node server
        app = await expressLoader.loader(app);

    }
}