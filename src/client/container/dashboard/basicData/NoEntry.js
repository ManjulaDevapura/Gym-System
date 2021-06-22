import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";

import stopSIgn from "../../Images/stop.gif";

class NoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <div className="basicdata">
              <div className="card mb3">
                <div className="card-body">
                  <div className="table-responsive">
                    <Suspense fallback={<div>Loading....</div>}>
                    <div>
                      <img src={stopSIgn} alt={"loading"} />
                    </div>
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Translation>
    );
  }
}
const mapStateToProps = state => {
  return {
    // isLoggedIn: state.rLogin.isLoggedIn,
    // token: state.rLogin.token,
    
    // name: state.rLogin.name,
    // id: state.rLogin.id,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoEntry);
