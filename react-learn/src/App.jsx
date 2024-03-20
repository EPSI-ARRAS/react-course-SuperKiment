import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [nombreCoches, setNombreCoches] = useState();
  const [checks, setChecks] = useState([]);

  const Check = ({ index }) => {
    return (
      <div className="check">
        <div className="two-col">
          <div>
            <input
              type="checkbox"
              name={"check-" + { index }}
              className="form-check-input"
            />
            <label htmlFor={"check-" + index}>Element {index}</label>
          </div>
          <div className="buttons">
            <button className="btn btn-primary">
              <i className="fa-solid fa-trash"></i>
            </button>
            <button className="btn btn-primary">
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {});

  return (
    <div className="todolist">
      <h1>TodoList :</h1>

      <div className="two-col">
        <div style={{ textAlign: "left" }}>
          <button className="btn btn-primary" style={{backgroundColor:"#626ff1", color:"white"}}>Ajouter +</button>
        </div>
        <div className="buttons">
          <select name="" id="" className="form-select" style={{backgroundColor: "#cccede"}}>
            <option>Toutes</option>
          </select>
        </div>
      </div>

      <div className="checkboxes">
        <Check index={1} />
        <Check index={2} />
        <Check index={3} />
        <Check index={4} />
      </div>
    </div>
  );
}
export default App;
