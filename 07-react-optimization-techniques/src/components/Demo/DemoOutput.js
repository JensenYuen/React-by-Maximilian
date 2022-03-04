import React from "react";

const DemoOutput = (props) => {
  return (
    <p>{props.onShow ? 'This is new' : " "}</p>
  );
};

export default DemoOutput;
