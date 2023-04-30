import { useState } from "react";
import { ImCross, ImCheckmark } from "react-icons/im";
import Editor from "@monaco-editor/react";
import classes from "./LevelInput.module.css";

export const LevelInput = ({ handleEditorChange }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    handleEditorChange(code);
  };

  return (
    <div>
      <div className={classes.input_actions}>
        <button className={classes.button} onClick={handleSubmit}>submit</button>
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
        value={code}
        onChange={setCode}
      />
    </div>
  );
};
