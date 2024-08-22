import Axios from 'axios';
import React, { Component } from 'react';
import './Allcss.css';
import swal from '@sweetalert/with-react'

export default class CreateCoSupReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tlsname: "",
            tlsid: "",
            cosupname: "",
            cosupemail: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { tlsname, tlsid, cosupname, cosupemail } = this.state;
        const data = {
            tlsname: tlsname,
            tlsid: tlsid,
            cosupname: cosupname,
            cosupemail: cosupemail

        }
        console.log(data)

      const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if ((!email.test(String(cosupemail)))) {
          swal("Invalid email address !", "Please enter valid email address", "error");
      } else if (tlsname.length === 0 || tlsid.length === 0 || cosupname.length === 0 ||
        cosupemail.length === 0 ) {
          swal("Please fill all the details")
      }else {


        Axios.post("/cosupreq/save", data).then((res) => {
            let path = "/RCS";
            if (res.data.success) {
                alert("Request Sent Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        tlsname: "",
                        tlsid: "",
                        cosupname: "",
                        cosupemail: ""

                    }
                )
            }
        })
    }

    }
    render() {

        return (
            <div >
                <nav class="navbar navbar-expand-lg nav" style={{ marginTop: '5%' }}>
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <div >
                                        <button className="btn btn-success" ><a href="/dashboard1" style={{ textDecoration: 'none', color: 'white' }}>Dashboad</a> </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='card2' style={{ marginLeft: '15%' }}>
                    <div className="card" style={{ width: '65rem' }}>
                        <div class="card-body">
                            <form>
                                <br />
                                <center>
                                    <h1 className='anm'>Co-Supervisor Request Form</h1>
                                </center>
                                <br />
                                <br />
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Team Leader's Name</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="tlsname"
                                        placeholder="Team Leader's Name"
                                        value={this.state.tlsname}
                                        onChange={this.handleInputChange} />

                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Team Leader's Student ID</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="tlsid"
                                        placeholder="Team Leader's Student ID"
                                        value={this.state.tlsid}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Requesting Co-Supervisor's Name</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="cosupname"
                                        placeholder="Co-Sueprvisor's Name"
                                        value={this.state.cosupname}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Requesting Co-Supervisor's Email</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="cosupemail"
                                        placeholder="Co-Sueprvisor's Email"
                                        value={this.state.cosupemail}
                                        onChange={this.handleInputChange} />

                                </div>

                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; Send Request
                                </a>
                            </center>


                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>


        )
    }
}






