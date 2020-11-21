const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    walletID: {type: String, required: true},
    balance: {type: Number, required: true},
    transaction: {type: Array, required: true},
});

module.exports = mongoose.model("wallet", walletSchema);