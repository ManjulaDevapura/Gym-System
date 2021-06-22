/**
 * @file This file defines for update data for model box table row
 * @author Bhanuka Chathuranga
 */
import React, { Component } from 'react'
import i18n from 'i18next'

export default class TableRow extends Component {
    render() {
        var { title, value } = this.props
        return (
            <tr>
                <td className="form-control-plaintext">{i18n.t(`${title}`)}  :</td>
                <td> <span className="form-control-plaintext text-center">{value}</span></td>
                <td> <input type='text' className="form-control" autoComplete='off' onChange={e => { this.props.changeValue(e.target.value) }} /></td>
            </tr>
        )
    }
}
