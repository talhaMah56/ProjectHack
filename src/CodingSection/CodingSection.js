import { Route, Routes } from "react-router-dom";
import { Level1 } from "./Level-1/Level1";

export const CodingSection = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Level1 />} />
      </Routes>
    </>
  );
};
