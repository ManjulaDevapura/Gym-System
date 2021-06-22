import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Payment/Payment_Pay_Emp_action";
const axios = require("axios");

class Payment_Employee_Table extends Component {
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
          Header: `${i18n.t("User Name")}`,
          accessor: "name",
        },
        {
          Header: `${i18n.t("Paid By Id")}`,
          accessor: "paidBy",
        },
        {
          Header: `${i18n.t("Paid By")}`,
          accessor: "loged_Name",
        },
        {
          Header: `${i18n.t("Created")}`,
          accessor: "created",
          Cell: (row) => {
            if (
              row.original.id === null ||
              row.original.id === undefined ||
              row.original.id === ""
            ) {
              return <></>;
            } else {
              var dateObj = new Date(row.original.created).toLocaleString();
              return (
                <>
                  <span>{dateObj.split(",", 2)}</span>
                </>
              );
            }
          }
        },
        {
          Header: `${i18n.t("Basic")}`,
          accessor: "basic",
        },
        {
          Header: `${i18n.t("Allowance")}`,
          accessor: "allowance",
        },
        {
          Header: `${i18n.t("Deduction")}`,
          accessor: "deduction",
        },
        {
          Header: `${i18n.t("Total")}`,
          accessor: "total",
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
                  this.props.fetch_Pay_Emp(state, this.props.token);
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

    dataSet: state.r_PayEmp.payEmp_data,
    pageNo: state.r_PayEmp.pageNo,
    loading: state.r_PayEmp.loading,
    tbl_State: state.r_PayEmp.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Pay_Emp: (state, token) => {
      dispatch(actionCreator.fetch_Pay_Emp(state, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment_Employee_Table);
