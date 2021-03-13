import { createGlobalStyle } from 'styled-components';

export const theme = {
  background: "#242A33",
  accent: "#212429",
  primary: "#FCBA11",
  white: "#FFF",
  gray: "#909090",
  radius: 7
}

export const GlobalStyle = createGlobalStyle`
    * , ::before, ::after {
        padding:0 ;
        margin: 0;
        box-sizing: border-box;        
    }

    body {
        background-color: #191C20;
    }

    label {
      font-size: 16px;
      line-height: 20px;
      color: ${theme.gray};      
    }   

    input {
      margin-top: 5px;
      height: 35px;
      background: ${theme.accent};
      border: none;
      border-radius: 6px; 
      outline: none;
      padding: 2px 5px;
      caret-color: ${theme.gray};   
      font-size: 16px;      
      border-left: 3px solid ${theme.accent} ;      
      color: ${theme.gray};
        &::placeholder{
        color: ${theme.gray};
        opacity: 0.7;     
      }
      &:focus {      
        border-left: 3px solid ${theme.primary} ;      
    }
  }


  select {
      margin-top: 5px;
      height: 35px;
      background: ${theme.accent};
      border: none;
      border-radius: 6px; 
      outline: none;
      padding: 2px 5px;
      caret-color: ${theme.gray};   
      font-size: 16px;      
      border-left: 3px solid ${theme.accent} ;      
      color: ${theme.gray};
        &::placeholder{
        color: ${theme.gray};
        opacity: 0.7;     
      }     
    }

    
  

  .Toastify__toast--success {
    background: #242a33;
    ::before {
      content: "";
    width: 5px;
    height: 55px;
    background: #05d205;
    position: absolute;
    border-radius: 6px;
    top: 4px;
    left: 3px;  
    }
  }

  .Toastify__close-button {
    color: #fcba11;
  }

  .Toastify__progress-bar {
    background-color: #191C20; 
  }

  .Toastify__toast-body {
    color: ${theme.gray};
    padding-left: 25px;
  }


  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #191C20;
    border-radius: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5555;
    border-radius: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`