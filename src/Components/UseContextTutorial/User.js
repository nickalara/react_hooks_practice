import React, { useContext } from "react";
import { UserContext } from './UseContextTutorial'

function User() {

    const { username } = useContext(UserContext)

    return (
        <div>
            <h1>User: {username}</h1>
        </div>
    );
}

export default User;