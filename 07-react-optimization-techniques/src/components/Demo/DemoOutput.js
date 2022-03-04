import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return <MyParagraph>{props.onShow ? "This is new" : " "}</MyParagraph>;
};

export default React.memo(DemoOutput);
