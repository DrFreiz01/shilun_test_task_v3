import NightlightText from "./NightlightText";

const UserCard = ({userData, style, valueInSearch, switchDraggable, removeUserFavoriteList}) => {

    return (
        <div style={style}>
            <div
                className='user-card'
                onDragStart={(e) => e.dataTransfer.setData('data', JSON.stringify(userData))}
                draggable={switchDraggable}
            >
                <div className='user-card__photo'>
                    <img src={userData.photo}/>
                </div>
                <div className='user-card__info'>

                    {valueInSearch ?
                        <div>
                            <NightlightText
                                full_name={userData.full_name}
                                valueInSearch={valueInSearch}
                                date={userData.date}
                            />
                        </div>
                        : <div><p>{userData.full_name} | {userData.date}</p></div>
                    }

                    <div><p>{userData.email}</p></div>
                </div>
                <div className='user-card__remove'>
                    {removeUserFavoriteList
                    && <button onClick={() => removeUserFavoriteList(userData.id)}>Remove</button>}
                </div>
            </div>
        </div>
    );
};

export default UserCard;