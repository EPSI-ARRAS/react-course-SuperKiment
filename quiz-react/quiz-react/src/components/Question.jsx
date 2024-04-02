import { useContext, useEffect, useState } from "react";
import { ScoreContext } from "./ScoreContext";

export default ({ dataQuestion }) => {
  const { bonneReponse, questionSuivante } = useContext(ScoreContext);


  return (
    <>
      <p>Question : {dataQuestion.question}</p>
      {dataQuestion.propositions.map((proposition, index) => {
        return (
          <div key={index}>
            <button
              style={{ margin: "10px" }}
              onClick={() => {
                console.log("click prop n°" + index);
                if (dataQuestion.reponse == index) bonneReponse();
                questionSuivante(index);
              }}
            >
              {proposition}
            </button>
          </div>
        );
      })}
    </>
  );
};
