import classes from "./Level1.module.css";

export const Level1Output = () => {
  return (
    <div className={classes.background}>
      This is level1 Output
      <div className={classes.container}>
        <div className={classes.bar} style={{ }}></div>
        <div className={classes.bar} style={{ }}></div>
        <div className={classes.bar} style={{ }}></div>
        <div className={classes.bar} style={{ }}></div>
      </div>
      <div className={classes.textbox}>
        output
      </div>
    </div>
  );
};
