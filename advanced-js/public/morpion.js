export default morpion = () => {
  let taille = +document.getElementById("taille").value;
  console.log(taille);
  const cases = [];
  const nomsJoueurs = ["", ""];
  let tour = 0;
  const tourText = document.getElementById("tour");
  const resetBtn = document.getElementById("reset");
  tourText.style.display = "none";
  resetBtn.style.display = "none";
  let jeuGagne = false;

  document.getElementById("jouer").addEventListener("click", () => {
    taille = +document.getElementById("taille").value;

    setupMorpion();

    nomsJoueurs[0] = document.getElementById("joueur-1").value;
    nomsJoueurs[1] = document.getElementById("joueur-2").value;

    if (nomsJoueurs[0] != "" && nomsJoueurs[1] != "") {
      morpion.style.display = "block";
      document.getElementById("noms").style.display = "none";
      document.getElementById(
        "tour"
      ).textContent = `Joueur ${nomsJoueurs[0]} commence !`;
    }
  });

  resetBtn.addEventListener("click", () => {
    taille = +document.getElementById("taille").value;

    document.getElementById("table").innerHTML = "";

    setupMorpion();
  });

  function setupMorpion() {
    const morpion = document.getElementById("morpion");
    const tourText = document.getElementById("tour");
    tourText.style.display = "block";
    resetBtn.style.display = "block";
    const morpionTable = morpion.getElementsByTagName("table")[0];

    for (let x = 0; x < taille; x++) {
      const row = document.createElement("tr");
      for (let y = 0; y < taille; y++) {
        const carre = document.createElement("td");
        carre.id = `case-${x}-${y}`;
        row.appendChild(carre);
      }
      morpionTable.appendChild(row);
    }

    morpion.appendChild(morpionTable);

    for (let x = 0; x < taille; x++) {
      let temp = [];
      for (let y = 0; y < taille; y++) {
        const carre = document.getElementById(`case-${x}-${y}`);

        carre.position = {
          x: x,
          y: y,
        };
        carre.clicked = false;
        carre.clickedBy = 0;
        carre.textContent = "O";
        carre.style.color = "white";

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
    return allclicked == taille;
  }

  function isRowClicked(y) {
    let allclicked = 0;
    cases.forEach((row) => (allclicked += row[y].clicked));
    return allclicked == taille;
  }

  function isDiagClicked(sens) {
    let allclicked = 0;
    if (sens) {
      for (let i = 0; i < taille; i++) allclicked += cases[i][i].clicked;
    } else {
      for (let i = 0; i < taille; i++)
        allclicked += cases[i][taille - 1 - i].clicked;
    }
    return allclicked == taille;
  }

  function gagne(joueur) {
    document.getElementById(
      "gagne"
    ).textContent = `Joueur ${nomsJoueurs[joueur]} a gagné !!!`;
    jeuGagne = true;
  }

  function updateMorpion() {
    tour = ++tour % 2;
    tourText.textContent = `Tour : Joueur ${nomsJoueurs[tour]} !`;
    for (let i = 0; i < taille; i++) {
      if (isColumnClicked(i)) {
        let sum = 0;
        cases[i].forEach((carre) => (sum += carre.clickedBy));
        if (sum % taille == 0) {
          gagne(cases[i][0].clickedBy);
        }
      }

      if (isRowClicked(i)) {
        let sum = 0;
        cases.forEach((row) => (sum += row[i].clickedBy));
        if (sum % taille == 0) {
          gagne(cases[0][i].clickedBy);
        }
      }

      if (isDiagClicked(true)) {
        let sum = 0;
        for (let i = 0; i < taille; i++) sum += cases[i][i].clicked;
        if (sum % taille == 0) {
          gagne(cases[0][0].clickedBy);
        }
      }

      if (isDiagClicked(false)) {
        let sum = 0;
        for (let i = 0; i < taille; i++)
          sum += cases[i][taille - 1 - i].clicked;
        if (sum % taille == 0) {
          gagne(cases[2][0].clickedBy);
        }
      }
    }
  }

  // setupMorpion();
  // console.log(cases);
};
