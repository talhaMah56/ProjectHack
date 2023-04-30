import classes from "./Level4.module.css";

export const Level4Output = () => {
  return (
    <div>
      <div className={classes.map}>
        <div className={classes.mapBox}>
          <img
            src={require("../../imgs/prisoner.png")}
            alt="Ace"
            className={classes.prisoner_img}
          />
        </div>
        <div className={classes.mapBox}></div>
        <div className={classes.mapBox}></div>
        <div className={classes.mapBox}></div>
        <div className={classes.mapBox}></div>
      </div>
    </div>
  );
};
