import styled from "styled-components";

const NewExpenseWrapper = styled.div`

    background-color: #757de8;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  
  
  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 4px solid #fff;
    background-color: #002984;
    color: white;
    border-radius: 20px;
    margin-right: 1rem;
  }
  
  & button:hover,
  & button:active {
    background-color: #3f51b5;
    border-color: #fff;
  }
  
  & button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }
  
  & button.alternative:hover,
  & button.alternative:active {
    background-color: #ddb3f8;
  }
  
`

export default NewExpenseWrapper;