
import React, { useEffect, useState }  from 'react';
import User from './user';
import "./style.css"


export default function GitHubProfileFinder(){
    const [userName , setUserName]= useState('AmiyoKm');
    const [userData , setUserData]= useState (null);
    const [loading,setLoading]= useState(false);
    function handleSubmit(){
        fetchGitHubUserData();
    }
    async function fetchGitHubUserData(){
        try{
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const data= await response.json();
            console.log(data);
            if(data){
                setLoading(false);
                setUserData(data);
                setUserName("");
            }

        }catch(e){
            setLoading(false);
            console.error(e.message);
            alert("Error fetching GitHub user data");
        }
    }
    useEffect(()=>{
        fetchGitHubUserData();
    },[])
    
    if(loading){
        return <div>Loading...</div>
    }


    return <div className="github-profile-container">
        <div className="input-wrapper">
            <div >
            <input name="search-by-username" type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}/>
            <button onClick={()=>handleSubmit()}>Search</button>
            </div>
            { userData !==null ? <User user={userData} /> : null }
        </div>
    </div>
}