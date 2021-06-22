import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $, { nodeName } from "jquery";
// import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_Payment_action";

const Table = lazy(() => import("./Member_Payment_Table"));

class Member_Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_id: 0

    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    $(function () {
      $('[data-toggle="modal"]').tooltip();
    });
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
                      <Table />
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
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    token: state.rLogin.token,

    name: state.rLogin.name,
    id: state.rLogin.id,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetch_Membership_Packages: (token) => {
    //   dispatch(actionCreator.fetch_Membership_Packages(token));
    // },
    // fetch_Membership_Member: (token) => {
    //   dispatch(actionCreator.fetch_Membership_Member(token));
    // },
    // add_PaymentMember: (member, packageId, start, end, package_amount, tbl_State, token) => {
    //   dispatch(actionCreator.add_PaymentMember(member, packageId, start, end, package_amount, tbl_State, token));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member_Payment);
