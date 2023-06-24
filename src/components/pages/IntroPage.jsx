import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import Introslider from "../intro/Introslider";
import IntroCont from "../intro/IntroCont";

const IntroPage = () => {
  return (
    <Contents>
      <ContTitle title="intro" />
      <Introslider />
      <IntroCont />
    </Contents>
  );
};

export default IntroPage;
