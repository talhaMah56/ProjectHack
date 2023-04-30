import Modal from "../../UI/Modal";
import classes from "./Level3.module.css";
export const Level3Modal = ({ hideModal }) => {
  const a = (6+3*(2*8)/4+5%7)*150;
  return (
    <Modal hideModal={hideModal}>
      <h2>Nice Work!</h2>
      <p>Well done! Ace is free from the cage! Now its time
        to get out of this room! There seems to be some type
        of padlock on the door... I wonder if it can be
        hacked?
      </p>
      <p>{a}</p>
      <div className={classes.box}>(6+3*(2*8)/4+5%7)*150</div>
            <span>
        <div className={classes.codeBox}>Print</div>
        <p>
          This is a Print function, use it to try out different password combination
          <br></br>Example: Print("Hello World")
        </p>
      </span>

    </Modal>
  );
};
