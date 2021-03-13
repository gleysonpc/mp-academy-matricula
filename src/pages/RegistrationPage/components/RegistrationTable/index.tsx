import { TableContainer, Options, TableFooterSection } from "./styles"
import dotsIcon from '../../../../assets/dots-icon.svg'
import Dropdown from "../../../../components/Dropdown"
import Button from "../../../../components/Button"
import { useHistory } from "react-router"
import { students } from '../../../../assets/static'
import { toast } from "react-toastify"

const options = [
  {
    value: 'Editar',
    action: () => { }
  },
  {
    value: 'Trocar Horário',
    action: () => { }
  },
  {
    value: 'Cancelar Matŕicula',
    action: () => { }
  },
]

const MenuIcon = () => (
  <Options role='button'>
    <img src={dotsIcon} alt="Menu" />
  </Options>

)

function RegistrationTable() {
  const history = useHistory()


  return (
    <TableContainer>



      <table>
        <tbody>
          <tr className='table-header'>
            <th className='name'>Nome</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th className='action' >Ações</th>
          </tr>
          {
            students.map(student => (
              <tr key={student.id}>
                <td className='name'>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.cpf}</td>
                <td className='action'>
                  <Dropdown items={options} component={<MenuIcon />} position='right' />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <TableFooterSection>
        <div className='infos'>
          <p>
            Alunos: 18 | Vagas 10
          </p>
        </div>
        <div className='table-buttons'>
          <Button block variant='secondary' onClick={() => history.goBack()} >VOLTAR</Button>
          <Button block variant='primary' onClick={() => toast.success('✌ Matrícula Realizada!')} >SALVAR</Button>
        </div>
      </TableFooterSection>
    </TableContainer>
  )
}

export default RegistrationTable