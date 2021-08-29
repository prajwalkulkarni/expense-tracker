import './Card.css'

function Card(props){

    let class_name = 'card '+props.className

    return (
        <div className
        ={class_name}>
            {props.children}

        </div>
    )
}

export default Card;