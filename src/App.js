import Expenses from "./components/Expenses/Expenses";
import Title from "./StyledComponent/Title";
import Wrapper from "./StyledComponent/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
        <Title>
          <b>Expense tracker</b>
        </Title>
      </Wrapper>
      
     <Expenses/>
    </div>
   

  );
}

export default App;
