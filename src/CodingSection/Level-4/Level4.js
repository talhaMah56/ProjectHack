import { useState } from "react";
import { Level4Modal } from "./Level4Modal";
import { Level4Output } from "./Level4Output";
import classes from "./Level4.module.css";
import { NavigationTitle } from "../Components/NavigationTitle";
import { LevelInput } from "../Components/LevelInput";

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

      <LevelInput handleEditorChange={handleEditorChange} />
        <pre>{code}</pre>

      <Level4Output />
      </div>
    </>
  );
};
