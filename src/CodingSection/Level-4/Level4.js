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

  return (
    <>
      <NavigationTitle
        level="4"
        right_arrow_dest="/level-4"
        left_arrow_dest="/level-3"
      />
      {isModalShown && <Level4Modal hideModal={hideModalHandler} />}
      <div className={classes.level_1}>
        <span className={classes.wrong}>
          <ImCross />
        </span>
        <span className={classes.correct}>
          <ImCheckmark />
        </span>

      <LevelInput handleEditorChange={handleEditorChange} />
      <Level4Output />
      </div>
        <pre>{code}</pre>
    </>
  );
};
