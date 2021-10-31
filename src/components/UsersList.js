import React, {useState} from "react";
import {List, AutoSizer} from "react-virtualized";
import UserCard from "./UserCard";

const UsersList = React.memo( ({usersGroups}) => {

    const [valueInSelect, setValueInSelect] = useState(0)
    const [valueInSearch, setValueInSearch] = useState(null)

    const searchUsers = (currentUsersGroup) => {
        if (valueInSearch) {
            return currentUsersGroup.filter(user => user.full_name.toLowerCase().includes(valueInSearch.toLowerCase()))
        }
        return usersGroups[valueInSelect]
    }

    return (
        <div className='users-list'>
            <div className='users-list__search'>
                <input
                    type="text"
                    placeholder='Поиск...'
                    onChange={(e) => (setValueInSearch(e.target.value))}/>

                <select onChange={(e) => (setValueInSelect(e.target.value))}>
                    {usersGroups.map((groups, index) => (
                        <option key={index} value={index}>От 20{index}0 до 20{index}9</option>
                    ))}
                </select>
            </div>

            <div style={{width: "100%", height: "90%"}}>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={100}
                            rowCount={searchUsers(usersGroups[valueInSelect]).length}
                            rowRenderer={({index, style}) => {
                                return (
                                    <UserCard
                                        key={searchUsers(usersGroups[valueInSelect])[index].id}
                                        userData={searchUsers(usersGroups[valueInSelect])[index]}
                                        valueInSearch={valueInSearch}
                                        style={style}
                                        switchDraggable={true}
                                    />
                                )
                            }}
                        />
                    )}
                </AutoSizer>
            </div>
        </div>
    );
});

export default UsersList;