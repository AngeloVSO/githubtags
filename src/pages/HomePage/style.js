import styled from 'styled-components'

export const MainArea = styled.main`
height: calc(100vh - 80px);
background-color: #e6e6e6;
overflow: hidden;

@media (max-width: 700px) {
  min-height: 100vh;
  height: 100%;
  overflow: visible;
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
`;

export const CardsArea = styled.section`
display: flex;
height: 100%;
padding: 24px 0 24px 24px;
transition: 0.2s;

@media (max-width: 700px) {
  flex-direction: column;
  padding: 24px;
}
`;
