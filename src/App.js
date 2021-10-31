import React, {useEffect, useState} from 'react';
import {getGroupsUsers} from "./utils/utils";
import UsersList from "./components/UsersList";
import FavoritesUsersList from "./components/FavoritesUsersList";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch("https://api.randomuser.me/?results=50")
            .then(response => response.json())
            .then(
                (json) => {
                    setUsers(getGroupsUsers(json))
                    setIsLoaded(false)
                },
                (error) => {
                    setError(error)
                    setIsLoaded(false)
                }
            )
    }, [])

    return (
        <div className='main'>
            {isLoaded && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {users && <UsersList usersGroups={users}/>}
            {users && <FavoritesUsersList/>}
        </div>
    );
};

export default App;
