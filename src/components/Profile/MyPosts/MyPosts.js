import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {NewPostForm} from "./NewPost/NewPost";
import {deletePost} from "../../../redux/profileReducer";

const MyPosts = React.memo(props => {
    //key={index} create for solution react-error
    let postsArray = props.profilePage.postsData
        .map((item, index) => <Post key={index}
                                                deletePost={props.deletePost}
                                                message={item.text}
                                                likesCount={item.likesCount}
                                                avatar={item.avatar}
                                                id={item.id}/>)

    return (
        <div className={classes.posts}>
            <NewPostForm addPost={props.addPost}/>
            {postsArray}
        </div>
    )
})

export default MyPosts;