import { useState, useEffect } from "react";

export const useForm = (submitHandler,initialValues) => {
   
    const [values,setValues] = useState(initialValues);
    
   
    useEffect(() => {
        setValues(initialValues)
    },[initialValues])

    const onChange = (ev) => {
        try {
            
            setValues(state => ({
                ...state,
                [ev.target.name]: ev.target.value
            }))
            
        } catch(error) {
            console.log(error)
        }
        
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }


}