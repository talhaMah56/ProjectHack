import { useState } from "react";
import { Level2Input } from "./Level2Input";
import { Level2Modal } from "./Level2Modal";
import { Level2Output } from "./Level2Output";
import "./Level2.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";

export const Level2 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <NavigationTitle
        level="2"
        right_arrow_dest="/level-3"
        left_arrow_dest="/level-1"
      />
      {isModalShown && <Level2Modal hideModal={hideModalHandler} />}
      <Level2Input />
      <Level2Output />
    </>
  );
};
