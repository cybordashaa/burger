import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/signupActions';
import { Redirect } from 'react-router-dom';


const Logout = (props) => {

    // componentDidMount = () => {
    //     this.props.logout();
    // }

    useEffect(() => {
        props.logout();
    }, []);
    return <Redirect to="/login" />

}

const mapDipatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDipatchToProps)(Logout);