import React, { useState } from 'react';
import { Level1Modal } from "./Level1Modal";
import { Level1Output } from "./Level1Output";
import classes from "./Level1.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";
import { ImCross, ImCheckmark } from "react-icons/im";

export const Level1 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };

  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };
const checkInput = () => {
    if (code.includes("speak") && (code.match(/"/g) || []).length === 2 && (code.includes("(") || code.includes(")"))) {
      return (
        <span className={classes.correct}>
          <ImCheckmark />
          <h2>"Excellent Work, but unfortunately nobody could heard him, let move to Level 2 "</h2>
        </span>

);
    } else {
      return (
        <span className={classes.wrong}>
          <ImCross />
          <h2>Check your if you have two Parentheses the double quotes and speak function</h2>
        </span>
      );
    }
  };
  return (
    <>
      <NavigationTitle
        level="1"
        right_arrow_dest="/level-2"
        left_arrow_dest="/"
      />
      {isModalShown && <Level1Modal hideModal={hideModalHandler} />}
                  {checkInput()}

      <div className={classes.level_1}>  
            {/* {checkInput()} */}
      
        {/* <span className={classes.wrong}>
          <ImCross />
        </span>
        <span className={classes.correct}>
          <ImCheckmark />
        </span> */}

        <LevelInput handleEditorChange={handleEditorChange} />
        <Level1Output code={code} />
      </div>
    </>
  );
};
