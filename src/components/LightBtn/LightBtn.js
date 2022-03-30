import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { light } from "../../redux/actions/action";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
const Lightbtn = () => {
  const dispatch = useDispatch();
  const lightValue = useSelector((state) => state.light);
  return (
    <div
      onClick={() => dispatch(light())}
      className={`lightBtn ${lightValue ? "night" : "day"}`}
    >
      {lightValue ? <FaLightbulb className="sun" /> : <FaRegLightbulb />}
    </div>
  );
};

export default Lightbtn;
