import Modal from "../../UI/Modal";
import classes from "./Level1.module.css";

export const Level1Modal = ({ hideModal }) => {
  return (
    <Modal hideModal={hideModal}>
      <h2>Oh no! Ace is trapped! Can you help them escape the prison?</h2>
      <br></br>
      <p>Ace is a fluffy friend who has been caught in a terrible trap. They need
        your help to escape. To get them out, you will have to solve puzzles that
        use code. What should they do?
      </p>
      <br></br>
      <p>
        In this level, Ace wants to try to call for help. Maybe someone will hear
        and come unlock the prison, but they can't do it alone. You can help them
        with a couple of commands!Ace has a "speak" command that you can use to
        help them call someone over. You can use it like this:
      </p>
      <br></br>
      <p className={classes.codeBox}>
        speak( "Your text here" );
      </p>
      <br></br>
    </Modal>
  );
};
