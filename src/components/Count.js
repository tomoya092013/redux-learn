import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.count);
  return <div>カウントコンポーネント:{count}</div>;
};

export default Count;
