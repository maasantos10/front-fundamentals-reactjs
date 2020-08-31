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

import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
