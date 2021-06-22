import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Home/Home_action";

class Member_Payment_Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pages: null,
      loading: false,

      
      columns: [
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
          Header: `${i18n.t("Package ID")}`,
          accessor: "package_Id",
        },
        {
          Header: `${i18n.t("Package Name")}`,
          accessor: "package_Name",
        },
        {
          Header: `${i18n.t("Amount")}`,
          accessor: "amount",
        },
        {
          Header: `${i18n.t("Start")}`,
          accessor: "start",
          Cell: (row) => {
            if (
              row.original.id === null ||
              row.original.id === undefined ||
              row.original.id === ""
            ) {
              return <></>;
            } else {
              var dateObj = new Date(row.original.start).toLocaleString();
              return (
                <>
                  <span>{dateObj.split(",", 1)}</span>
                </>
              );
            }
          }
        },
        {
          Header: `${i18n.t("End")}`,
          accessor: "end",
          Cell: (row) => {
            if (
              row.original.id === null ||
              row.original.id === undefined ||
              row.original.id === ""
            ) {
              return <></>;
            } else {
              var dateObj = new Date(row.original.end).toLocaleString();
              return (
                <>
                  <span>{dateObj.split(",", 1)}</span>
                </>
              );
            }
          }
        }
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
                  this.props.fetch_Payment(this.props.id, state, this.props.token);
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

    dataSet: state.r_Payment.payment_data,
    pageNo: state.r_Payment.pageNo,
    loading: state.r_Payment.loading,
    tbl_State: state.r_Payment.state,
    id: state.rLogin.user_Id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Payment: (id, state, token) => {
      dispatch(actionCreator.fetch_Payment(id, state, token));
    }
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member_Payment_Table);
