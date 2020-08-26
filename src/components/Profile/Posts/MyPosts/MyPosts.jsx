import React from 'react';
import s from "./MyPosts.module.css"
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator (10)

const MyPosts = React.memo (props => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let onAddPost = (values) => {
        props.AddPost(values.newPostText);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={s.post}>
            {postElements}
        </div>
    </div>
});

let AddNewPostForm= (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post text"} validate={[required, maxLength10]} />
        </div>
        <div>
            <button> <h5> Add Post </h5>  </button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

export default MyPosts ;