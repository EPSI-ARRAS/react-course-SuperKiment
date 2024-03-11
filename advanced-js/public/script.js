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

const cases = [];

const nomsJoueurs = ["", ""];

let tour = 0;
const tourText = document.getElementById("tour");
let jeuGagne = false;

function setupMorpion() {
  document.getElementById("morpion").style.display = "none";

  document.getElementById("jouer").addEventListener("click", () => {
    nomsJoueurs[0] = document.getElementById("joueur-1").value;
    nomsJoueurs[1] = document.getElementById("joueur-2").value;

    if (nomsJoueurs[0] != "" && nomsJoueurs[1] != "") {
      document.getElementById("morpion").style.display = "block";
      document.getElementById("noms").style.display = "none";
      document.getElementById("tour").textContent = `Joueur ${nomsJoueurs[0]} commence !`;
    }
  });

  for (let x = 0; x < 3; x++) {
    let temp = [];
    for (let y = 0; y < 3; y++) {
      const carre = document.getElementById(`case-${x}-${y}`);

      carre.position = {
        x: x,
        y: y,
      };
      carre.clicked = false;
      carre.clickedBy = 0;
      carre.textContent = "O";
      carre.style.color = "lightgrey";

      carre.addEventListener("click", () => {
        if (!carre.clicked && !jeuGagne) {
          carre.textContent = tour == 0 ? "X" : "O";
          carre.clicked = true;
          carre.clickedBy = tour;
          carre.style.color = "black";

          updateMorpion();
        }
      });
      temp.push(carre);
    }
    cases.push(temp);
  }
}

function isColumnClicked(x) {
  let allclicked = 0;
  cases[x].forEach((carre) => (allclicked += carre.clicked));
  return allclicked == 3;
}

function isRowClicked(y) {
  let allclicked = 0;
  cases.forEach((row) => (allclicked += row[y].clicked));
  return allclicked == 3;
}

function isDiagClicked(sens) {
  let allclicked = 0;
  if (sens) {
    for (let i = 0; i < 3; i++) allclicked += cases[i][i].clicked;
  } else {
    for (let i = 0; i < 3; i++) allclicked += cases[i][2 - i].clicked;
  }
  return allclicked == 3;
}

function gagne(joueur) {
  document.getElementById("gagne").textContent = `Joueur ${nomsJoueurs[joueur]} a gagné !!!`;
  jeuGagne = true;
}

function updateMorpion() {
  tour = ++tour % 2;
  tourText.textContent = `Tour : Joueur ${nomsJoueurs[tour]} !`;
  for (let i = 0; i < 3; i++) {
    if (isColumnClicked(i)) {
      let sum = 0;
      cases[i].forEach((carre) => (sum += carre.clickedBy));
      if (sum % 3 == 0) {
        gagne(cases[i][0].clickedBy);
      }
    }

    if (isRowClicked(i)) {
      let sum = 0;
      cases.forEach((row) => (sum += row[i].clickedBy));
      if (sum % 3 == 0) {
        gagne(cases[0][i].clickedBy);
      }
    }

    if (isDiagClicked(true)) {
      let sum = 0;
      for (let i = 0; i < 3; i++) sum += cases[i][i].clicked;
      if (sum % 3 == 0) {
        gagne(cases[0][0].clickedBy);
      }
    }

    if (isDiagClicked(false)) {
      let sum = 0;
      for (let i = 0; i < 3; i++) sum += cases[i][2 - i].clicked;
      if (sum % 3 == 0) {
        gagne(cases[2][0].clickedBy);
      }
    }
  }
}

setupMorpion();
console.log(cases);
