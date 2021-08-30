import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
export default function Expenses(props){


    const [expenses,setExpense] = useState([
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2017, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2019, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2015, 5, 12),
        },
      ]);

      const [filteredYear,setFilteredYear] = useState('2015');
      //expenses.push(props.sendexpense)

      function pullExpenseData(arg){
        //alert(typeof(arg.date))
        
        setExpense([...expenses,arg])
        //alert(JSON.stringify(arg))
      }
      
      const dateHandler = (year)=>{
        //console.log(year.target.value)
        //return year.date.getFullYear().toString() == filteredYear
        //alert(year.target.value)
        setFilteredYear(year.target.value)

      }

      const filteredExpenses = expenses.filter((currYear)=>{
        return currYear.date.getFullYear().toString() === filteredYear
      })



      return(
        
          <Card className="expenses">
            
            <NewExpense callback={pullExpenseData}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesFilter selected={filteredYear} yearHandler={dateHandler}/>
        {filteredExpenses.length>0?filteredExpenses.map(obj=>
            <ExpenseItem key={obj.id} title={obj.title} date={obj.date} amount={obj.amount}/>
          ):<h1>No purchases made for the year {filteredYear}</h1>}
          </Card>
      )
}