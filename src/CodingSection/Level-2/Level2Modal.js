import Modal from "../../UI/Modal";
import classes from "./Level2.module.css";

export const Level2Modal = ({ hideModal }) => {
  return (
    <Modal hideModal={hideModal}>
      <h2>Congradulations!</h2>
      <br></br>
      <p>
        Thanks to you, Ace was able to call for help! Instead of
        hearing somebody coming, though, Ace hears a robotic voice.
        "Password incorrect, please try again." Hmm... passoword...
        I wonder if that will unlock the cage?
      </p>
      <br></br>
      <p>
        In this level, you will have to try to crack the password to
        get Ace out. The speaker system will give you a prompt and
        you have to use Ace's "speak" to guess the right answer! Every
        time you answer correctly, one bar will break and Ace will be
        closer to getting out!
      </p>
      <br></br>
      <p>
        The system will be asking you questions about data types. Data
        types are kind of like labels on boxes that hold special types
        of information. Some of the data types the system will ask about
        are:
      </p>
      <br></br>
      <span>
        <div className={classes.codeBox}>Number</div>
        <p>
          : this is a data type that holds, you guessed it, numbers! Any
          number from 7 to 112.3 to -4 and 0 can be represented by a
          number.
        </p>
      </span>
      <br></br>
      <span>
        <div className={classes.codeBox}>boolean</div>
        <p>: it's a silly word, but this data type just holds a value that
          is either "true" or "false." Think of it like a light switch!
          The switch is "on" or "off" just like the boolean is either
          holding "true" or "false."
        </p>
      </span>
      <br></br>
      <span>
        <div className={classes.codeBox}>String</div>
        <p>: think of this data type as a "string" of letters, numbers,
          or other symbols. Strings are always surrounded by ' " ' marks.
          You have been using Strings when you helped Ace speak! As you
          may have seen, you can put almost anything in a String: from
          "Hello there" to "03002034032" and the computer will read it
          as words.
        </p>
      </span>
      <br></br>
      <p>Remeber these when trying to get the password!</p>
      <br></br>
    </Modal>
  );
};
