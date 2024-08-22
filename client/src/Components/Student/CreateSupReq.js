import React, { Component } from 'react';
import axios from 'axios';
import './Allcss.css';
import swal from '@sweetalert/with-react'

export default class CreateSupReq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sname: "",
            sid: "",
            supname: "",
            supemail: ""
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
        const { sname, sid, supname, supemail } = this.state;
        const data = {
            sname: sname,
            sid: sid,
            supname: supname,
            supemail: supemail

        }
        console.log(data)

      const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if ((!email.test(String(supemail)))) {
          swal("Invalid email address !", "Please enter valid email address", "error");
      } else if (sname.length === 0 || sid.length === 0 || supname.length === 0 ||
        supemail.length === 0 ) {
          swal("Please fill all the details")
      }else {

        axios.post("/supreq/save", data).then((res) => {
            let path = "/CSR";
            if (res.data.success) {
                alert("Request Sent Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        sname: "",
                        sid: "",
                        supname: "",
                        supemail: ""

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
                                    <h1 className='anm'>Supervisor Request Form</h1>
                                </center>
                                <br />
                                <br />
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Team Leader's Name</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="sname"
                                        placeholder="Team Leader's Name"
                                        value={this.state.sname}
                                        onChange={this.handleInputChange} />

                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Team Leader's Student ID</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="sid"
                                        placeholder="Team Leader's Student ID"
                                        value={this.state.sid}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Requesting Supervisor's Name</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="supname"
                                        placeholder="Sueprvisor's Name"
                                        value={this.state.supname}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Requesting Supervisor's Email</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="supemail"
                                        placeholder="Supervisor's Email"
                                        value={this.state.supemail}
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






