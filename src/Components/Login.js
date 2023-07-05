import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Login(props) {

    var { setIsLogin } = props;
    const [user, setUser] = useState({ userName: "", userPassword: "", userEmail: "", userAddress: "" });
    const [allUsers, setAllUsers] = useState([]);
    const [exist, setExist] = useState(false);
    console.log(user,"bafore");
    useEffect(() => {
        axios.get('http://localhost:4000/user/getAllUsers')
            .then(data => setAllUsers(data.data))
            .catch(error => console.log(error));
    }, [])

    const login = () => {
        axios.get(`http://localhost:4000/user/getUserByName/${user.username}`)
            .then(data =>
            {
                console.log(data);
            if (data.data) {
          
          
                if (data.data.password === user.password) {
                    setIsLogin(true);
                    localStorage.setItem('currentUser', JSON.stringify(data.data));
                    localStorage.setItem('isAdmin', JSON.stringify(data.data.__v));
                }
                else console.log("wrong password!!!")
            }
            else {
                console.log(user,"after")
                setExist(true);
            }
        })
    }

    const addUser = () => {
        axios.post('http://localhost:4000/user/addUser', user)
            .then(data => {
                setAllUsers([...allUsers, data.data])
                setIsLogin(true);
                saveLocal();
            })
            .catch(() => console.log("error"))
    }

    const saveLocal = () => {
        localStorage.setItem('currentUser', JSON.stringify(user))
    }

    return (
        <form className="LoginForm">
            {}
               
        </form>
    )
}