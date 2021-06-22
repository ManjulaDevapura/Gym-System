import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { connect } from "react-redux";

// import * as actionCreator from '../../actions/navigation_actions'
import { Translation } from 'react-i18next';
import SubMenu from '../components/SubMenu';

// const Navigation = () => {
class Navigation extends Component {

    state = {

    }

    render() {
        return (
            <Translation>
                {(t, { i18n }) =>
                    <ul className='sidebar navbar-nav'>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>{t('Dashboard')}</span>
                            </NavLink>
                        </li>


                        <li className="nav-item dropdown">
                            <NavLink to="/members" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-user"></i>
                                {/* <i class="fas fa-users-cog"></i> */}
                                <span>{t('Members')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/members/view' subMenuTitle1={'All'}
                                    subMenu2='/members/instructor' subMenuTitle2={'Your'}
                                    subMenu3='/members/body' subMenuTitle3={'Body History'}
                                    subMenu4='/members/diet' subMenuTitle4={'Diet History'}
                                    subMenu5='/members/excercise' subMenuTitle5={'Exercise History'}
                                    subMenu6='/members/payment' subMenuTitle6={'Payment History'}
                                />
                            </div>
                        </li>
                        
                        
                        <li className="nav-item dropdown">
                            <NavLink to="/admin" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-crown"></i>
                                <span>{t('Admin')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu 
                                    subMenu1='/admin/userPermission' subMenuTitle1={'User Permissions'}
                                    subMenu2='/admin/package' subMenuTitle2={'Packages'} 
                                    subMenu3='/admin/equipment' subMenuTitle3={'Equipment'}
                                    subMenu4='/admin/duePayment' subMenuTitle4={'Due Payments'}
                                    />
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <NavLink to="/user" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-shield"></i>
                                <span>{t('Users')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/user/admin' subMenuTitle1={'Admin'}
                                    subMenu2='/user/instructor' subMenuTitle2={'Instructor'}
                                />
                            </div>
                        </li> 

                        <li className="nav-item dropdown">
                            <NavLink to="/payment" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-cash-register"></i>
                                <span>{t('Payment')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/payment/member' subMenuTitle1={'Member Payment'}
                                    subMenu2='/payment/expences' subMenuTitle2={'Expences'}
                                    subMenu3='/payment/income' subMenuTitle3={'Income'}
                                    subMenu4='/payment/payType' subMenuTitle4={'Payment Types'}
                                    subMenu5='/payment/employee' subMenuTitle5={'Employee Payment'}
                                />
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <NavLink to="/report" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-book"></i>
                                <span>{t('Report')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    // subMenu1='/report/view' subMenuTitle1={'View'}
                                    subMenu1='/report/message' subMenuTitle1={'Messages'}
                                    subMenu2='/report/attendence' subMenuTitle2={'Attendence'}
                                    subMenu3='/report/packageReport' subMenuTitle3={'Package Report'}
                                    subMenu4='/report/packageWiseReport' subMenuTitle4={'Package Attendence'}
                                    subMenu5='/report/membership' subMenuTitle5={'Membership Report'}
                                    subMenu6='/report/expence' subMenuTitle6={'Expence Report'}
                                    subMenu7='/report/income' subMenuTitle7={'Income Report'}
                                    subMenu8='/report/salary' subMenuTitle8={'Salary Report'}
                                    subMenu9='/report/profit' subMenuTitle9={'Profit Report'}
                                    subMenu10='/report/equipment' subMenuTitle10={'Equipment Report'}
                                    
                                />
                            </div>
                        </li>



















                        {/* <li className="nav-item dropdown">
                            <NavLink to="/inventry" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-industry"></i>
                                <span>{t('Inventry')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/usage/view' subMenuTitle1={'Usage'}
                                    />
                            </div>
                        </li> */}









                       

                        {/* <li className="nav-item dropdown">
                            <NavLink to="/report" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-fw fa-book"></i>
                                <span>{t('Report')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/report/view' subMenuTitle1={'View'}
                                    subMenu2='/report/maintain' subMenuTitle2={'Maintain'}
                                />
                            </div>
                        </li> */}


                        <li className="nav-item dropdown">
                            <NavLink to="/punch" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-tv"></i>
                                <span>{t('Punch')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/punch/allocation' subMenuTitle1={'Add Card'}  />
                            </div>
                        </li>


                        {/* <li className="nav-item dropdown">
                            <NavLink to="/branch" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-house-damage"></i>
                                <span>{t('Branch')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/branch/view' subMenuTitle1={'View'}
                                    subMenu2='/branch/maintain' subMenuTitle2={'Maintain'}
                                />
                            </div>
                        </li> */}

{/* 
                        <li className="nav-item dropdown">
                            <NavLink to="/connection" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-plug"></i>
                                <span>{t('Connection')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/staff/view' subMenuTitle1={'View'}
                                    subMenu2='/staff/maintain' subMenuTitle2={'Maintain'}
                                />
                            </div>
                        </li>
 */}



                        {/* Report menu */}
                        
                    </ul>}
            </Translation>

        )
    }
}


export default Navigation
