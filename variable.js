// Variable modifiable
let change = "bonjour";
change = "bonsoir";

// Variable constante
const constant = "poulet";

// Portée globale
const global = "à l'air libre";

const fonction = () => {
  // Portée locale
  const local = "au chaud";
  console.log(local);

  console.log(global);
};

fonction();
// console.log(local);
console.log(global);
