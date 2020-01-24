import styled from 'styled-components';

export const input =
  styled.input`
    border-radius: 5px;
    border: 0px;
  `;

export const ConfirmInput =
  styled.input`
    border-radius: 5px;
    border: 0px;
    padding: 5px;
    margin-right: 5px;

    ${
      props => props.confirm ?
      `background-color: lightgreen;` :
      `background-color: lightcoral;`
    }
`;
