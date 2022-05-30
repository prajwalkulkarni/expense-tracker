import { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props){

    const [userInput,inputHandler] = useState({
        title:'',
        amount:0,
        date:''
    })

    

    function submitHandler(e){
        e.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        }
        let res=""
        let titleWarning = "Title should be of 2 characters atleast.\n"
        let amountWarning = "Minimum amount cannot be less than $1.\n"
        let dateWarning = "Please enter a valid date.\n"
        if(userInput.title.length<1){
            res+=titleWarning

        }
        if(userInput.amount<1)
        {
            res+=amountWarning
        }
        if(userInput.date.length<1){
            res+=dateWarning
        }

        if(res.length>1){
            props.bottomUp(res)
            
        }
        else{
            inputHandler({
                title:'',
                amount:'',
                date:''
            })
            props.bottomUp(expenseData)

        }

        
        

        //console.log(expenseData)
    }

    return (
        
        <form onSubmit={submitHandler}>
            
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={(e)=>{inputHandler({...userInput,title:e.target.value})}}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0" value={userInput.amount} onChange={(e)=>{inputHandler({...userInput,amount:e.target.value})}}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2011-01-01" max="2019-12-31"  onChange={(e)=>{inputHandler({...userInput,date:e.target.value})}}/>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    )

}