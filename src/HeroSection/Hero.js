import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Hero.module.css";
import { SlSpeech } from "react-icons/sl";
import { BsPlusSlashMinus } from "react-icons/bs";
import { AiOutlineCarryOut } from "react-icons/ai";
import { GiMaze } from "react-icons/gi";

export const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <div className={classes.hero_section}>
      <section className={classes.welcome}>
        <div className="hidden">
          <h1>Welcome to break out</h1>
          <img
            src={require("../imgs/hero-img.png")}
            alt="Lock"
            className={classes.hero_img}
          />
        </div>
      </section>
      <section>
        <div className="hidden">
          <h2>Levels</h2>
          <div className={classes.levels}>
            <div className={`${classes.level_box} hidden`}>
              <span>
                <SlSpeech />
              </span>
              <p>1.Speaking</p>
            </div>
            <div className={`${classes.level_box} hidden`}>
              <span>
                <BsPlusSlashMinus />
              </span>
              <p>2.Arithmetic</p>
            </div>
            <div className={`${classes.level_box} hidden`}>
              <span>
                <AiOutlineCarryOut />
              </span>
              <p>3.Types</p>
            </div>
            <div className={`${classes.level_box} hidden`}>
              <span>
                <GiMaze />
              </span>
              <p>4.Maze</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hidden">
          <NavLink to="/level-1">
            <button className={classes.button}>Break out</button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
