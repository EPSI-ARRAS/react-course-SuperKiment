export default ({ questionData, reponse }) => {
  return (
    <div
      style={{
        backgroundColor: reponse == questionData.reponse ? "green" : "red",
        borderRadius:10
      }}
    >
      <p>Question : {questionData.question} </p>
    </div>
  );
};
