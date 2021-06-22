import React, { Component } from 'react'
// import "bootstrap";
// import del from '../Images/delete.png';
import update from '../Images/update.png';
import "./Style.css"


class Modal extends Component {

    // popup = () => {
    //     // var buttonDelete = document.getElementById('delete');
    //     // var imgDelete = document.getElementById('imagedelete');
    //     var modal = document.getElementById('id01');
    //     var close = document.getElementById('close');

    //     // When the user clicks anywhere outside of the modal, close it
    //     window.onclick = function (event) {
    //         console.log(event.target)
    //         // if (event.target === buttonDelete || event.target === imgDelete) {
    //         //     modal.style.display = "block";

    //         // } else
    //          if (event.target === close) {
    //             modal.style.display = 'none';
    //         }
    //     }
    // }

    render() {
        return (
            <div id="id01" class="modal" style={{ 'display': this.props.display ? 'content' : 'none' }}>
                <form class="modal-content animate" action="/">
                    <div class="container">
                        <span id='close'
                            class="close" title="Close">&times;</span>
                        {/* <button type="button" class="cancelbtn">Cancel</button> */}
                        <div id='deletedata'>
                            <div className='btnSection'><button style={{ 'background-color': 'transparent' }}><img src={update} alt='update data' /></button></div>
                            <table>
                                <tr>
                                    <td style={{ "border-right": "none" }}>User ID :</td>
                                    <td style={{ "border-right": "none" }}> <span class="psw">{this.props.id}</span></td>
                                </tr>
                                <tr>
                                    <td style={{ "border-right": "none" }}>User Name  :</td>
                                    <td style={{ "border-right": "none" }}> <span id='username' class="psw">{this.props.name}></span></td>
                                </tr>
                                <tr>
                                    <td style={{ "border-right": "none" }}>Machine Id  :</td>
                                    <td style={{ "border-right": "none" }}> <span class="psw">{this.props.machineId}</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Modal
