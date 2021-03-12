import { Container, TopBarContent, UserButton, ModalContainer } from "./styles";
import headerLogo from "../../assets/mp_academy_logo.svg";
import githubIcon from "../../assets/user-icon.svg";
import Dropdown from "../Dropdown";
import useAuth, { } from '../../hooks/useAuth'
import Modal from "../Modal";
import { useState } from "react";
import Button from "../Button";

const UserButtonComponent = () => (
  <UserButton>
    <img src={githubIcon} alt="GitHub Repository" />
    <p>Gleyson Carvalho</p>
  </UserButton>
)

function TopBar() {
  const { logout } = useAuth()
  const [showModal, setShowModal] = useState(false)

  const dropdownItems = [
    {
      value: 'Escolher Curso',
      action: () => setShowModal(true)
    },
    {
      value: 'Sair',
      action: () => logout()
    },
  ]

  const ModalContent = () => {
    return (
      <ModalContainer>
        <div className='form-group'>
          <label htmlFor='course' >Qual curso fará matrícula?</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className='--modal-footer' >
          <Button onClick={() => setShowModal(false)} block variant='secondary'>SAIR</Button>
          <Button onClick={() => setShowModal(false)} block variant='primary'>CONFIRMAR</Button>
        </div>
      </ModalContainer>
    )
  }

  return (
    <Container>
      <TopBarContent>
        <img src={headerLogo} alt="Full Cycle Large" />
        <Dropdown position='right' items={dropdownItems} component={<UserButtonComponent />} />
      </TopBarContent>
      <Modal title='Escolher Curso' isOpen={showModal} closeModal={() => setShowModal(false)} >
        <ModalContent />
      </Modal>
    </Container>
  );
};

export default TopBar;
