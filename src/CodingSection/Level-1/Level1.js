import { useState } from "react";
import { Level1Input } from "./Level1Input";
import { Level1Modal } from "./Level1Modal";
import { Level1Output } from "./Level1Output";

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
    </>
  );
};
