import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import logo from "../../../Images/logo.jpg";
import { BarChart, Bar, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, ComposedChart, CartesianGrid, XAxis, YAxis, Label, Tooltip, ReferenceLine, Line, AreaChart, Area } from 'recharts';

import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Report/Report_PackageWiseMembership_action";

class Report_Packages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    $(function () {
      $('[data-toggle="modal"]').tooltip();
    });
    this.props.getpackageWiseCount(this.props.token);
  }

  render() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#8884d8", "#a832a4"];
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <div className="basicdata">
              <div className="card mb3">
                <div className="card-body">
                  <div className="table-responsive">
                    <button
                      className="btn btn-outline-warning"
                      style={{

                      }}
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
                    </button>
                  </div>
<hr/>

                  <div style={{ }}>
                                        <div id={'headerContents'} style={{ display: 'none' }}>
                                            <table style={{ width: '100%' }}>
                                                <tbody>
                                                    <tr style={{}}>
                                                        <td style={{ textAlign: 'left'  }}>
                                                          <div className=""><img src={logo} alt={"loading"} style={{width: 300, height: 200,  }}/></div>
                                                        </td>
                                                        <td style={{ textAlign: 'left', fontSize: 20  }}>
<pre style={{ fontWeight: 'bold', fontSize: 25,  }}>St. Anthony's Fitness Center</pre>  
<pre>47/7, Theresa Mawatha, Kalaeliya, Ja_Ela</pre>  
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
                                            <hr/>
                                            <div style={{ alignContent: 'center', alignItems: 'center', textAlign: '-webkit-center', paddingTop: 25, paddingBottom: 25}}>
                                                <div className='title' style={{ textDecoration: 'underline', height: 25, width: 300, textAlign: 'center', fontWeight: 'bold', alignContent: 'center', alignItems: 'center' }}>
                                                    <span style={{ paddingTop: 10, fontSize: 25 }}>{t('Package wise Attendence Report')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{  }}>
                                        {/* print table */}
                                        <div id={'divcontents'} style={{ paddingTop: 0, }}>
                                            
                                        <ResponsiveContainer width="100%" height={350}>
        <PieChart
          width={700}
          height={800}
        ><Pie
        data={this.props.packageWiseCount}
        cx="50%"
        cy="50%"
        labelLine={true}
        // label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="countValue"
        // label="name"
        label={(entry) => entry.name} 
      ><Tooltip />
        {this.props.packageWiseCount.map((entry, index) => {
          // console.log()
          // console.log("\n\n\n\n\n\n\n\n\n\t Manjula ");
          // console.log(entry)
          // console.log(entry.name)
          // console.log(index)

          return(
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name}>
          <Label value={entry.name} offset={9} position="bottom" />
          </Cell>
        )}
        )}
      </Pie>
        </PieChart>
      </ResponsiveContainer>



                                                <table className='tableClass' style={{ borderCollapse: '3px solid #000000', paddingTop: 50, width:"100%"}} >
                                                    <>
                                                        <thead>
                                                            <tr style={{ background: '', fontWeight: 'bold', borderTop: '3px solid #000000', fontSize: 18 }}>
                                                                <th style={{ height: 25, width: '30px', textAlign: 'center', border: '3px solid #000000', }}>{t('')}</th>
                                                                <th style={{ height: 25, width: '100px', textAlign: 'center', border: '3px solid #000000', }}>{t('Name')}</th>
                                                                <th style={{ height: 25, width: '100px', textAlign: 'center', border: '3px solid #000000', }}>{t('Count')}</th>
                                                            </tr>
                                                        </thead>
                                                    </>
                                                    <tbody>
                                                    {this.props.packageWiseCount ? (
                                                            this.props.packageWiseCount.map((pack, index, array) => {
                                                              return (
                                                                <>
                                                                            <tr style={{ background: '', fontSize: 18, fontWeight: 'bold', borderBottom: '1px solid #000000',borderLeft: '3px solid #000000', borderRight: '3px solid #000000',  }}>
                                                                                <td style={{ height: 25, width: '30px', textAlign: 'center', border: '1px solid #000000', paddingRight: 25, }}>{(index+1)}</td>
                                                                                <td style={{ height: 25, width: '100px', textAlign: 'center', border: '1px solid #000000', paddingLeft: 10, }}>{pack.name}</td>
                                                                                <td style={{ height: 25, width: '100px', textAlign: 'center', border: '1px solid #000000', paddingRight: 10, }}>{pack.countValue}</td>
                                                                            </tr>
</>)
                                                            })
                                                    ):null}


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
    
    packageWiseCount: state.r_Home.packageWiseCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getpackageWiseCount: (token) => {
      dispatch(actionCreator.getpackageWiseCount(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report_Packages);
