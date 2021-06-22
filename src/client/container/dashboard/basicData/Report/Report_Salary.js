import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import logo from "../../../Images/logo.jpg";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Report/Report_Salary_action";

class Report_Salary extends Component {
  constructor(props) {
    super(props);
    var end_dateD = new Date();
    const end_date = end_dateD.toISOString().split('T', 1);


    
    var start_date = new Date();    
    const year = start_date.getFullYear() - 1;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split('T', 1);


    this.state = {
      startDate: start_date,
      endDate: end_date,
      empNo: 0,
    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    $(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    this.props.fetch_Users(this.props.token);
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
                    <table><tbody><tr>
                    <td style={{width: 50}}><span>From </span></td>
                    <td><input
                      id="add_startDate"
                      className="form-control"
                      type="date"
                      value={this.state.startDate}
                      onChange={(e) => {
                        this.setState({
                          startDate: e.target.valueAsDate
                            .toISOString()
                            .split("T", 1),
                        });
                      }}
                    /></td>
                    <td style={{width: 50, textAlign: "right", paddingRight: 15}}><span>To </span></td>

                    <td><input
                      id="add_endDate"
                      className="form-control"
                      type="date"
                      value={this.state.endDate}
                      onChange={(e) => {
                        this.setState({
                          endDate: e.target.valueAsDate
                            .toISOString()
                            .split("T", 1),
                        });
                      }}
                    /></td>
                    <td style={{width: 50, textAlign: "right", paddingRight: 15}}><span>To </span></td><td>
                    <select
                      id={"add_User_Id"}
                      className="custom-select"
                      onChange={(e) => {
                        this.setState({
                          empNo: e.target.value,
                        });
                      }}
                    >
                      <option key={0} value="0">
                        Select Employee
                      </option>
                      {this.props.member_data === ""
                        ? ""
                        : this.props.member_data.map((member) => {
                            return (
                              <option
                                key={member.id}
                                value={member.id}
                              >
                                {member.id}
                                {" -> "} {member.name}
                              </option>
                            );
                          })}
                    </select>
                  </td>
                    <td style={{width: 50}}><span> </span></td>
                    <td style={{width: 50}}><button className="btn btn-primary"
                    onClick={()=>{
                      
    var start_date = new Date(this.state.endDate);    
    const day = start_date.getDate() + 1;
    start_date.setDate(day);
    start_date = start_date.toISOString().split('T', 1);
    const endDate = start_date;

this.props.fetch_Salary(this.state.startDate, endDate, this.state.empNo, this.props.token);

                    }}>Search</button></td>
                    <td style={{width: 50}}><span> </span></td>
                    <td style={{width: 50}}><span> </span></td>
                    <td><button
                      className="btn btn-outline-warning"
                      style={{}}
                      onClick={() => {
                        var content = document.getElementById("divcontents");
                        var headerContent = document.getElementById(
                          "headerContents"
                        );
                        var testFromNotepad = `
                                                                <!DOCTYPE html>
<html>
<head>
<title> </title>
  <style>
  
.page-header, .page-header-space {
  height: 10px;
}

.page-footer, .page-footer-space {
    height: 5px;
  
  }
  
  .page-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid black; /* for demo */
    /*background: yellow;  for demo */
  }
  
  .page-header {
    position: fixed;
    top: 0mm;
    width: 100%;
    border-bottom: 1px solid black; /* for demo */
    /*background: yellow;  for demo */
  }
  
  .page {
    page-break-after: always;
  }
  
  .page {
      margin-left: 10mm
      margin-right: 10mm
  }
  tr {page-break-inside: avoid;}

  .tableClass {
    border-collapse: collapse;
  }
  
.tableClass, .tdClass, .thClass {
    border: 1px solid black;
  }
  </style>
  </head>
<body>
${headerContent.innerHTML}
  <tbody>
    <tr>
      <td>
        <div class="page" style="line-height: 0;">
${content.innerHTML}
        </div>
      </td>
    </tr>
  </tbody>
</body>
</html>
`;

                        var pri = document.getElementById("ifmcontentstoprint")
                          .contentWindow;
                        pri.document.open();

                        pri.document.write(testFromNotepad);
                        pri.document.close();
                        pri.focus();
                        pri.print();
                      }}
                    >
                      {t("Print")}
                    </button></td>
                    </tr></tbody></table>
                  </div>
                  <hr />

                  <div style={{}}>
                    <div id={"headerContents"} style={{ display: "none" }}>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr style={{}}>
                            <td style={{ textAlign: "left" }}>
                              <div className="">
                                <img
                                  src={logo}
                                  alt={"loading"}
                                  style={{ width: 300, height: 200 }}
                                />
                              </div>
                            </td>
                            <td style={{ textAlign: "left", fontSize: 20 }}>
                              <pre style={{ fontWeight: "bold", fontSize: 25 }}>
                                St. Anthony's Fitness Center
                              </pre>
                              <pre>
                                47/7, Theresa Mawatha, Kalaeliya, Ja_Ela
                              </pre>
                              <pre>+94 773 989 568</pre>
                              {/* <pre>hmendis85@gmail.com</pre>                                                           */}
                              {/* <tr><td><span style={{ paddingTop: 0, fontSize: 20 }}>St. Anthony's Fitness Center</span></td></tr>
                                                          <tr><td><span style={{ paddingTop: 0, fontSize: 20 }}>47/7, Theresa Mawatha, Kalaeliya, Ja_Ela</span></td></tr>
                                                          <tr><td><span style={{ paddingTop: 0, fontSize: 20 }}>hmendis85@gmail.com</span></td></tr>
                                                          <tr><td><span style={{ paddingTop: 0, fontSize: 20 }}>+94 773 989 568</span></td></tr> */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                      <div
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          textAlign: "-webkit-center",
                          paddingTop: 25,
                          paddingBottom: 25,
                        }}
                      >
                        <div
                          className="title"
                          style={{
                            textDecoration: "underline",
                            height: 25,
                            width: 300,
                            textAlign: "center",
                            fontWeight: "bold",
                            alignContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ paddingTop: 10, fontSize: 25 }}>
                            {t("Salary Report")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{}}>
                    {/* print table */}
                    <div id={"divcontents"} style={{ paddingTop: 0 }}>
                      <table
                        className="tableClass"
                        style={{
                          borderCollapse: "3px solid #000000",
                          paddingTop: 50,
                        }}
                      >
                        <>
                          <thead>
                            <tr
                              style={{
                                background: "",
                                fontWeight: "bold",
                                borderTop: "3px solid #000000",
                                fontSize: 15,
                              }}
                            >
                            <th
                              style={{
                                height: 25,
                                width: "150px",
                                textAlign: "center",
                                border: "3px solid #000000",
                              }}
                            >
                              {t("Date")}
                            </th>
                              <th
                                style={{
                                  height: 25,
                                  width: "50px",
                                  textAlign: "center",
                                  border: "3px solid #000000",
                                }}
                              >
                                {t("Id")}
                              </th>
                              <th
                                style={{
                                  height: 25,
                                  width: "300px",
                                  textAlign: "center",
                                  border: "3px solid #000000",
                                }}
                              >
                                {t("Employee")}
                              </th>
                              <th
                                style={{
                                  height: 25,
                                  width: "150px",
                                  textAlign: "center",
                                  border: "3px solid #000000",
                                }}
                              >
                                {t("Basic")}
                              </th>
                              <th
                                style={{
                                  height: 25,
                                  width: "150px",
                                  textAlign: "center",
                                  border: "3px solid #000000",
                                }}
                              >
                                {t("Allowance")}
                              </th>
                              <th
                                style={{
                                  height: 25,
                                  width: "150px",
                                  textAlign: "center",
                                  border: "3px solid #000000",
                                }}
                              >
                                {t("Deduction")}
                              </th>
                              <th
                                style={{
                                  height: 25,
                                  width: "150px",
                                  textAlign: "center",
                                  border: "3px solid #000000",
                                }}
                              >
                                {t("Total")}
                              </th>
                            </tr>
                          </thead>
                        </>
                        <tbody>
                          {this.props.salRep_data
                            ? this.props.salRep_data.map(
                                (repSal, index, array) => {
                                  
            var dateObj = new Date(repSal.created).toLocaleString();
                                  return (
                                    <>
                                      <tr
                                        style={{
                                          background: "",
                                          fontSize: 12,
                                          fontWeight: "bold",
                                          borderBottom: "1px solid #000000",
                                          borderLeft: "3px solid #000000",
                                          borderRight: "3px solid #000000",
                                        }}
                                      >
                                      <td
                                        style={{
                                          height: 25,
                                          width: "150px",
                                          textAlign: "right",
                                          paddingRight: 25,
                                        }}
                                      >
                                        {repSal.created?dateObj.split(",", 1):''}
                                      </td>
                                        <td
                                          style={{
                                            height: 25,
                                            width: "50px",
                                            textAlign: "right",
                                            paddingRight: 25,
                                          }}
                                        >
                                          {repSal.id}
                                        </td>
                                        <td
                                          style={{
                                            height: 25,
                                            width: "300px",
                                            // textAlign: "right",
                                            textAlign: "center",
                                            paddingRight: 0,
                                          }}
                                        >
                                          {repSal.empName.slice(0, 15)}
                                        </td>
                                        <td
                                          style={{
                                            height: 25,
                                            width: "150px",
                                            textAlign: "right",
                                            paddingRight: 25,
                                          }}
                                        >
                                          {repSal.basic}
                                        </td>
                                        <td
                                          style={{
                                            height: 25,
                                            width: "150px",
                                            textAlign: "right",
                                            paddingRight: 25,
                                          }}
                                        >
                                          {" + "}{repSal.allowance}
                                        </td>
                                        <td
                                          style={{
                                            height: 25,
                                            width: "150px",
                                            textAlign: "right",
                                            paddingRight: 25,
                                          }}
                                        >
                                          {" - "}{repSal.deduction}
                                        </td>
                                        <td
                                          style={{
                                            height: 25,
                                            width: "150px",
                                            textAlign: "right",
                                            paddingRight: 25,
                                          }}
                                        >
                                          {" = "}{repSal.total}
                                        </td>
                                      </tr>
                                    </>
                                  );
                                }
                              )
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div style={{ display: "none" }}>
                    <iframe
                      id="ifmcontentstoprint"
                      title="test ABC"
                      style={{ height: 0, width: 0, position: "absolute" }}
                    ></iframe>
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
    
    salRep_data: state.r_RepSalary.salRep_data,
    member_data: state.r_RepSalary.member_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (token) => {
      dispatch(actionCreator.fetch_Users(token));
    },
    fetch_Salary: (start, end, empNo, token) => {
      dispatch(actionCreator.fetch_Salary(start, end, empNo, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report_Salary);
