import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/signupActions';
import { Redirect } from 'react-router-dom';
class Logout extends React.Component {

    componentDidMount = () => {
        this.props.logout();
    }

    render() {
        return <Redirect to="/login" />
    }
}

const mapDipatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDipatchToProps)(Logout);