import { useEffect, useState } from "react"


export const Timer =() =>{
    const [counter ,setCounter]= useState(20);
 
    
    
  
    useEffect(()=>{
        const id = setInterval(()=>{
          setCounter(function (prev){
              if(prev===0){
                  clearInterval(id);
                  return prev
              }
              return prev-1;
          })

        },1000);

        return ()=>{
            clearInterval(id)
        }
    },[]);
    return <div>
        <h1>counter : {counter}</h1>
        
    </div>
}