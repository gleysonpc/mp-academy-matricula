import React from "react";
import { Container } from "../Main/styles";

const Main: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
