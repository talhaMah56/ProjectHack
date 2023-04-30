import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";

export const NotFound = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigation(-1);
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  });

  return (
    <Modal>
      <h2>Couldn't find the page you were looking for</h2>
      <p>redirecting...</p>
    </Modal>
  );
};
