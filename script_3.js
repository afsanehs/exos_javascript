n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

output = ""

var rows=n;
string="";
for(var i=1;i<=rows;i++) {
    for(var j=1;j<=i;j++){
        document.write(" # ");
        string = string + " # ";
    }
    document.write("<br/>");
    string = string + "\n";
}

console.log(string);

