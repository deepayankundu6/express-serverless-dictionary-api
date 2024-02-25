const fetch = require("node-fetch");

const callDictionaryApi = async (word) => {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const response = await fetch(`${process.env.DICTIONARY_API_DOMAIN}/entries/en/${word}`, requestOptions);
        return await response.json();
    }catch (error){
        console.log("Error occured while calling the dictionary api.")
        throw new Error("Some error occured: " + error.message);
    }

}
module.exports = { callDictionaryApi }