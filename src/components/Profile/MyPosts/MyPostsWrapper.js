import MyPosts from "./MyPosts";
import {addPost, deletePost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {getProfilePage} from "../../../redux/selectors/profileSelector";

let mapStateToProps = (state) => {
    return {
        profilePage: getProfilePage(state)
    }
}

let actionCreators = {
    addPost,
    deletePost
}

const MyPostsWrapper = connect(mapStateToProps, actionCreators)(MyPosts);

export default MyPostsWrapper;