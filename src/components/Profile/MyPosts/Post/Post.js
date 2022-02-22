import classes from './Post.module.css'

const Post = (props) => {
    const deletePost = () => {
        props.deletePost(props.id)
    }

    return (
        <div className={classes.post}>
            <img className={classes.avatar} src={props.avatar} alt="avatar"/>
            <div className={classes.postInfo}>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.likes}>
                    <img src="https://cdn131.picsart.com/296316240436211.png" alt="like"/>
                    <p>{props.likesCount}</p>
                </div>
            </div>
            <div className={classes.deletePost} onClick={deletePost}>
                &#10060;
            </div>
        </div>
    )
}

export default Post;