import ChartBar from './ChartBar'
import './Chart.css'
export default function Chart(props){
    const totalMax = props.dataPoints.map(arg=>{return arg.value})
    //alert(Math.max(...totalMax))
    //alert(totalMax)
    return <div className="chart">
        {props.dataPoints.map(arg=>{
            return <ChartBar
            key={arg.label}
            label={arg.label}
            maxVal = {Math.max(...totalMax)}
            val = {arg.value}/>
            
        })}
        
    </div>
     
}