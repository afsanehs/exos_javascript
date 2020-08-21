const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let checker = books => books.every(rented => [rented] > "0");
console.log(checker(books));

console.log(Math.max.apply(Math, books.map(function(o) {return o.rented;})));


let max_value = 0;
let max_name = "";
books.forEach(function(book){ 
    if(book.rented > max_value){
        max_value = book.rented;
        max_name = book.title;
    }
});
console.log(max_name);


let min_value = 67;
let min_name = "";
books.forEach(function(book){ 
    if(book.rented < min_value){
        min_value = book.rented;
        min_name = book.title;
    }
});
console.log(min_name);

let goal = 873495
let namesearch = "";
books.forEach(function(book){ 
    if(book.id == goal){
        namesearch = book.title;
    }
});
console.log(namesearch);

function remover(IdNumber) {
    for (let i=0; i < books.length; i++){
        if (books[i].id === IdNumber){
            removed = books.splice(i,1);
        }
        return removed;
    }
}

let IdNumber = 133712;
let BookToRemove = remover(IdNumber);
console.log(`Le livre dont l'id est ${IdNumber} et intitulé ${BookToRemove[0].title} a été retiré de la BDD.`);


// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)

ordered = books.sort(function(a,b){
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
})
console.log(ordered);
