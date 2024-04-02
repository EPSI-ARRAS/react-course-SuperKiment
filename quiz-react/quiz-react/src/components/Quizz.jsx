import { useEffect, useState } from "react";
import Question from "./Question";
import { ScoreContext } from "./ScoreContext";
import Reponse from "./Reponse";

export default ({ dataQuizz }) => {
  const [numeroQuestion, setNumeroQuestion] = useState(0);
  const [score, setScore] = useState(0);
  //   const [questions, setQuestions] = useState([]);
  const [temps, setTemps] = useState(dataQuizz.questions[0].temps);
  const [reponses, setReponses] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (temps > 0 && numeroQuestion < dataQuizz.questions.length) {
        setTemps((prevTemps) => prevTemps - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //     setQuestion(
  //     );
  //   }, [numeroQuestion]);
  //   useEffect(() => {
  //     const quests = []
  //     for (let i=0; i<dataQuizz.questions.length; i++) {
  //         quests.push(
  //             <div>
  //                 <Question dataQuestion={dataQuizz.questions[numeroQuestion]} />
  //             </div>
  //         )
  //     }
  //   }, []);

  const bonneReponse = () => {
    setScore(score + 1);
  };

  const questionSuivante = (reponseIndex) => {
    setReponses([...reponses, reponseIndex]);
    setNumeroQuestion(numeroQuestion + 1);
    if (numeroQuestion + 1 < dataQuizz.questions.length)
      setTemps(dataQuizz.questions[numeroQuestion + 1].temps);
  };

  if (temps == 0) questionSuivante(null);

  return (
    <>
      <ScoreContext.Provider value={{ score, bonneReponse, questionSuivante }}>
        <h1>Quizz {dataQuizz.nom}</h1>
        {dataQuizz.questions.length > numeroQuestion ? (
          <div>
            <p>Temps restant : {temps}s</p>

            <p>Nombre de questions : {dataQuizz.questions.length}</p>
            <p>Question n°{numeroQuestion + 1}</p>
            <Question dataQuestion={dataQuizz.questions[numeroQuestion]} />
          </div>
        ) : (
          <div>
            <h1>Fin !</h1>
            <h2>Score : {score} </h2>
            {reponses.map((reponse, index) => {
              return (
                <Reponse
                  key={index}
                  questionData={dataQuizz.questions[index]}
                  reponse={reponse}
                />
              );
            })}
          </div>
        )}
      </ScoreContext.Provider>
    </>
  );
};
