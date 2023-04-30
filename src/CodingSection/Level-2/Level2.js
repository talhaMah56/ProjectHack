import { useState } from "react";
import { Level2Input } from "./Level2Input";
import { Level2Modal } from "./Level2Modal";
import { Level2Output } from "./Level2Output";
import "./Level2.module.css";

export const Level2 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      {isModalShown && <Level2Modal hideModal={hideModalHandler} />}
      <Level2Input />
      <Level2Output />
    </>
  );
};
