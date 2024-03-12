/*
function jey(couco, salut, ...others) {
  console.log(couco);
  console.log(salut);
  console.log(others);
}

jey("elz go", "djezio", "pfore", "yeepii");

const fruits = {
  ukouko: 5,
  ukouka: 5,
  ukougk: 5,
  ukouoa: 5,
};

const { ukougk: nice } = fruits;
console.log(`valeur de l'objet : ${nice} !`);

if (!undefined && !null && !"" && !0 && !NaN) {
  console.log("tout est faux");
}
console.log(!undefined, !null, !"", !0, !NaN);

const rien = "";

const jeVeuxUnNom = rien || "Pas de nom";
console.log(jeVeuxUnNom);

console.log(
  jeVeuxUnNom == "Pas de nom"
    ? "pas de nom pour ce mec"
    : "on atteindra jamais ce string"
);

const ajouteUnBonjour = (nom) => `Bonjour, ${nom} !`;

console.log(ajouteUnBonjour`John`);

const fruitsArray = ["concombre", "pasteque", "euuuh jsp"];

fruitsArray.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});


const notes = [10, 6, 13, 18];
const notesTab = notes.map((note) => note + 2);
console.log(notesTab);
const caPasseOuCaCasse = notes.map((note) => note >= 10);
console.log(caPasseOuCaCasse);

let body = "rien";

const setBody = async () => {
  body = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      body = json.body;
      console.log("got value in body");
    })
    .catch((e) => console.log(e));
};
setBody();

// while (body == "rien") console.log(body);

//   fetch("https://superkiment.fr/?page=randonant&parcours=passravitaillement")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((e) => console.log(e))

function filter(array, value) {
  return array.map((val) => (val == value ? null : val));
}

console.log(filter(fruitsArray, "concombre"));

for (let key in fruits) {
  const val = fruits[key];
  console.log(`${key} : ${val}`);
}
*/

import morpion from "./morpion";

//REACT
function setupReact() {
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
}
setupReact();


//MORPION
morpion()