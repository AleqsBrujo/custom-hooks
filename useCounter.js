import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const sumarValue = (value = 1) => {

          setCounter((current) => current + value)


    }

    const restarValue = (value = 1) => {
        if(counter === 0) return
        setCounter((current) => current - value)

    }

    const resetearValue = () => {
        setCounter(initialValue)
    }


    
   
    return {
        counter,
        sumarValue,
        restarValue,
        resetearValue

    }
}


