import { useState } from "react";
import { Level1Input } from "./Level1Input";
import { Level1Modal } from "./Level1Modal";
import { Level1Output } from "./Level1Output";
import classes from "./Level1.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";

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
      <Level1Input />
      <Level1Output />
      <div className={classes.container}>
        <div className={classes.bar} style={{}}></div>
        <div className={classes.bar} style={{}}></div>
        <div className={classes.bar} style={{}}></div>
        <div className={classes.bar} style={{}}></div>
      </div>
    </>
  );
};
