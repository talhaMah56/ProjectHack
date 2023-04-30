import classes from "./Level4.module.css"
export const Level4Output = ({corectness}) => {
    if(corectness === true) {
      return(
    <div>
      <div className={classes.map}>
        <div className={classes.mapBox}>
        </div>
        <div className={classes.mapBox}></div>
        <div className={classes.mapBox}></div>
        <div className={classes.mapBox}></div>
        <div className={classes.mapBox}>
         <img
            src={require("../../imgs/prisoner.png")}
            alt="Ace"
            className={classes.prisoner_img}
          />
          </div>
      </div>
    </div>)
    }
    else{
      return(
          <div>
      <p>This is level4 Output</p>
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
    </div>)

    }
};
