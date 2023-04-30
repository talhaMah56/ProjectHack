import classes from "./Level1.module.css";

export const Level1Output = () => {
  return (
    <div className={classes.output_div}>
      <img
        src={require("../../imgs/prisoner.png")}
        alt="Ace"
        className={classes.prisoner_img}
      />
      <div className={classes.container}>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
    </div>
  );
};
