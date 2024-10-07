import React ,{createContext,useState,useEffect}from 'react';
import featureFlagsDataServiceCall from '../data';



export const featureFlagsContext =createContext(null);

export default function FeatureFlagGlobalState({children}){
    const [loading,setLoading]= useState(false);
    const [enabledFlags,setEnabledFlags]= useState([]);
    async function fetchFeatureFlags() {
        try{
            setLoading(true);
            const response = await featureFlagsDataServiceCall();
            console.log(response)
            setEnabledFlags(response);
            setLoading(false);
        }catch(e){
            console.log(e);
            setLoading(false);
            throw new Error(e);
           
        }
    }
    useEffect(() => {
      fetchFeatureFlags();
    
      return () => {
        
      }
    }, [])
    
    return <featureFlagsContext.Provider value={{loading,enabledFlags}}>
        {children}
    </featureFlagsContext.Provider >
}