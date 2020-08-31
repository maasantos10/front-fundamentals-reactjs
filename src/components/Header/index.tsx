/**
 * Project: Integrate backend with frontend NodeJs/ReactJs with upload file and database save
 * Author: Marcos Santos
 * Date: August, 20, 2020.
 * Description: This project aims to show the concepts
 * and techniques presented and learned throughout the Bootcamp
 * related to NodeJs, ReactJS, ReactNative and TypeScript training.
 * Files: *.js and *.ts
 * https://github.com/maasantos10/front-fundamentals-reactjs
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">Listagem</Link>
        <Link to="/import">Importar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
