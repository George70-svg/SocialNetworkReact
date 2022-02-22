import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUser} from "../../redux/selectors/authSelector";

class HeaderWrapper extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return({
        data: getAuthUser(state)
    })

}

export default connect(mapStateToProps)(HeaderWrapper);