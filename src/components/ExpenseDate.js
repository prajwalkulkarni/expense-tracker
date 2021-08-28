export default function ExpenseDate(props){

    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const year = props.date.getFullYear();

    return(

        <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
        </div>

    )
}