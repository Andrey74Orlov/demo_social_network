import React, { Component } from 'react';
import Header from './Header';
import {connect}from 'react-redux';
import { logout} from '../../redux/reducer -auth';



class HeaderContainer extends React.Component {
   

render() {
    return (
        <Header {...this.props} />
    )
}
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout} ) (HeaderContainer);
