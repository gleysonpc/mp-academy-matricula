import React from "react";
import { PageContent, PageTitle } from "./styles";
import Layout from "../_layout";
import Button from "../../components/Button";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationTable from "./components/RegistrationTable";

const HomePage: React.FC = () => { 
  return (
    <Layout>
      <PageTitle>Matrícula</PageTitle>
      <PageContent>
        <RegistrationForm />
        <RegistrationTable />
      </PageContent>
    </Layout>
  )
};

export default HomePage;
