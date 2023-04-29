import { useState } from "react";
import { Level1Input } from "./Level1Input";
import { Level1Modal } from "./Level1Modal";
import { Level1Output } from "./Level1Output";
import "./Level1.module.css";

export const Level1 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      {isModalShown && <Level1Modal hideModal={hideModalHandler} />}
      <Level1Input />
      <Level1Output />
      <p>eeeeea</p>
      <div>
        <div class="square" style={{ left: "50%" }}></div>
        <div class="square" style={{ left: "55%" }}></div>
        <div class="square" style={{ left: "60%" }}></div>
      </div>
    </>
  );
};
