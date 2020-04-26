import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button> 
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/49489698?s=460&u=b4d6aa364e60ce70d002867735e5b22526bff8f9&v=4"
          alt="Bruno Oliveira"
        />
        <div>
          <strong>byoliveira/gobarber</strong>
          <p>Sistema de agendamento para barbearia</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/49489698?s=460&u=b4d6aa364e60ce70d002867735e5b22526bff8f9&v=4"
          alt="Bruno Oliveira"
        />
        <div>
          <strong>byoliveira/gobarber</strong>
          <p>Sistema de agendamento para barbearia</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/49489698?s=460&u=b4d6aa364e60ce70d002867735e5b22526bff8f9&v=4"
          alt="Bruno Oliveira"
        />
        <div>
          <strong>byoliveira/gobarber</strong>
          <p>Sistema de agendamento para barbearia</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
    </>
  );
};

export default Dashboard;