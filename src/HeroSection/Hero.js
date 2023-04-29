import { useEffect } from "react";
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
      <section className="hidden">
        <h1>Welcome to break In</h1>
      </section>
      <section className="hidden">
        <h2>Project Info</h2>
      </section>
      <section className="hidden">
        <button>Break out</button>
      </section>
    </div>
  );
};
