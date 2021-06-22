import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_DuePayment_action";
const axios = require("axios");

class Admin_DuePayment_Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pages: null,
      loading: false,

      upd_id: 0,
      upd_name: "",
      upd_amount: 0,
      upd_type: "",

      columns: [
        {
          Header: `${i18n.t("ID")}`,
          accessor: "id",
          width: 50,
          maxWidth: 50,
          minWidth: 50,
        },
        {
          Header: `${i18n.t("User Id")}`,
          accessor: "user_Id",
          width: 75,
          maxWidth: 75,
          minWidth: 75,
        },
        {
          Header: `${i18n.t("Name")}`,
          accessor: "name",
          width: 150,
          maxWidth: 150,
          minWidth: 150,
        },
        {
          Header: `${i18n.t("Reason")}`,
          accessor: "reason",
        },
      ],
    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
              <ReactTable
                data={this.props.dataSet}
                pages={this.props.pageNo}
                loading={this.props.loading}
                defaultPageSize={5}
                className="-striped -highlight"
                manual
                onFetchData={(state, instance) => {
                  this.props.fetch_DuePayment(state, this.props.token);
                }}
                columns={this.state.columns}
                previousText={t("Previous")}
                nextText={t("Next")}
                loadingText={t("Loading") + "..."}
                noDataText={t("Oops") + "...!"}
                pageText={t("Page")}
                ofText={t("of")}
                rowsText={t("rows")}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value
                }
              />
           
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

    dataSet: state.r_DuePayment.duePayment_data,
    pageNo: state.r_DuePayment.pageNo,
    loading: state.r_DuePayment.loading,
    tbl_State: state.r_DuePayment.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_DuePayment: (state, token) => {
      dispatch(actionCreator.fetch_DuePayment(state, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin_DuePayment_Table);
