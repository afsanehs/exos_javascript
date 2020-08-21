let seum = 0;

function AcneBot(question){
    if (question.substr(question.length - 1) === "?"){
        return "Ouais, Ouais ...";
    } else if (question === ""){
        return "t'es en PLS ?";   
    } else if (question === question.toUpperCase()){
        return "Pwa, calme-toi...";
    } else if (question.toLowerCase().includes("fortnite")){
        return "on s'fait une partie soum-soum ?";     
    } else {
        return "balek.";
    }
}

let question;
let reponse;

while (seum!== 1){
  question = prompt("Qu'est-ce tu veux?");
  reponse = AcneBot(question);
  seum=1;
}
console.log(reponse);
