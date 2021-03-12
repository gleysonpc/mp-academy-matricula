import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.25);
`;

export const FormContainer = styled.div`  
  width: 500px;
  height: 320px;
  background: ${props => props.theme.background};
  border-radius: 6px;
  display: flex;
  flex-direction: column;  
  align-items: center;
`;

export const FormLogoContainer = styled.div`
  margin: 20px 0;
`;

export const Form = styled.form`
  width:320px; 
    .form-group {
      display:flex;
      flex-direction: column; 
    
      input {
        margin-bottom: 10px;      
      }
  }

  .button {
      display: inline-block;
      margin-top: 10px;
      width: 100%;
  }


`;
