import { useState } from "react";
import Editor from "@monaco-editor/react";
import classes from "./LevelInput.module.css";

export const LevelInput = ({ handleEditorChange, GivenCode }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    handleEditorChange(code);
  };

  return (
    <div>
      <div className={classes.input_actions}>
        <button className={classes.button} onClick={handleSubmit}>submit</button>
        <button className={classes.button}>hint</button>
      </div>
      <Editor
        width="40vw"
        height="60vh"
        defaultLanguage="javascript"
        value={code}
        onChange={setCode}
        defaultValue={GivenCode}

      />
    </div>
  );
};
