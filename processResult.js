function processResult(partOfSpeech, definitions) {
    let result = {};
    let defination = definitions[0]?.definition;
    let example = definitions[0]?.example
    if(partOfSpeech){
       let tempJson = {};
       if(defination){
        tempJson["Defination"] = defination
       }
       if(example){
        tempJson["Example"] = example
       }
       result[partOfSpeech] = tempJson;
    };
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