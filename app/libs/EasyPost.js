require("dotenv").config()

const EasyPost = require("@easypost/api");

const apiKey = process.env.TEST_KEY

let api = new EasyPost(apiKey);

module.exports = {
    EasyPost,
    apiKey,
    api
}
