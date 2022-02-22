import {compose} from "redux";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogsReducer";
import {withLoginRedirect} from "../../common/Redirect/RedirectLogin";
import {getDialogsPage} from "../../redux/selectors/dialogsSelector";

const mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state)
    }
}

const actionCreators = {
    addMessage
}

export default compose(
    withLoginRedirect,
    connect(mapStateToProps, actionCreators),
)(Dialogs)
