import React,{useState , useEffect} from 'react';


export default function useLocaleStorageKey(key,defaultValue){
    const [value,setValue]= useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key)||String(defaultValue))
        }catch(e){
            console.log(e.message);
            currentValue = defaultValue
        }
        return currentValue;
    })

    useEffect(()=>{
        localStorage.setItem(key ,JSON.stringify(value))
    },[key,value])

    return [value, setValue]
}