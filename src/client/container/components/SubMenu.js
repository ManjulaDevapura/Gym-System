import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Translation } from 'react-i18next';

export default class SubMenu extends Component {
    render() {
        return (
            <Translation>
                {(t, { i18 }) =>
                    <div>
                        <NavLink className='dropdown-item' to={this.props.subMenu1}>{t(`${this.props.subMenuTitle1}`)} </NavLink>
                        {this.props.subMenuTitle2 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu2} >{t(`${this.props.subMenuTitle2}`)} </NavLink> : null}
                        {this.props.subMenuTitle3 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu3} >{t(`${this.props.subMenuTitle3}`)} </NavLink> : null}
                        {this.props.subMenuTitle4 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu4} >{t(`${this.props.subMenuTitle4}`)} </NavLink> : null}
                        {this.props.subMenuTitle5 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu5} >{t(`${this.props.subMenuTitle5}`)} </NavLink> : null}
                        {this.props.subMenuTitle6 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu6} >{t(`${this.props.subMenuTitle6}`)} </NavLink> : null}
                        {this.props.subMenuTitle7 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu7} >{t(`${this.props.subMenuTitle7}`)} </NavLink> : null}
                        {this.props.subMenuTitle8 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu8} >{t(`${this.props.subMenuTitle8}`)} </NavLink> : null}
                        {this.props.subMenuTitle9 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu9} >{t(`${this.props.subMenuTitle9}`)} </NavLink> : null}
                        {this.props.subMenuTitle10 !== undefined ? <NavLink className='dropdown-item' to={this.props.subMenu10} >{t(`${this.props.subMenuTitle10}`)} </NavLink> : null}
                    </div>}
            </Translation>
        )
    }
}
