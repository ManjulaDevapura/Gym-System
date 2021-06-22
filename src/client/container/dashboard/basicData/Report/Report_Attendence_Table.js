import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Report/Report_Attendence_action";
const axios = require("axios");

class Report_Attendence_Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pages: null,
      loading: false,

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

        },
        {
          Header: `${i18n.t("Name")}`,
          accessor: "name",
        },
        {
          Header: `${i18n.t("In Date")}`,
          accessor: "in_Date",
          Cell: (row) => {
            var dateObj = new Date(row.original.in_Date).toLocaleString();
            return <span>{dateObj.split(",", 1)}</span>;
          },
        },
        {
          Header: `${i18n.t("In Time")}`,
          accessor: "in_Time",
        },
        {
          Header: `${i18n.t("Out Date")}`,
          accessor: "out_Date",
          Cell: (row) => {
            var dateObj = new Date(row.original.out_Date).toLocaleString();
            return <span>{dateObj.split(",", 1)}</span>;
          },
        },
        {
          Header: `${i18n.t("Out Time")}`,
          accessor: "out_Time",
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
            {this.props.dataSet ? (
              <ReactTable
                data={this.props.dataSet}
                pages={this.props.pageNo}
                loading={this.props.loading}
                defaultPageSize={5}
                className="-striped -highlight"
                manual
                onFetchData={(state, instance) => {
                  this.props.fetch_Attendences(state, this.props.token);
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
            ) : (
              ""
            )}

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
    user_Id: state.rLogin.user_Id,

    dataSet: state.r_Attendence.attendence_data,
    pageNo: state.r_Attendence.pageNo,
    loading: state.r_Attendence.loading,
    tbl_State: state.r_Attendence.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Attendences: (state, token) => {
      dispatch(actionCreator.fetch_Attendences(state, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report_Attendence_Table);
