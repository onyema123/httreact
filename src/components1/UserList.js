import './Userlist.css'
import React, { useEffect } from 'react'
import { useState } from 'react';


function UserList() {
    const [drafts, setDrafts] = useState([])

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setDrafts( data ))
            .catch(err => console.log(err))
    }, [])
    return(
        <div className='main'>
            <ul>
                {drafts.map((list, index)=> (
                    <li key = {index}>{list.id} | {list.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default UserList;