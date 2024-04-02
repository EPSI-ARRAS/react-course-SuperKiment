import { useContext, useEffect, useState } from "react";
import TourContext from "./TourContext";

export default ({ p }) => {
  const [pos, setPos] = useState(p);
  const { clickCase } = useContext(TourContext);

  return (
    <>
      <button
        className="case"
        onClick={() => {
          clickCase(pos);
        }}
      >
        button
      </button>
    </>
  );
};
