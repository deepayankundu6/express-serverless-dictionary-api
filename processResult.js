function processResult(partOfSpeech, definitions) {
    let result = {};
    if (partOfSpeech && definitions) {
        let temp = [];
        for (definition of definitions) {
            let tempObj = {}
            if (definition.hasOwnProperty("definition")) {
                tempObj["Definition"] = definition.definition
            }
            if (definition.hasOwnProperty("example")) {
                tempObj["Example"] = definition.example
            }
            temp.push(tempObj);
        }
        result[partOfSpeech] = temp;
    }
    
    return result;
}

const processDictionaryResult = (response) => {
    let result = {};
    result["Word"] = result.word;
    result["Synonyms"] = [];
    result["Antonyms"] = [];
    result["Meanings"] = [];
    response.meanings.map(eachResult => {
        result["Synonyms"] = result["Synonyms"].concat(eachResult?.synonyms);
        result["Antonyms"] = result["Antonyms"].concat(eachResult?.antonyms);
        result["Meanings"].push(processResult(eachResult.partOfSpeech, eachResult.definitions))
    })
    return result;
}
module.exports = { processDictionaryResult };