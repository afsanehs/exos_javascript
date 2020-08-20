n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

var rows=n;
for(var i=1;i<=rows;i++)
{
for(var j=1;j<=i;j++)
{
document.write(" # ");
}
document.write("<br/>");
}


console.log(`voilà ce que tu as tapé : ${n}`);
