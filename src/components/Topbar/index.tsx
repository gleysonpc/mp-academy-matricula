import { Container, TopBarContent, UserButton } from "./styles";
import headerLogo from "../../assets/mp_academy_logo.svg";
import githubIcon from "../../assets/user-icon.svg";
import Dropdown from "../Dropdown";
import useAuth, {} from '../../hooks/useAuth'



const UserButtonComponent = () => (
  <UserButton>
    <img src={githubIcon} alt="GitHub Repository" />
    <p>Gleyson Carvalho</p>
  </UserButton>
)

function TopBar() {
  const {logout} = useAuth()

  const items = [  
    {  
      value: 'Sair',
      action: () => logout()
    },
  ]
  
  return (
    <Container>
      <TopBarContent>
        <img src={headerLogo} alt="Full Cycle Large" />
        <Dropdown position='right' items={items} component={<UserButtonComponent />} />
      </TopBarContent>
    </Container>
  );
};

export default TopBar;
