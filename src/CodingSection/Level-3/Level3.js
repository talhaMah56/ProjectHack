import { useState } from "react";
import { Level3Modal } from "./Level3Modal";
import { Level3Output } from "./Level3Output";
import classes from "./Level3.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";
import { ImCross, ImCheckmark } from "react-icons/im";

export const Level3 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  
  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };
const checkInput = () => {
    if (code.includes("Print") && (code.match(/"/g) || []).length === 2 && (code.includes("(") && code.includes(")")) && code.includes("3450")) {
      return (
        <span className={classes.correct}>
          <ImCheckmark />
          <h2>Excellent Work, Now Ace can move, lets move to Level 4</h2>
        </span>

);
    } else {
      return (
        <span className={classes.wrong}>
          <ImCross />
          <h2>Check your if you have two Parentheses the double quotes, the right password and the write Function Print</h2>
        </span>
      );
    }
  };

  return (
    <>
      <NavigationTitle
        level="3"
        right_arrow_dest="/level-4"
        left_arrow_dest="/level-2"
      />
      {isModalShown && <Level3Modal hideModal={hideModalHandler} />}
                              {checkInput()}

      <div className={classes.level_1}>
        {/* <span className={classes.wrong}>
          <ImCross />
        </span>
        <span className={classes.correct}>
          <ImCheckmark />
        </span> */}
        <LevelInput handleEditorChange={handleEditorChange} GivenCode={""}/>
      <Level3Output />

      </div>
        <pre>{code}</pre>
    </>
  );
};
