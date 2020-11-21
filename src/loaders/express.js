const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const path = require('path')
require('dotenv').config()
module.exports = {
    loader: async function(app) {
        /*
        * Main Loader to Load all our express modules into memory
        * Returns a promise, which resolves the express app variable
        * */
        return new Promise(function(resolve, reject) {

            // start the server
            app.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", (req, res) => {
                console.info("Server Started")
            })

            // user parser to parse into json
            app.use(bodyParser.urlencoded({extended: true}));


            // cors
            app.use(cors());

            // route and access logging
            const accessLogStream = rfs.createStream('access.log', {
                interval: '1d', // rotate daily
                path: path.join(__dirname, '../logs')
            });

            app.use(morgan('combined', { stream: accessLogStream }))

            require("./../routes/index")(app);

            resolve(app)
        })
    }
}