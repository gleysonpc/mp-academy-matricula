import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  width: 120px;
  height: 100vh;
  position: fixed;
  display: flex;
  transition: width 0.5s;

  flex-direction: column;
  @media (max-width: 800px) {
    width: 50px;
    p {
      display: none;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.accent};
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primary};
  height: 80px;
  text-decoration: none;
  cursor: pointer;
  
  filter: grayscale(1) opacity(0.5);
  transition: filter 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.accent};
    filter: none; 
  }
  &.active {
    background-color: ${props => props.theme.accent};
    filter: none;
  }
`;
