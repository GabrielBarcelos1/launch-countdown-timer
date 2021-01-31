import {useState, useEffect} from 'react'
import './index.css'

function Timer({text, propsNumber}) {
    useEffect(()=>{
        setTimeout(changeNumber(text),1000);
    },[])

    const [flip,setFlip] = useState("")
    const [numberSeconds, setNumberSeconds] = useState(propsNumber)
    const [numberMinutes, setNumberMinutes] = useState(propsNumber)
    const [numberHours, setNumberHours] = useState(propsNumber)
    const [numberDays, setNumberDays] = useState(propsNumber)
    function flipcard(){
        setFlip("flip")
        setTimeout(unFlipCard,500);
    }
    function changeNumber(type){
        if(type === "SECONDS"){
            flipcard()
            setNumberSeconds(Number(numberSeconds)-1)
        } else if(type === "MINUTES") {
            flipcard()
            setNumberMinutes(Number(numberMinutes)-1)
        }
    }
    function unFlipCard(){
        setFlip("")
    }
    return(
        <div className="majorBox">
            <span>{text === 'SECONDS' ?numberSeconds
                :text === 'MINUTES' ? numberMinutes
                :text === 'HOURS' ? numberHours
                :text === 'DAYS' ?  numberDays
                : ""}</span>
        <div className="date">
            <div className={`${flip} support`}>
            <div className= {`partTop`}>
            </div>
            <div className= {`partBottom`}>
            </div>
            </div>
        </div>
        <p>{text}</p>
        </div>

    )
}
export default Timer