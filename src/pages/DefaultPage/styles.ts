import styled from "styled-components";

export const PageContent = styled.div`
  .form-group {
    display:flex;
    flex-direction: column; 
    max-width: 350px;  
  }

`;

export const PageTitle = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.primary};
  margin-bottom: 7px;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  color: ${props => props.theme.white};
  margin-bottom: 7px;
  font-weight: lighter;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${props => props.theme.gray};
  opacity: 0.3;
  margin: 10px 0;
  display: block;
`;
