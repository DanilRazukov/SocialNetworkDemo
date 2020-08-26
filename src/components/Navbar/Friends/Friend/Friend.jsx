import React from 'react';
import s from "./Friend.module.css"

const Friend = (props) => {
    return <div className={s.ava}>
        <img src="https://cdn1.flamp.ru/50f603bcac5aef09f988c3e5cbb6a838.jpg"/>
        <div className={s.friend}>
            {props.friends}
        </div>
    </div>

}

export default Friend;