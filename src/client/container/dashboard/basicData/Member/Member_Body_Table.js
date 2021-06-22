import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_Body_action";
const axios = require("axios");

class Member_Body_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: null,
      loading: false,


     columns : [
      {
        Header: `${i18n.t("ID")}`,
        accessor: "id",
        width: 50,
        maxWidth: 50,
        minWidth: 50,
      },
      {
        Header: `${i18n.t("Member")}`,
        accessor: "user_Id",
        Cell: (row) => {
          return (
            <>
              <span>{row.original.user_Id} - {row.original.name}</span>
            </>
          );
        }
      },
      {
        Header: `${i18n.t("Instructor")}`,
        accessor: "instructor_Id",
        Cell: (row) => {
          return (
            <>
              <span>{row.original.instructor_Id} - {row.original.ins_name}</span>
            </>
          );
        }
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
        },
      },
      {
        Header: `${i18n.t("Height")}`,
        accessor: "height",
      },
      {
        Header: `${i18n.t("Weight")}`,
        accessor: "weight",
      },
      {
        Header: `${i18n.t("Chest")}`,
        accessor: "chest",
      },
      {
        Header: `${i18n.t("Hip")}`,
        accessor: "hip",
      },
      {
        Header: `${i18n.t("Neck")}`,
        accessor: "neck",
      },
      {
        Header: `${i18n.t("Waist")}`,
        accessor: "waist",
      },
      {
        Header: `${i18n.t("Forearm")}`,
        accessor: "forearm",
      },
      {
        Header: `${i18n.t("Calf")}`,
        accessor: "calf",
      },
    ]

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
                  this.props.fetch_Body(
                    state,
                    this.props.token
                  );
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
                // getTrProps={(state, rowInfo, column) => {
                  
                // }}
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

    dataSet: state.r_Body.body_data,
    pageNo: state.r_Body.pageNo,
    loading: state.r_Body.loading,
    tbl_State: state.r_Body.state,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Body: (state, token) => {
      dispatch(actionCreator.fetch_Body(state, token));
    },
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member_Body_Table);
