import { useEffect, useState } from "react";
import Check from "./Check";
import BtnAjouter from "./BtnAjouter";
import Select from "./Select";
import CheckBoxes from "./CheckBoxes";

export default () => {
  const [checks, setChecks] = useState([]);
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    const temp = [];
    let comptTemp = 0;

    for (let i = 0; i < 3; i++) {
      temp.push({
        index: i,
        key: i,
      });
      comptTemp++;
    }

    setCompteur(comptTemp);

    setChecks(temp);
  }, []);

  const supprimerElement = (id) => {
    const temp = [];

    console.log(compteur);
    for (let i = 0; i < checks.length; i++) {
      console.log("bam ", checks[i].index);
      console.log("boum ", id);
      if (checks[i].index != id) {
        temp.push(checks[i]);
      }
    }

    setChecks(temp);
  };

  const ajouterElement = () => {
    const temp = {
      index: compteur,
      key: compteur,
    };

    setCompteur(compteur + 1);

    setChecks([...checks, temp]);
  };

  return (
    <div className="todolist">
      <h1>TodoList :</h1>

      <div className="two-col">
        <div style={{ textAlign: "left" }}>
          <BtnAjouter action={ajouterElement} />
        </div>
        <div className="buttons">
          <Select />
        </div>
      </div>

      <CheckBoxes checks={checks} supprimerAction={supprimerElement} />
    </div>
  );
};
