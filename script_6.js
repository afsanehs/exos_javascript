
const seq1 = "CCGUCGUUGCGCUACAGC";
const seq2 = "CCUCGCCGGUACUUCUCG";

function TranslateRNAToProteinName(sequence){
    let ArRNA = sequence.match(/.{1,3}/g);
    console.log(ArRNA);
    for(let i = 0; i < ArRNA.length ; i ++ ){
        ArRNA[i] = MatchRNAWithName(ArRNA[i]);
    }
    return ArRNA.join("-");
}


function MatchRNAWithName(RNA){
    switch (RNA){
    case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
        return "Sérine";
    case "CCU": case "CCC": case "CCA": case "CCG" :
        return "Proline";
    case "UUA": case "UUG": case "CUU": case "CUC": case "CUA": case "CUG" :
        return "Leucine";
    case "UUU": case "UUC" :
        return "Phénylalanine";
    case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
        return "Arginine";
    case "UAU": case "UAC" :
        return "Tyrosine";
    default:
        console.log("Code ARN inconnu");
        break;
    }
}


let result = TranslateRNAToProteinName(seq1);
console.log(`La traduction de la séquence 1 ${seq1} est :`)
console.log(result);


result = TranslateRNAToProteinName(seq2);
console.log(`La traduction de la séquence 2 ${seq2} est :`)
console.log(result);
