let sentence = [];
function fetchWord(){
    fetch("http://involved-htf-js-2018-prod.azurewebsites.net/api/challenge/2",{
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
    }).then(jsondata => {
        sentence[jsondata.index] = jsondata.word;
    })
}

$(document).ready(() => {
    /*
    do{
        fetchWord();
    } while(sentence.length < 10);
    console.log(sentence);
    */
    for(let i = 0; i <= 100; i++){
        fetchWord();
    }
    
    setTimeout(() => {
        postSentence(sentence.join(" "))
    }, 2000);
    
})


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
