import React from "react";
import { Container, LogoWrapper, MenuItem, MenuList } from "../Sidebar/styles";

import sideLogo from "../../assets/side-logo.svg";
import homeIcon from "../../assets/homeIcon.svg";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import usersIcon from "../../assets/users.svg";
import configIcon from "../../assets/config-icon.svg";
import clockIcon from "../../assets/clockIcon.svg";
import { useHistory } from "react-router";

const Sidebar: React.FC = () => {
  const history = useHistory()

  function handleClick(path: string) {
    history.push(path)
  }

  return (
    <Container>
      <LogoWrapper>
        <img src={sideLogo} alt="Full Cycle Small" />
      </LogoWrapper>
      <MenuList>
        <MenuItem onClick={() => handleClick('/')} >
          <img src={homeIcon} alt="Home" />
          <p>Home</p>
        </MenuItem>
        <MenuItem onClick={() => handleClick('/classes')}>
          <img src={dashboardIcon} alt="Aulas" className="icon" />
          <p>Aulas</p>
        </MenuItem>
        <MenuItem >
          <img src={clockIcon} alt="Lives" className="icon" />
          <p>Horários</p>
        </MenuItem>
        <MenuItem >
          <img src={usersIcon} alt="Desafios" className="icon" />
          <p>Usuários</p>
        </MenuItem>
        <MenuItem >
          <img src={configIcon} alt="Cursos" className="icon" />
          <p>Ajustes</p>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Sidebar;
