import Check from "./Check";

export default ({ checks, supprimerAction }) => {
  return checks.map((element, index) => {
    console.log(element);
    return (
      <Check
        key={index}
        index={element.index}
        supprimerAction={supprimerAction}
      />
    );
  });
};
