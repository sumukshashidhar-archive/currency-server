const mongoose = require("mongoose")
require('dotenv').config()
module.exports = {

    connectDB: () => {
        mongoose
            .connect(process.env.mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
            .then(() => console.info("MongoDB Connected"))
            .catch((err) => console.error(err));
    }
}