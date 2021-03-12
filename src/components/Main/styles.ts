import styled from "styled-components";
import bg from "../../assets/background-logo.svg";

export const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 100%;
  height: calc(100vh);
  padding-left: calc(120px + 10px);
  padding-top: calc(77px + 10px);
  transition: padding 0.5s;

  flex-direction: column;
  @media (max-width: 800px) {
    padding-left: calc(50px + 10px);
  }
`;
