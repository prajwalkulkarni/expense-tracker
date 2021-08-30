import './ChartBar.css'
export default function ChartBar(props){

    let heightPercentage = '0%'

    if(props.maxVal>0){
        heightPercentage = Math.round((props.val/props.maxVal)*100)+"%"
        //alert(heightPercetage)
    }
    //const 
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:heightPercentage}}>

            </div>
            
        </div>
        <div className="chart-bar__label">
                {props.label}
        </div>
    </div>
}