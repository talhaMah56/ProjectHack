import { useState } from "react";
import { Level2Modal } from "./Level2Modal";
import { Level2Output } from "./Level2Output";
import classes from "./Level2.module.css";

import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";

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
      <div className={classes.level_1}>

      <LevelInput />
      <Level2Output />
      </div>
    </>
  );
};
