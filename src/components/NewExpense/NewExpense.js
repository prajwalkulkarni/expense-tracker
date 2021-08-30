import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
function NewExpense(props){

    const [id,setId] = useState(0)
    const [form,showForm] = useState(false);
    

    function expenseDataHandler(expenseData){
        const appendIDObj = {
            ...expenseData,
            id: id
        }
        setId(p=>p+1)

        
        props.callback(appendIDObj)
        //return appendID

    }
    return (
        <div className="new-expense">
            {form?<ExpenseForm bottomUp = {expenseDataHandler}/>:<button onClick={()=>showForm(true)}>Add New Expense</button>}
             
        </div>
    )

}

export default NewExpense