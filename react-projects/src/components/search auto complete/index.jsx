import React, { useState, useEffect } from 'react';
import Suggestions from './suggestions.jsx';

export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useState(''); 
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((user) => user.firstName));
                setError(null);
            }
        } catch (e) {
            setError(e);
            console.log(error); 
        } finally {
            setLoading(false)
        }
    }

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        if (query.length > 0) {
            const filteredData = users && users.length ?
                users.filter(user => user.toLowerCase().includes(query)) :
                [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    function handleClick(event){
        setShowDropDown(false);
        setSearchParams(event.target.innerText);
    }

    console.log(users, filteredUsers);

    return (
        <div className="search-autocomplete-container">
            {loading && <div>Loading...</div>}
            <input
                value={searchParams}
                onChange={handleChange}
                name="search-users"
                placeholder="Search users here..."
            />
            {
                showDropDown ? <Suggestions handleClick ={handleClick} data={filteredUsers} /> : null
            }
        </div>
    );
}
