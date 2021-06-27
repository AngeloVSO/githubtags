import styled from "styled-components";

export const MainArea = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
grid-template-rows: 160px;
gap: 8px;
padding: 8px;
width: 100%;
margin-left: 24px;
background-color: rgba(255, 255, 255, 0.7);
box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.42);
overflow-y: auto;
transition: .2s;

@media(max-width: 700px) {
  margin: 12px 0;
}
`;

export const CardRepo = styled.div`
min-height: 160px;
height: 160px;
padding: 12px;
border-radius: 12px;
font-size: 14px;
background-color: lightgrey;
display: grid;
grid-template-rows: 1fr 60px;
position: relative;

img {
position: absolute;
top: 10px;
right: 10px;
width: 20px;
}

a {
color: #203354;

:hover {
  font-weight: 500;
}
}
`
