import { useState } from "react";
import { Level4Modal } from "./Level4Modal";
import { Level4Output } from "./Level4Output";
import classes from "./Level4.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";
import { ImCross, ImCheckmark } from "react-icons/im";

export const Level4 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };

  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };
const checkInput = () => {
    if (code.includes("Move") && (code.match(/"/g) || []).length === 2 && (code.includes("("))) {
      return (
        <span className={classes.correct}>
          <ImCheckmark />
          <h2>"Excellent Work, Ace escaped the building"</h2>
        </span>

);
    } else {
      return (
        <span className={classes.wrong}>
          <ImCross />
          <h2>Check your if you have two Parentheses the double quotes, and the write Function Move</h2>
        </span>
      );
    }
  };

  return (
    <>
      <NavigationTitle
        level="4"
        right_arrow_dest="/level-4"
        left_arrow_dest="/level-3"
      />
      {isModalShown && <Level4Modal hideModal={hideModalHandler} />}
      {checkInput()}
      <div className={classes.level_1}>
        {/* <span className={classes.wrong}>
          <ImCross />
        </span>
        <span className={classes.correct}>
          <ImCheckmark />
        </span> */}

        <LevelInput handleEditorChange={handleEditorChange} GivenCode={""}/>
      <Level4Output />
      </div>
        <pre>{code}</pre>
    </>
  );
};
