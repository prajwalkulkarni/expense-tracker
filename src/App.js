import Expenses from "./components/Expenses/Expenses";
import Title from "./StyledComponent/Title";
import Wrapper from "./StyledComponent/Wrapper";
import Modal from "./components/Modal/Modal";
import {useState} from 'react'
import DisplayModal from "./StyledComponent/DisplayModal";

function App() {

  const [modal,showModal] = useState({
    visible:false,
    message:""
  })

  function dismissModal(){
    showModal({visible:false,message:""})
  }

  const modalHolderHandler = (arg)=>{
    //showModal(true)
    showModal({...modal,visible:true,message:arg})

  }
  
  return (
    <div>
     
      
      <Wrapper>
        <Title>
          <b>Expense tracker</b>
        </Title>
      </Wrapper>
      
     <Expenses modalHolder = {modalHolderHandler}/>
     {modal.visible&&    
     <DisplayModal>
        <Modal dismiss = {dismissModal} message={modal.message}/>
      </DisplayModal>}
    </div>
    
   

  );
  
}

export default App;
