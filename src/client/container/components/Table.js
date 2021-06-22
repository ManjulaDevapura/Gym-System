import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Modal from './Modal'
import del from '../Images/delete.png';
import update from '../Images/update.png';
import updateData from '../Images/updateData.png';
import './Style.css'

class Table extends Component {

    popup = (type, id, name, machineId) => {
        var btnUpdate = document.getElementById('update');
        var btnDelete = document.getElementById('delete');
        var imgUpdate = document.getElementById(id);
        var imgDelete = document.getElementById(`deleteId:${id}`);
        var modal = document.getElementById('id01');
        var close = document.getElementById('close');
        var deleteData = document.getElementById('deletedata');
        var updateData = document.getElementById('updatedata');

        console.log(imgDelete);

        // var operator = { id: id, name: name, machineId: machineId }
        this.props.updateData(id, name, machineId);
        // if (type === 'update') {
        window.onclick = function (event) {
            // event.preventDefault();
            console.log(event.target)
            if (event.target === btnUpdate || event.target === imgUpdate || event.target === btnDelete || event.target === imgDelete) {
                modal.style.display = "block";
                if (type === 'delete') {
                    console.log('delete');
                    updateData.style.display = 'none';
                    deleteData.style.display = 'contents';
                } else if (type === 'update') {
                    updateData.style.display = 'contents';
                    deleteData.style.display = 'none';
                }
            } else if (event.target === close) {
                modal.style.display = 'none';
            }
        }
        // }
        // if (type === 'delete') {
        //     window.onclick = function (event) {
        //         // event.preventDefault();
        //         console.log(event.target)
        //         if (event.target === btnDelete || event.target === imgDelete) {
        //             modal.style.display = "block";
        //         } else if (event.target === close) {
        //             modal.style.display = 'none';
        //         }
        //     }
        // }

        // console.log(this.props.name);
        // console.log(operator.Name);
        // When the user clicks 


    }

    render() {

        const data = this.props.data;

        return (
            <div>
                <table>
                    <tr>
                        <th>Operator Id</th>
                        <th>Name</th>
                        <th>Machine Id</th>
                        {/* <th>Points</th> */}
                    </tr>

                    {data.map((operator) => {
                        return (

                            <tr>
                                <td>{operator.id}</td>
                                <td>{operator.name}</td>
                                <td>{operator.location_id}</td>
                                <td><button id='update' class="btn" onClick={() => { this.popup('update', operator.id, operator.name, operator.location_id) }}><img id={operator.id} src={update} alt='update' /></button></td>
                                <td><button id='delete' class="btn" onClick={() => { this.popup('delete', operator.id, operator.name, operator.location_id) }}><img id={`deleteId:${operator.id}`} src={del} alt='delete' /></button></td>
                            </tr>

                        )
                    })}
                </table>
                <div id="id01" class="modal">

                    <form class="modal-content animate" action="/">
                        <div class="container">
                            <span id='close'
                                class="close" title="Close">&times;</span>
                            {/* <button type="button" class="cancelbtn">Cancel</button> */}
                            <div id='deletedata'>
                                <div className='btnSection'><button style={{ 'background-color': 'transparent' }}><img src={del} alt='delete data' /></button></div>
                                <table>
                                    <tr>
                                        <td style={{"border-right": "none"}}>User ID :</td>
                                        <td style={{"border-right": "none"}}> <span class="psw">{this.props.id}</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{"border-right": "none"}}>User Name  :</td>
                                        <td style={{"border-right": "none"}}> <span id='username' class="psw">{this.props.name}</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{"border-right": "none"}}>Machine Id  :</td>
                                        <td style={{"border-right": "none"}}> <span class="psw">{this.props.machineId}</span></td>
                                    </tr>
                                </table>
                            </div>

                            <div id='updatedata'>
                                <div className='btnSection'><button style={{ 'background-color': 'transparent' }}><img src={updateData} alt='update data' /></button></div>
                                <table className='updatetable'>
                                    <tr>
                                        <td style={{"border-right": "none"}}>User ID :</td>
                                        <td style={{"border-right": "none"}}> <input type='text' class="psw" value={this.props.id} /></td>
                                    </tr>
                                    <tr>
                                        <td style={{"border-right": "none"}}>User Name  :</td>
                                        <td style={{"border-right": "none"}}>  <input type='text' class="psw" value={this.props.name} /></td>
                                    </tr>
                                    <tr>
                                        <td style={{"border-right": "none"}}>Machine Id  :</td>
                                        <td style={{"border-right": "none"}}> <input type='text' class="psw" value={this.props.machineId} /></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.rBasicDataOperator.id,
        name: state.rBasicDataOperator.name,
        machineId: state.rBasicDataOperator.machineId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (id, name, machineId) => { dispatch({ type: 'UPDATE_DATA', id: id, name: name, machineId: machineId }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)