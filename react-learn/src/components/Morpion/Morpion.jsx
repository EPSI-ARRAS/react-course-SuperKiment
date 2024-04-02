import { useEffect, useState } from "react";
import Case from "./Case";
import TourContext from "./TourContext";

export default () => {
  const [cases, setCases] = useState([]);
  const [tour, setTour] = useState(0);
  const [clickTabl, setClickTabl] = useState([]);
  const [gagne, setGagne] = useState(false);

  const combinaisons = [
    [
      { y: 0, x: 0 },
      { y: 0, x: 1 },
      { y: 0, x: 2 },
    ],
    [
      { y: 1, x: 0 },
      { y: 1, x: 1 },
      { y: 1, x: 2 },
    ],
    [
      { y: 2, x: 0 },
      { y: 2, x: 1 },
      { y: 2, x: 2 },
    ],
    [
      { y: 0, x: 0 },
      { y: 1, x: 0 },
      { y: 2, x: 0 },
    ],
    [
      { y: 0, x: 1 },
      { y: 1, x: 1 },
      { y: 2, x: 1 },
    ],
    [
      { y: 0, x: 2 },
      { y: 1, x: 2 },
      { y: 2, x: 2 },
    ],
    [
      { y: 0, x: 0 },
      { y: 1, x: 1 },
      { y: 2, x: 2 },
    ],
    [
      { y: 2, x: 0 },
      { y: 1, x: 1 },
      { y: 0, x: 2 },
    ],
  ];

  const passerTour = () => {
    setTour((tour + 1) % 2);
  };

  const clickCase = (pos) => {
    if (clickTabl[pos.x][pos.y] < 0) {
      const temp = clickTabl;
      temp[pos.x][pos.y] = tour;
      setClickTabl(temp);

      for (let i in combinaisons) {
        const combinaison = combinaisons[i];
        // console.log(combinaisons[i]);
        if (
          clickTabl[combinaison[0].x][combinaison[0].y] ==
            clickTabl[combinaison[1].x][combinaison[1].y] &&
          clickTabl[combinaison[0].x][combinaison[0].y] ==
            clickTabl[combinaison[2].x][combinaison[2].y] &&
          clickTabl[combinaison[0].x][combinaison[0].y] >= 0
        ) {
          console.log(`Joueur ${tour + 1} a gagné !!`);
          setGagne(true)
          return;
        }
      }

      passerTour();
    }
  };

  useEffect(() => {
    const res = [];
    const resTabl = [];
    for (let x = 0; x < 3; x++) {
      const temp = [];
      const tempTabl = [];
      for (let y = 0; y < 3; y++) {
        temp.push(<Case p={{ x: x, y: y }} tour={tour} setTour={setTour} />);
        tempTabl.push(-1);
      }
      res.push(temp);
      resTabl.push(tempTabl);
    }

    setCases(res);
    setClickTabl(resTabl);
  }, []);

  const AfficherCases = () => {
    let x = 0;
    let y = 0;
    return cases.map((btn3) => (
      <div
        key={"x" + x++ + (y = 0)}
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        {btn3.map((btn) => {
          return (
            <div
              style={{
                flex: 1,
                display: "flex",
                width: "100%",
                backgroundColor:
                  clickTabl[x][y] < 0
                    ? "white"
                    : clickTabl[x][y] == 0
                    ? "coral"
                    : "lightblue",
              }}
              key={"y" + y++}
            >
              {btn}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div>
      <h1>Morpion</h1>
      <TourContext.Provider value={{ tour, passerTour, clickCase }}>
        {gagne ? (
          <h1>Le joueur {tour + 1} a gagné !</h1>
        ) : (
          <p>Tour du joueur {tour + 1}</p>
        )}
        <AfficherCases />
      </TourContext.Provider>
    </div>
  );
};
