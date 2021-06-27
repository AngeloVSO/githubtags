import styled from "styled-components";

export const Form = styled.form`
grid-column: 1/-1;
grid-row: 1;
position: sticky;
top: 0;
background-color: #f8f8f8;
display: flex;
align-items: center;
z-index: 1;

input {
  height: 70%;
  width: 58%;
  padding: 8px;
}
`;
