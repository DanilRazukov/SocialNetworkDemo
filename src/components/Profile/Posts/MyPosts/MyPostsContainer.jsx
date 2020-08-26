import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AddPostActionCreator} from "../../../../redux/propfile-reducer";

let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
   return {
       AddPost: (newPostText) =>{
           dispatch(AddPostActionCreator(newPostText));
       }
   }
}
const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)

export default MyPostsContainer ;