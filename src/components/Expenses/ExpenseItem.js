import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

export default function ExpenseItem(props){
    const {title,date,amount} = props

    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    )
}