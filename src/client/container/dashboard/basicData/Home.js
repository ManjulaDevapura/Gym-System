import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import ReactTable from "react-table";
import i18n from "i18next";

import GymSIgn from "../../Images/Gym1.gif";
import GymSIgn2 from "../../Images/Gym2.gif";


import { Row, Col, Button, CardHeader, Card, CardBody, Progress, TabContent, TabPane } from 'reactstrap';
import { BarChart, Bar, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, ComposedChart, CartesianGrid, XAxis, YAxis, Label, Tooltip, ReferenceLine, Line, AreaChart, Area } from 'recharts';

import CustomizedAxisTick from '../../components/CustomizedAxisTick';
import * as actionCreator from "../../../actions/Basic_Data/Home/Home_action";
import TextArea from "antd/lib/input/TextArea";
const Table = lazy(() => import("./HomeTable/Member_Payment_Table"));

class Gym extends Component {


  constructor(props) {
    super(props);
    this.state = {
      
      columns: [
        {
          Header: `${i18n.t("ID")}`,
          accessor: "id",
          width: 50,
          maxWidth: 50,
          minWidth: 50,
        },
        {
          Header: `${i18n.t("Name")}`,
          accessor: "name",
        },
        {
          Header: `${i18n.t("Amount")}`,
          accessor: "amount",
        },
        {
          Header: `${i18n.t("Period- Days")}`,
          accessor: "period",
          width: 200,
        },
        {
          Header: `${i18n.t("Type")}`,
          accessor: "type",
          width: 200,
        },
        {
          Header: `${i18n.t("Validity")}`,
          accessor: "expired",
          Cell: (row) => {
            if (parseInt(row.original.expired) === 1) {
              return <span style={{color: 'red', fontWeight: 'bold'}}>Expired</span>;
            } else if (parseInt(row.original.expired) === 0) {
              return <span>Valid</span>;
            } else {
              return <></>;
            }
          },
        },
      ],
    };
  }

  componentDidMount() {
    this.props.activeUsersCount(this.props.token);
    this.props.instructorsCount(this.props.token);
    this.props.packagesCount(this.props.token);
    
    this.props.lastWeekCount(this.props.token);
    this.props.getpackageWiseCount(this.props.token);
    
    this.props.fetch_Users(this.props.id, this.props.token);
    this.props.fetch_Diet(this.props.id, this.props.token);
    this.props.fetch_Body(this.props.id, this.props.token);
    this.props.fetch_Excercise(this.props.id, this.props.token);
  }

