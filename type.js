//PRIMITIFS
const string = "chaine de caractères"; // "", "j'aime le poulet", "chaine " + "de " + "caractères", "567"
const number = 2; // 1 + 1, 1.56, 14e7
const boolean = true; // false
const _null = null;
let undefined;

// NON-PRIMITIFS
const array = ["poulet", "riz", "avoine", 4, false, ["pompes", "tractions"]];
const object = { nom: "oriano", age: 153, developpeur: true };

// BONUS
const _function = () =>
  console.log(
    typeof string,
    typeof number,
    typeof boolean,
    typeof _null,
    typeof undefined,
    typeof array,
    typeof object,
    typeof _function
  );
_function();
