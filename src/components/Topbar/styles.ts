import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  position: fixed;
  height: 77px;
  padding: 7px;
  width: 100%;
  padding-left: 120px;
  transition: padding 0.5s;

  @media (max-width: 800px) {
    padding-left: 50px;
  }
`;

export const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const UserButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 50px;
  
  filter: grayscale(1) opacity(0.5);
  transition: filter 0.3s ease-in-out;

  &:hover {    
    filter: none; 
  }

  &.active {   
    filter: none;
  }
  
  p {
    margin-left: 7px;
    color: ${props => props.theme.primary};
  }
`;

export const ModalContainer = styled.div`
  width: 400px;
  padding: 10px 10px;

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .--modal-footer {    
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    
    .primary {
      margin-left: 10px;
    }
  }
  
`;