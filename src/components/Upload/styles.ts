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

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface UploadProps {
  isDragActive: boolean;
  isDragReject: boolean;
  refKey?: string;
  [key: string]: any;
  type?: 'error' | 'success' | 'default';
}

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border-color: #e83f5b;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1.5px dashed #969cb3;
  border-radius: 5px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}

  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}
`;

const messageColors = {
  default: '#5636D3',
  error: '#e83f5b',
  success: '#12a454',
};

export const UploadMessage = styled.p`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;

  color: ${({ type }: UploadProps) => messageColors[type || 'default']};

  justify-content: center;
  align-items: center;
`;
