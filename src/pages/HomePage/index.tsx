import React from "react";
import { PageContent, PageTitle, Column } from "./styles";
import Layout from "../_layout";
import Button from "../../components/Button";
import { useHistory } from "react-router";

const horarios = [
  {
    id: 1,
    description: 'Terça e Quarta 7:00',
    initials: 'tq7'
  },
  {
    id: 2,
    description: 'Terça e Quarta 8:00',
    initials: 'tq8'
  },
  {
    id: 3,
    description: 'Terça e Quarta 9:00',
    initials: 'tq9'
  },
]

const HomePage: React.FC = () => { 
  const history = useHistory()
  function handleNewRegistration(){
    history.push('/registration')
  }
  return (
    <Layout>
      <PageTitle>Lista de Horários</PageTitle>
      <PageContent>       
        <Column>
          {horarios.map(item => (
            <Button onClick={handleNewRegistration} key={item.id} variant='secondary' >{item.description}</Button>
          ))}
        </Column>
      </PageContent>
    </Layout>
  )
};

export default HomePage;
