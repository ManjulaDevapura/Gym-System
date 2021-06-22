import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import i18n from "i18next";
import $ from 'jquery';

// import user from '../Images/boy.png'
// import login from '../Images/login.png'
// import logo from '../Images/logo.png'

import * as actionCreator from '../../actions/login_actions'

class LogIn extends Component {

    handle = async (event) => {
        event.preventDefault();
        $('#error').empty();
        if (this.refs.userName.value !== '' && this.refs.password.value !== '') {
            await this.props.login(this.refs.userName.value, this.refs.password.value)
        } else if (this.refs.userName.value === '' && this.refs.password.value === '') {
            $('#error').addClass('alert alert-danger')
            $('<div>Enter user name and password</div>').appendTo('#error');
        } else if (this.refs.userName.value === '') {
            $('<div>Enter user name</div>').appendTo('#error');
        } else if (this.refs.password.value === '') {
            $('<div>Enter password</div>').appendTo('#error');
        } else if (this.props.error !== null) {
            $(`<div>${this.props.error}</div>`).appendTo('#error');
        }
    }

    componentDidUpdate() {
        // console.log(this.props);

        $('#error').empty();
        if (this.props.isLoggedIn) {
            i18n.changeLanguage(this.props.language);
            this.props.history.push('/home')
        } else if (this.props.error !== null) {
            // error validation
            console.log(this.props.error);
            $('#error').addClass('alert alert-danger')
            $(`<div>${this.props.error}</div>`).appendTo('#error');
        } else {
            $('#error').addClass('alert alert-danger')
            $(`<div>${this.props.error}</div>`).appendTo('#error');
        }
    }

    render() {

        return (
            <div>
                {/* <div> <img className="logo" src={logo} alt="Logo" /></div> */}
                <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div id='error' className=""></div>
                            <form>
                                <div className="form-group">
                                    <div className="form-label-group">
                                    <div className="table">
                        <div className='row' >
                            <div className='col-lg-4'>User Name</div>
                            <div className='col-lg-8'>
                                        <input
                                            id="inputUserName"
                                            className="form-control"
                                            type='text'
                                            placeholder='User Name'
                                            name='userName'
                                            autoComplete='off'
                                            ref='userName'
                                            required
                                        />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-label-group">
                                    <div className="table">
                        <div className='row' >
                            <div className='col-lg-4'>Password</div>
                            <div className='col-lg-8'>
                                        <input
                                            id="inputPassword"
                                            className="form-control"
                                            type='password'
                                            placeholder='Password'
                                            name='password'
                                            autoComplete='current-password'
                                            ref='password'
                                            required
                                        />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <input className="btn btn-primary btn-block" id='submit' type="submit" onClick={this.handle} value="LOGIN"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.rLogin.isLoggedIn,
        language: state.rLogin.language,
        error: state.rLogin.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userName, password) => { dispatch(actionCreator.login(userName, password)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn))
