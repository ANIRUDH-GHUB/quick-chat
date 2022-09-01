import React, { useEffect } from "react";
import { STATE } from "../../model/Interfaces";
import { useSelector, useDispatch } from "react-redux";
import { archiveUser } from "../../state/slices/archiveSlice";

const Home: React.FC = () => {
  const { archive } = useSelector((state: STATE) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(archive.archivedUsers);
  });

  useEffect(() => {
    dispatch(archiveUser("asdf"));
  }, []);
  return <h1>HOme</h1>;
};

export default Home;
