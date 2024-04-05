import { useState } from "react";

export const useLocalStorage = (key,defaultValue) => {
    
    const [value,setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : defaultValue
    })

    const setLocacStorageValue = (newValue) => {

        if(newValue) {
            localStorage.setItem(key,JSON.stringify(newValue));
            setValue(newValue)
        } else {
            localStorage.removeItem(key);
            setValue(null)
        }
        
    }

    return [
        value,
        setLocacStorageValue
    ]
}