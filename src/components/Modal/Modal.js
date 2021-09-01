import styles from './Modal.module.css'
import { Fragment } from 'react'
export default function Modal(props){

    console.log(props.message)
    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Invalid Input

            </div>
            <div className={styles.subject}>
                {props.message.split('\n').map((item, key) => {
                return <Fragment key={key}>{item}<br/></Fragment>
                })}
                

            </div>
            <button onClick={props.dismiss}>OK</button>
            
        </div>
    )
}