import {useState} from "react"

function Counter(){
    const [number , setNumber] = useState(0);
     function handlerClick (e){
        e.stopPropagation();
        // setTimeout(() => {
        //     setNumber(number + 1);
        //     console.log(number);
        // }, 2000);
        setTimeout(() => {
            setNumber(number => number + 1); // continously click UI = > correct count but console only 4 click on 0 
            console.log(number);
        }, 2000);
    }
    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button style={{color:"black"}}onClick={handlerClick}>ADD</button>
        </>
    )
}

export default Counter;