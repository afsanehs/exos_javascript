n = prompt("De quel nombre veux-tu calculer la factorielle ?");

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

console.log(`voilà ce que tu as tapé : ${n}`);

alert(`Factorielle de ${n} est égal à ${factorial(n)} !`);