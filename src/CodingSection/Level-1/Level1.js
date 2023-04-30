import { useState } from "react";
import { Level1Modal } from "./Level1Modal";
import { Level1Output } from "./Level1Output";
import classes from "./Level1.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";

export const Level1 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <NavigationTitle
        level="1"
        right_arrow_dest="/level-2"
        left_arrow_dest="/"
      />
      {isModalShown && <Level1Modal hideModal={hideModalHandler} />}
      <div className={classes.level_1}>
        <LevelInput />
        <Level1Output />
      </div>
    </>
  );
};
