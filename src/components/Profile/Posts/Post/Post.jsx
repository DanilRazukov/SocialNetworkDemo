import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1920375/846898d2-c1b5-48ef-b95b-f8e4f9b4a4aa/s1200"/>
            <div className={s.item}>
                {props.message}
            </div>
            <div className={s.likesCount}>
                {props.likesCount}
            </div>

            <div className={s.button}>
            <button>Like</button>
            </div>
        </div>
    )
}

export default Post ;