const express = require("express");
const { callDictionaryApi } = require("./fetchDictionaryResult");
const { processDictionaryResult } = require("./processResult");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    console.log("API is Ok");
    res.send({
        status: "API is up and running"
    })
});

app.get("/dictionary/:word", async (req, res) => {
    try {
        const SearchWord = req.params.word;
        const dictionaryApiResponse = await callDictionaryApi(SearchWord);
        if (dictionaryApiResponse?.length) {
            res.send(processDictionaryResult(...dictionaryApiResponse));
            return 0
        }
        res.send(dictionaryApiResponse);
        return 0
    } catch (e) {
        res.status(500).send({
            "error": e.message
        });
    }
});

module.exports = app;