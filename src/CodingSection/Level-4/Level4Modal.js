import Modal from "../../UI/Modal";
import classes from "./Level4.module.css"

export const Level4Modal = ({ hideModal }) => {
  return (
    <Modal hideModal={hideModal}>
      <h2>Let's get started with level 4!</h2>
      <br></br>
      <span>
        <div className={classes.codeBox}>Move()</div>
        <p>
          Use the Move() function, to move Ace out of the building  
        </p>
      </span>
      <br></br>
    </Modal>
  );
};
