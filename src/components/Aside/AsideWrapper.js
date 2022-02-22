import {connect} from "react-redux";
import Aside from "./Aside";
import {getFriendsList} from "../../redux/selectors/friendsSelector";

let mapStateToProps = (state) => {
    return {
        friendsList: getFriendsList(state)
    }
}

const AsideWrapper = connect(mapStateToProps)(Aside);

export default AsideWrapper;