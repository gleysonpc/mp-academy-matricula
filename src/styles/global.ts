import {createGlobalStyle} from 'styled-components';

export const theme = {
    background: "#242A33",
    accent: "#212429",
    primary: "#FCBA11",
    white: "#FFF",
    gray: "#909090",
    radius :7
}

export const  GlobalStyle = createGlobalStyle`
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
  }

  .Toastify__toast--success {
    background: #242a33;
  }

  .Toastify__close-button {
    color: #fcba11;
  }

  .Toastify__progress-bar {
    background-color: #fcba11; 

  }
  /* .Toastify__toast-body {
    margin: auto 0;
    padding: 6px;
    border-left: 3px solid #fcba11;
    height: 50px;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -5px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
} */
.Toastify__toast{
  ::before {
   content:"";   
   width:5px;      
   height:60px;   
   background:#ff0000; 
   position:absolute;  
   top: 0;   
   left:0;   
  }

}
`;



