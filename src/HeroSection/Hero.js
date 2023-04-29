import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Hero.module.css";

export const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <div className={classes.hero_section}>
      <section className={`${classes.welcome} hidden`}>
        <h1>Welcome to break In</h1>
        <img
          src={require("../imgs/hero-img.png")} alt = "icon with kids pictures"
          className={classes.hero_img}
        />
      </section>
      <section className="hidden">
        <h2>Project Info</h2>
      </section>
      <section className="hidden">
        <NavLink to="/coding-challenge">
          <button className={classes.button}>Break out</button>
        </NavLink>
      </section>
    </div>
  );
};
