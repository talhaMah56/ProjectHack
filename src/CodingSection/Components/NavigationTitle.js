import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import classes from "./NavigationTitle.module.css";

export const NavigationTitle = (props) => {
  return (
    <div className={classes.navigation}>
      <span className={classes.left_arrow}>
        <NavLink to={props.left_arrow_dest}>
          <BsFillArrowLeftSquareFill />
        </NavLink>
      </span>
      <h2>Level {props.level}</h2>
      <span className={classes.right_arrow}>
        <NavLink to={props.right_arrow_dest}>
          <BsFillArrowRightSquareFill />
        </NavLink>
      </span>
    </div>
  );
};
