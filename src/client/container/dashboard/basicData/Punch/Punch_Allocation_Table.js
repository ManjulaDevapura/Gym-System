import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Punch/Punch_Allocation_action";
const axios = require("axios");

class Punch_Allocation extends Component {
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
          Header: `${i18n.t("Card Id")}`,
          accessor: "card_Id",
        },
        {
          Header: `${i18n.t("Status")}`,
          accessor: "status",
          width: 200,
          Cell: (row) => {
            if(parseInt(row.original.status) ===1 ){
              return "Active";
            }else if(parseInt(row.original.status) ===0 ){
              return "Disabled";
            }else{
                return "";
              }
          }
        },
        // {
          // Header: `${i18n.t("Created")}`,
          // accessor: "created",
          // Cell: (row) => {  
          // },
        // },
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
                  this.props.fetch_Cards(state, this.props.token);
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

    dataSet: state.r_Card.card_data,
    pageNo: state.r_Card.pageNo,
    loading: state.r_Card.loading,
    tbl_State: state.r_Card.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Cards: (state, token) => {
      dispatch(actionCreator.fetch_Cards(state, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Punch_Allocation);
