import { useState } from "react"

export const useForm = (formValues = {}) => {

    const [formState, setFormState] = useState(formValues)    
    

    

    const onInputChangue = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name] : value
        })

    }

    const handleFormReset = () => {
        setFormState(formValues)
    }
  
  
    return {
        ...formState,
        formState,
        onInputChangue,
        handleFormReset
        
    }
}
