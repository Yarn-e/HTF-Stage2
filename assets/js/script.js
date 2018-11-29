let sentence = [];
let noNewWords = 0;
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
