import React from 'react';
import s from "./FriendsBar.module.css"
import Friend from "./Friend/Friend";

const FriendsBar = (props) => {
    let state = props.friendsPage
    let friendsElements = state.friends.map( f=> <Friend friends={f.names} />);
    return <div className={s.friends}>
            {friendsElements}
        </div>
}

export default FriendsBar;