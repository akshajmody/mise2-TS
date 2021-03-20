import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2.5px solid lightblue;
  border-radius: 22px;
  height: 100%;

  //NEST ITEMS WITH STYLED COMPONENTS
  button {
    border-radius: 0 0 20px 20px;
    background-color: lightcyan;
  }

  img {
    max-height: 250px;
    border-radius: 20px 20px 0 0;
  }

  .itemDiv {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    background-color: lightblue;
    color: darkblue;
  }
`;
