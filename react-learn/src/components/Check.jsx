import { useState } from "react";
import Boutton from "./Boutton";

export default ({ index, supprimerAction }) => {
  const [modification, setModification] = useState(false);
  const [text, setText] = useState("Element " + index);

  return (
    <div className="check">
      <div className="two-col">
        <div>
          <input
            type="checkbox"
            name={"check-" + { index }}
            className="form-check-input"
          />

          <label htmlFor={"check-" + index}>
            {!modification ? (
              <>{text}</>
            ) : (
              <>
                <input
                  style={{ width: "200px" }}
                  type="text"
                  name={"modif-" + index}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </>
            )}
          </label>
        </div>
        <div className="buttons">
          <Boutton
            label={<i className="fa-solid fa-trash"></i>}
            textColor={"black"}
            backgroundColor={"#efefef"}
            action={() => {
              supprimerAction(index);
            }}
          />

          <Boutton
            label={
              <i
                className={"fa-solid " + (modification ? "fa-check" : "fa-pen")}
              ></i>
            }
            textColor={"black"}
            backgroundColor={"#efefef"}
            action={() => setModification(!modification)}
          />
        </div>
      </div>
    </div>
  );
};
