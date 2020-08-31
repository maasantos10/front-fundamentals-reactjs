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

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
