import Films from "./Films";
import {addFilmCreator} from "../../redux/filmReducer";
import {connect} from "react-redux";
import {withLoginRedirect} from "../../common/Redirect/RedirectLogin";
import {getFilms} from "../../redux/selectors/filmSelector";

let mapStateToProps = (state) => {
    return {
        filmPage: getFilms(state)
    }
}

const actionCreators = {
    addFilmCreator
}

const FilmsWrapper = connect(mapStateToProps, actionCreators)(Films);

export default withLoginRedirect(FilmsWrapper);