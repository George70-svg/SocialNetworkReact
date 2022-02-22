import classes from './NewPost.module.css'
import React from "react";
import {useFormik} from "formik";

export const NewPostForm = (props) => {
    const formik = useFormik({
        initialValues: {
            myPost: "",
        },

        onSubmit: (values, submitProps) => {
            props.addPost(values.myPost)
            submitProps.resetForm()
        }
    })

    return(
        <div className={classes.newPost}>
            <form onSubmit={formik.handleSubmit}>
                <textarea name="myPost"
                          id="myPost"
                          placeholder="Enter your post..."
                          onChange={formik.handleChange}
                          value={formik.values.myPost}
                />
                <button type="submit">Add post</button>
            </form>
        </div>
    )
}