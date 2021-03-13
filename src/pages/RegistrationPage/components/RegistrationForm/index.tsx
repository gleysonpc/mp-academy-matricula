import { RegistrationFormContainer, FormTitle, FormBody } from "./styles"

function RegistrationForm(){
  return(
    <RegistrationFormContainer>
      <FormTitle>TERÇA E QUARTA 7:00</FormTitle>
      <FormBody>
          <div className='form-group'>
            <label htmlFor='name' >Nome</label>
            <input id='name' type='text' name='name' placeholder='Nome' />
          </div>
          <div className='form-group'>
            <label htmlFor='phone' >Telefone</label>
            <input id='phone' type='text' name='phone' placeholder='Telefone' />
          </div>
          <div className='form-group'>
            <label htmlFor='cpf' >CPF</label>
            <input id='cpf' type='text' name='cpf' placeholder='CPF' />
          </div>
      </FormBody>
    </RegistrationFormContainer>
  )
}

export default RegistrationForm