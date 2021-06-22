import React, { Component, lazy, Suspense } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import i18n from "i18next";

// import Navigation from "../navigation/Navigation";

import loading from '../Images/loading.gif'

const Comp = lazy(() => import('../components/Loading'))

class Home extends Component {

    componentDidMount() {
        // i18n.changeLanguage(this.props.language);
        // this.props.i18n.changeLanguage(this.props.language);
    }

    render() {
        // const { i18n } = Translation();
       
        return (
            <Suspense fallback={<div><img src={loading} alt={'loading'} /></div>}>
                {this.props.isLoggedIn ? <div><Comp lang={this.props.language}/></div> : <div><img src={loading} alt={'loading'} /></div>}
            </Suspense>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.rLogin.isLoggedIn,
        language: state.rLogin.language,
    }
}
export default withRouter(connect(mapStateToProps)(Home));