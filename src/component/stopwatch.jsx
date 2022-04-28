import { useEffect, useState } from "react";

export const Stwh =()=>{

    const [time,setTime] = useState(0)

    const [timeron,setTimeron] = useState(false)

    useEffect(()=>{

        let interval = null;

        if(timeron){

            interval = setInterval(() => {

                setTime(prev=> prev+10)
                
            },10);

        }
        else{

            clearInterval(interval)

        }

        return ( ()=> clearInterval(interval) );


    },[timeron])

    return(
        <div>
            <div>
                <span>{("0"+Math.floor((time/60000)%60)).slice(-2)} : </span>
                <span>{("0"+Math.floor((time/1000)%60)).slice(-2)} : </span>
                <span>{("0"+(time/10)%100).slice(-2)}</span>
            </div>

        {!timeron && (
            <button onClick={()=>{setTimeron(true)}}>Start</button>
        )}

        {timeron &&
        
            ( <button onClick={()=>{setTimeron(false)}}>Stop</button>)
             
        }

        
                
                <button onClick={()=>{setTime(0)}}>Reset</button>
                
            
        
        

        </div>
       
    );

}