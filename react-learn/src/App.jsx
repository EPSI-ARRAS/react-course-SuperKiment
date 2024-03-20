import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";
import Morpion from "./components/Morpion";
import Boutton from "./components/Boutton";

function App() {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages([<TodoList />, <Morpion />]);
  }, []);

  const changerPage = () => {
    setPage((page + 1) % pages.length);
  };

  return (
    <>
      <Boutton
        backgroundColor={"#626ff1"}
        textColor={"white"}
        action={changerPage}
        label={"Changer de page"}
      />
      {pages[page]}
    </>
  );
}
export default App;
