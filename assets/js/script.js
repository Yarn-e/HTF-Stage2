//Global vars
let sentence = [];
let noNewWords = 0;

/**
 * Get a word from the API.
 *
 * @returns {Promise<any>}
 *   Returns the word.
 */
function fetchWord(){
    return fetch("http://involved-htf-js-2018-prod.azurewebsites.net/api/challenge/2",{
        method: "GET",
        headers:{
            "Content-Type":  "application/json",
            "Accept": "application/json",
            "x-team" : "lawyer"
        }
    }).then(function(response){
        return response;
    }).then(data => {
        return data.json();
    }).then(jsonData => {
        return jsonData;
    })
}

$(document).ready(() => {
    getData();
});

/**
 * Poll all the words from the API.
 */
async function getData() {
    do {
        let worddata = await fetchWord();
        if (typeof sentence[worddata.index] === "undefined") {
            sentence[worddata.index] = worddata.word;
        } else {
            noNewWords++;
        }
        console.log(noNewWords);
    } while (noNewWords < 5);

    $('h2').html(sentence.join(" "));
    postSentence(sentence.join(" "));
}

/**
 * Post the right sentence to the API.
 * 
 * @param sentence
 */
function postSentence(sentence){
    console.log(sentence);
    fetch("http://involved-htf-js-2018-prod.azurewebsites.net/api/challenge/2",{
        method: "POST",
        headers:{
            "Content-Type":  "application/json",
            "Accept": "application/json",
            "x-team" : "lawyer"
        },
        body: JSON.stringify({"sentence" : sentence})
        
    }).then(function(response){
        return response;
    }).then(data => {
        console.log(data);
    })
}
