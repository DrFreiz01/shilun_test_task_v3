import React, {useState} from "react";
import UserCard from "./UserCard";
import {List, AutoSizer} from "react-virtualized";

const FavoritesUsersList =  () => {

    const [userData, setUserData] = useState([])

    function dropCard(e) {
        if (userData.filter(user => user.id === JSON.parse(e.dataTransfer.getData('data')).id).length === 0) {
            setUserData([JSON.parse(e.dataTransfer.getData('data')), ...userData]);
        }
    }

    const removeUserFavoriteList = (userId) => {
        setUserData(userData.filter(user => {
            return user.id !== userId
        }))
    }

    return (
        <div
            className='favorites-users-list'
            onDrop={e => {dropCard(e)}}
            onDragOver={e => {e.preventDefault()}}
        >
            <div className='favorites-users-list__title'>
                <h3>Избранные пользователи</h3>
            </div>

            <div style={{width: "100%", height: "90%"}}>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={100}
                            rowCount={userData.length}
                            rowRenderer={({index, style}) => {
                                return (
                                    <UserCard
                                        key={userData[index].id}
                                        userData={userData[index]}
                                        style={style}
                                        switchDraggable={false}
                                        removeUserFavoriteList={removeUserFavoriteList}
                                    />
                                )
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
        </div>
    );
};

export default FavoritesUsersList;