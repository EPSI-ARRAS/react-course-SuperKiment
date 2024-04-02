import { createContext, useState } from "react";
import "./App.css";
import Quizz from "./components/Quizz";

function App() {
  const [commencer, setCommencer] = useState(true);

  const quizzs = [
    {
      questions: [
        {
          question: "salut",
          propositions: ["1", "2", "3", "4"],
          reponse: 2,
          temps: 20,
        },{
          question: "coucou",
          propositions: ["1", "2", "3", "4"],
          reponse: 2,
          temps: 10,
        },{
          question: "lezgo",
          propositions: ["1", "2", "3", "4"],
          reponse: 2,
          temps: 5,
        },{
          question: "wouw",
          propositions: ["1", "2", "3", "4", "4", "4"],
          reponse: 2,
          temps: 20,
        },{
          question: "salut",
          propositions: ["1", "2", "3", "4"],
          reponse: 2,
          temps: 20,
        },{
          question: "salut",
          propositions: ["1", "2", "3", "4"],
          reponse: 2,
          temps: 20,
        },{
          question: "salut",
          propositions: ["1", "2", "3", "4"],
          reponse: 2,
          temps: 20,
        },{
          question: "derniere",
          propositions: ["1", "2"],
          reponse: 2,
          temps: 20,
        },
      ],
      nom: "premier quizz",
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
