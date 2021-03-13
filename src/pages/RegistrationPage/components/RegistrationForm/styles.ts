import styled from 'styled-components'

export const RegistrationFormContainer = styled.div`
  background-color: ${props => props.theme.background};
  padding: 13px 20px;
  border-radius: ${props => props.theme.radius}px;
`
export const FormTitle = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.white};
`
export const FormBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 15px;
  margin-top: 15px;
  .form-group {
    display:flex;
    flex-direction: column;
  }
`
