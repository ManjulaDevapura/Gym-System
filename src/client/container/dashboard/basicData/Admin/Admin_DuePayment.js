import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_DuePayment_action";

const Table = lazy(() => import("./Admin_DuePayment_Table"));

class Admin_DuePayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_id: 0,
      add_name: "",
      add_amount: 0,
      add_period: 1,
      add_type: "",
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin_DuePayment);
