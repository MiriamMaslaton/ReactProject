import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const userContext = createContext(
    {
        users: axios.get('http://localhost:4000/user/getAllUsers')
            .then(data => {
                console.log(data)
                return data.data;
            })
    }
);

export default function UserContext(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/user/getAllUsers')
            .then(data => {
                console.log(data)
                setUsers(data.data);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <userContext.Provider value={{ users, setUsers }}>
            {props.children}
        </userContext.Provider>
    )
}