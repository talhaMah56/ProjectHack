import { useState } from "react";
import { Level2Modal } from "./Level2Modal";
import { Level2Output } from "./Level2Output";
import classes from "./Level2.module.css";

import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";
import { ImCross, ImCheckmark } from "react-icons/im";

export const Level2 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  
  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };
  const starterCode = "Number = true\nBoolean = \"Hello\"\nString = 5"

  const checkInput = () => {
    if (code === ("Number = 5\nBoolean = true\nString = \"Hello\"")) {
      return (
        <span className={classes.correct}>
          <ImCheckmark />
          <h2>Excellent Work, Ace is free from the cage!, lets move to Level 3</h2>
        </span>

);
    } else {
      return (
        <span className={classes.wrong}>
          <ImCross />
          <h2>Check your types</h2>
        </span>
      );
    }
  };

  return (
    <>
      <NavigationTitle
        level="2"
        right_arrow_dest="/level-3"
        left_arrow_dest="/level-1"
      />
      {isModalShown && <Level2Modal hideModal={hideModalHandler} />}
        {checkInput()}

      <div className={classes.level_1}>

        <LevelInput handleEditorChange={handleEditorChange} GivenCode={starterCode}/>
      <Level2Output />
      </div>
        <pre>{code}</pre>
    </>
  );
};
