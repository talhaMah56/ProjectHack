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

    const heroElements = document.querySelectorAll(".hidden");
    heroElements.forEach((el) => observer.observe(el));
  });

  return (
    <div className={classes.hero_section}>
      <section className="hidden">
        <h1>Welcome to our project</h1>
      </section>
      <section className="hidden">
        <h2>Learn JavaScript</h2>
      </section>
      <section className="hidden">
        <button>Get Started</button>
      </section>
    </div>
  );
};
