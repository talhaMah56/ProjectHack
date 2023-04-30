import Modal from "../../UI/Modal";
import classes from "./Level4.module.css"

export const Level4Modal = ({ hideModal }) => {
  return (
    <Modal hideModal={hideModal}>
      <h2>Well done!</h2>
      <br></br>
      <span>
        <p>
          Very well done, you've helped Ace escape the room! It looks
          like there is a path to get out, but Ace can't see the way.
          Would you guide them out of the building? 
        </p>
        <br></br>
        <p>
          To get Ace out, you are going to have to use a function just
          like "speak." This time, the function is called "move." Every
          time you run the "move" function, Ace will move one step closer
          to the exit! The function looks like this:
        </p>
        <div className={classes.codeBox}>Move()</div>
        <p> See if you can get Ace out! </p>
      </span>
      <br></br>
    </Modal>
  );
};
