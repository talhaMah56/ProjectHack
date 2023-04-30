import classes from "./LevelInput.module.css";
import Editor from "@monaco-editor/react";
import { ImCross, ImCheckmark } from "react-icons/im";

export const LevelInput = () => {
  return (
    <div>
      <div className={classes.input_actions}>
        <button className={classes.button}>submit</button>
        <button className={classes.button}>hint</button>
        <span className={classes.wrong}>
          <ImCross />
        </span>
        <span className={classes.correct}>
          <ImCheckmark />
        </span>
      </div>
      <Editor
        width="40vw"
        height="60vh"
        defaultLanguage="javascript"
        defaultValue={`const foo = "bar"`}
      />
    </div>
  );
};
