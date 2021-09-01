import ExpenseForm from './ExpenseForm'
import NewExpenseWrapper from './NewExpenseWrapper'
import { useState } from 'react'
function NewExpense(props){

    const [id,setId] = useState(0)
    const [form,showForm] = useState(false);
    
    

    function expenseDataHandler(expenseData){

        if(typeof(expenseData)==="string"){
            props.callback(expenseData)

        }
        else{
            const appendIDObj = {
                ...expenseData,
                id: id
            }
            setId(p=>p+1)
    
            
            props.callback(appendIDObj)
        }
        //return appendID

    }
    return (
        <NewExpenseWrapper>
            {form?<ExpenseForm bottomUp = {expenseDataHandler}/>:<button onClick={()=>showForm(true)}>Add New Expense</button>}
             
        </NewExpenseWrapper>
    )

}

export default NewExpense