  render() {

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#8884d8", "#a832a4"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const typeFix = 4;
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <div className="basicdata">
            {parseInt(this.props.type_id)!=typeFix?<>
              <div className="card mb3">
                <div className="card-body">
                  <div className="table">
                    <Suspense fallback={<div>Loading....</div>}>
                    {/* <div>
                      <img src={GymSIgn2} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                      <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                      <img src={GymSIgn2} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                    </div> */}

                    <div>
                      
                        <div className='row' >
                            <div className='col-lg-4'>
                              <div className="card bg-primary text-white" style={{ }}><div className="card-body">
                                <span style={{/*border: "thick solid #0000FF",*/ fontWeight: "bold", fontSize: 20}}>Members: {this.props.todayCount}{" / "}{this.props.activeCount}{" "}</span></div>
                            </div></div>
                            <div className='col-lg-4'>
                              <div className="card bg-dark  text-white" style={{ }}><div className="card-body">
                                <span style={{/*border: "thick solid #0000FF",*/ fontWeight: "bold", fontSize: 20}}>Instructors: {this.props.instructors}</span></div>
                            </div></div>
                            <div className='col-lg-4'>
                              <div className="card bg-warning text-white" style={{ }}><div className="card-body">
                                <span style={{/*border: "thick solid #0000FF",*/ fontWeight: "bold", fontSize: 20}}>Packages: {this.props.packages}</span></div>
                                </div></div>
                        </div>
                            </div>
                    </Suspense>
                            </div>
                        </div>
                        </div>
                            <div><pre>
                              </pre></div>

                        <div className="" >
                        <div className="card mb3" >
                <div className="card-body" >
                  <div className="table">
                  <div className='row' >
                            <div className='col-lg-6' style={{ height: 375 }}>
                              <div className="card bg text-white" style={{  }}>
                <div className="card-header bg-secondary"><span>Last week Attendence</span></div>
                <div className="card-body">
                              <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={700}
          height={800}
          data={this.props.lastWeekCount_Data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="created" scale="point" padding={{ left: 10, right: 10 }} >
                                                    <Label value="Day" offset={9} position="bottom" />
                                                </XAxis>
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          {/* <CartesianGrid strokeDasharray="3 3" />#8884d8 */}
          <Bar dataKey="Count" fill="#d90000" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
                                </div>
                            </div></div>
                            <div className='col-lg-6' style={{ height: 375 }}>
                              <div className="card bg text-white" style={{ }}>
                <div className="card-header bg-secondary"><span>Membership per Package</span></div>
                <div className="card-body">
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
                                </div>
                            </div></div>
                        </div>





                        <div className='row' >
                            <div className='col-lg-6 col-md-12'>
                              <div id='' className='card-body zoom'> 
                              
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                              {/* <span>Members: </span>        16 */}
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </>:<div></div>
        }






















{parseInt(this.props.type_id)===typeFix?
              <div className="card mb3">
                <div className="card-body">
                  <div className="table">
                    <p style={{ fontSize:20, fontWeight: 'bolder' }}>Member Details</p>
                  <div id="" style={{ paddingLeft: 30 }}>
                      <table style={{ width: '100%' }}>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold', width: 125 }}>Id :</td>
                            <td>{this.props.user_data.id}</td>
                            <td style={{ fontWeight: 'bold', width: 125 }}>Nic :</td>
                            <td>{this.props.user_data.nic}</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold' }}>Name :</td>
                            <td>{this.props.user_data.name}</td>
                            <td style={{ fontWeight: 'bold' }}>Status :</td>
                            <td>{parseInt(this.props.user_data.activity)===1?'Active':'Inactive'}</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold' }}>Address :</td>
                            <td>{this.props.user_data.address}</td>
                            <td style={{ fontWeight: 'bold' }}>E-mail :</td>
                            <td>{this.props.user_data.email}</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold' }}>Gender :</td>
                            <td>{parseInt(this.props.user_data.sex)===1?'Male':'Female'}</td>
                            <td style={{ fontWeight: 'bold' }}>Birth Day :</td>
                            <td>{this.props.user_data.dob}</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold' }}>Mobile :</td>
                            <td>{this.props.user_data.mobile}</td>
                            <td style={{ fontWeight: 'bold' }}>Instructor :</td>
                            <td>{this.props.user_data.instructor}</td>
                          </tr>
                        </tbody>
                      </table>
<br/>
                      <table style={{ width: '100%' }}>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{width: '100%', backgroundColor: '#045a6e', color:'white' }}>
                            <td style={{ fontWeight: 'bold' }} colSpan={4}>Payment History</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="table-responsive">
                    <Suspense fallback={<div>Loading....</div>}>
                      <Table />
                    </Suspense>
                  </div>
<br/>
                      <table style={{ width: '100%' }}>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{width: '100%', backgroundColor: '#045a6e', color:'white' }}>
                            <td style={{ fontWeight: 'bold' }} colSpan={4}>Meal Plan</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold' }}>Description :</td>
                            <td style={{ fontWeight: 'bold' }}>Breakfast :</td>
                            <td style={{ fontWeight: 'bold' }}>Lunch :</td>
                            <td style={{ fontWeight: 'bold' }}>Dinner :</td>
                          </tr>
{this.props.diet_data?
                          <tr style={{ width: '100%' }}>
                            <td style={{  }}><TextArea style={{ width: '90%', height:200 }} disabled value={this.props.diet_data.description}></TextArea></td>
                            <td style={{  }}><TextArea style={{ width: '90%', height:200 }} disabled value={this.props.diet_data.breakfast}></TextArea></td>
                            <td style={{  }}><TextArea style={{ width: '90%', height:200 }} disabled value={this.props.diet_data.lunch}></TextArea></td>
                            <td style={{  }}><TextArea style={{ width: '90%', height:200 }} disabled value={this.props.diet_data.dinner}></TextArea></td>
                          </tr>
                          :<tr></tr>}
                        </tbody>
                      </table>

                      <br/>
                      <table style={{ width: '100%' }}>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{width: '100%', backgroundColor: '#045a6e', color:'white' }}>
                            <td style={{ fontWeight: 'bold' }} >Body Report</td>
                          </tr>
                          <tr><td style={{ }} >
                          <ResponsiveContainer  width="100%" height={350}>
        <ComposedChart
          width={500}
          height={400}
          data={this.props.body_data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="new" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="old" stroke="#ff7300" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
      </ResponsiveContainer>
                            
                            </td>
                          </tr>
                        </tbody>
                      </table>


                      <br/>
                      <table style={{ width: '100%' }}>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{width: '100%', backgroundColor: '#045a6e', color:'white' }}>
                            <td style={{ fontWeight: 'bold' }} colSpan={4}>Excercise Plan</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{ fontWeight: 'bold' }}>Description :</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            <td style={{  }}><TextArea style={{ width: '90%', height:200 }} disabled value={this.props.excercise_data.description}></TextArea></td>
                          </tr>
                        </tbody>
                      </table>


                      <br/>
                      <table style={{ width: '100%' }}>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{width: '100%', backgroundColor: '#045a6e', color:'white' }}>
                            <td style={{ fontWeight: 'bold', textAlign: 'center' }} colSpan={4}>Packages Available</td>
                          </tr>
                          <tr style={{ width: '100%' }}>
                            
              <ReactTable
                data={this.props.dataSet}
                pages={this.props.pageNo}
                loading={this.props.loading}
                defaultPageSize={5}
                className="-striped -highlight"
                manual
                onFetchData={(state, instance) => {
                  this.props.fetch_Packages(state, this.props.token);
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
                          </tr>
                        </tbody>
                      </table>



                  </div>
                  </div>
                  </div>
                  </div>
                  :null}



            </div>
          </div>
        )}
      </Translation>
    );
  }
}
const mapStateToProps = state => {
  return {
    // isLoggedIn: state.rLogin.isLoggedIn,
    token: state.rLogin.token,
    
    // name: state.rLogin.name,
    id: state.rLogin.id,
    type_id: state.rLogin.type_Id,
    
    activeCount: state.r_Home.activeCount,
    todayCount: state.r_Home.todayCount,
    instructors: state.r_Home.instructors,
    packages: state.r_Home.packages,
    lastWeekCount_Data: state.r_Home.lastWeekCount,
    packageWiseCount: state.r_Home.packageWiseCount,
    user_data: state.r_Home.user_data,
    diet_data: state.r_Home.diet_data,
    body_data: state.r_Body.body_data,
    excercise_data: state.r_Excercise.excercise_data,
    
    dataSet: state.r_Packages.package_data,
    pageNo: state.r_Packages.pageNo,
    loading: state.r_Packages.loading,
    tbl_State: state.r_Packages.state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    activeUsersCount: (token) => {
      dispatch(actionCreator.activeUsersCount(token));
    },
    instructorsCount: (token) => {
      dispatch(actionCreator.instructorsCount(token));
    },
    packagesCount: (token) => {
      dispatch(actionCreator.packagesCount(token));
    },
    lastWeekCount: (token) => {
      dispatch(actionCreator.lastWeekCount(token));
    },
    getpackageWiseCount: (token) => {
      dispatch(actionCreator.getpackageWiseCount(token));
    },
    fetch_Users: (id, token) => {
      dispatch(actionCreator.fetch_Users(id, token));
    },
    fetch_Diet: (id, token) => {
      dispatch(actionCreator.fetch_Diet(id, token));
    },
    fetch_Body: (id, token) => {
      dispatch(actionCreator.fetch_Body(id, token));
    },
    fetch_Excercise: (id, token) => {
      dispatch(actionCreator.fetch_Excercise(id, token));
    },
    fetch_Packages: (state, token) => {
      dispatch(actionCreator.fetch_Packages(state, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gym);
