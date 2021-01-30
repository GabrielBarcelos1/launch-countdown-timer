import {useState} from 'react'
import './index.css'

function Timer({text, propsNumber}) {

    const [flip,setFlip] = useState("")
    const [number, setNumber] = useState(propsNumber)
    function flipcard(){
        setFlip("flip")
        setTimeout(unFlipCard,500);
    }
    function changeNumber(){
        flipcard()
        setNumber(Number(number)+1)
    }
    function unFlipCard(){
        setFlip("")
    }
    return(
        <div className="majorBox">
            <span>{number}</span>
        <div className="date">
            <div className={`${flip} support`}>
            <div className= {`partTop`}>
            </div>
            <div className= {`partBottom`}>
            </div>
            </div>
        </div>
        <button onClick={()=>changeNumber()}>aaa</button>
        <p>{text}</p>
        </div>

    )
}
export default Timer