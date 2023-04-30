import { useState } from "react";
import { Level4Modal } from "./Level4Modal";
import { Level4Input } from "./Level4Input";
import { Level4Output } from "./Level4Output";
import "./Level4.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";

export const Level4 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <NavigationTitle
        level="4"
        right_arrow_dest="/level-4"
        left_arrow_dest="/level-3"
      />
      {isModalShown && <Level4Modal hideModal={hideModalHandler} />}
      <Level4Input />
      <Level4Output />
    </>
  );
};
