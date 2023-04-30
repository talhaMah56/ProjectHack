import { useState } from "react";
import { Level3Modal } from "./Level3Modal";
import { Level3Input } from "./Level3Input";
import { Level3Output } from "./Level3Output";
import "./Level3.module.css";

export const Level3 = () => {
  const [isModalShown, setIsModalShown] = useState(true);

  const hideModalHandler = () => {
    setIsModalShown(false);
  };
  return (
    <>
      {isModalShown && <Level3Modal hideModal={hideModalHandler} />}
      <Level3Input />
      <Level3Output />
    </>
  );
};
