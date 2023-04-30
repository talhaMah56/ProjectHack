import classes from "./Level1.module.css";

export const Level1Input = () => {
  return (
    <div>
      <p>This is level1Input</p>
      <div className={classes.select}></div>
        <form action="./UserCode">
          <label for="fname">Your Code</label>
          <input type="text" id="userCode" name="userCode" placeholder="Your code.."></input>
          <input type="submit" value="Submit"></input>
        </form>
    </div>
  );
};
