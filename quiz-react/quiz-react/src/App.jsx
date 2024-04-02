import { createContext, useState } from "react";
import "./App.css";
import Quizz from "./components/Quizz";

function App() {
  const [commencer, setCommencer] = useState(false);

  const quizzs = [
    {
      questions: [
        {
          question: "Quelle est la capitale de la France ?",
          propositions: ["Londres", "Berlin", "Paris", "Madrid"],
          reponse: 2,
          temps: 20,
        },
        {
          question: "Quel est le plus grand océan du monde ?",
          propositions: ["Atlantique", "Indien", "Arctique", "Pacifique"],
          reponse: 3,
          temps: 15,
        },
        {
          question: "Quelle est la couleur du ciel par temps clair ?",
          propositions: ["Vert", "Bleu", "Rouge", "Jaune"],
          reponse: 1,
          temps: 10,
        },
        {
          question: "Quelle est la planète la plus proche du Soleil ?",
          propositions: ["Terre", "Mercure", "Vénus", "Mars"],
          reponse: 1,
          temps: 20,
        },
        {
          question: "Combien de continents y a-t-il sur Terre ?",
          propositions: ["4", "5", "6", "7"],
          reponse: 3,
          temps: 25,
        },
      ],
      nom: "Mon premier quizz",
    },
    {
      questions: [
        {
          question: "salut",
          propositions: ["1", "2", "3", "4"],
          reponse: 3,
          temps: 20,
        },
      ],
      nom: "second quizz",
    },
  ];

  return (
    <>
      {commencer ? (
        <Quizz dataQuizz={quizzs[0]} />
      ) : (
        <>
          <h1>Quizz</h1>
          <button onClick={() => setCommencer(true)}>Commencer !</button>
        </>
      )}
    </>
  );
}

export default App;
