import React, { useState } from 'react'
import Login from './Login';
import Router from './Router';

export default function Logout() {

    const [isLogin, SetIsLogin] = useState(false);
    
    return (
        <>
            {
                !isLogin ?
                    <Login SetIsLogin={SetIsLogin} />
                    :
                    <Router />
            }
        </>
    )
}

