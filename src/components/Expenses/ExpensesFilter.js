import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const arr = ['2011','2012','2013','2014','2015','2016','2017','2018','2019']
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={(e)=>props.yearHandler(e)} value={props.selected}>{
          arr.map(obj=>
           <option key={Math.random()*Math.random()}>{obj}</option>
          )}
          
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;