import Axios from 'axios';
import React, { Component } from 'react'
import './Allcss.css';
import swal from '@sweetalert/with-react'

export default class CreateRegisterRTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupID: "",
            rfield: "",
            rtopic: "",
            tdetails: ""
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
        const { groupID, rfield, rtopic, tdetails } = this.state;
        const data = {
            groupID: groupID,
            rfield: rfield,
            rtopic: rtopic,
            tdetails: tdetails

        }
        console.log(data)
  
      if (groupID.length === 0 || rfield.length === 0 || rtopic.length === 0 ||
        tdetails.length === 0 ) {
            swal("Please fill all the details")
        }else {


        Axios.post("/topicreg/save", data).then((res) => {
            let path = "/CTR";
            if (res.data.success) {
                alert("Request Sent Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        groupID: "",
                        rfield: "",
                        rtopic: "",
                        tdetails: ""

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
                                    <h1 className='anm'>Research Topic Register</h1>
                                </center>
                                <br />
                                <br />
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Group ID</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="groupID"
                                        placeholder="Group ID"
                                        value={this.state.groupID}
                                        onChange={this.handleInputChange} />

                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Research Field</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="rfield"
                                        placeholder="Research Field"
                                        value={this.state.rfield}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Research Topic</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="rtopic"
                                        placeholder="Research Topic"
                                        value={this.state.rtopic}
                                        onChange={this.handleInputChange} />

                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <lable style={{ marginBottom: '5px' }}>Topic Details</lable>
                                    <input type="text"
                                        className="form-control"
                                        name="tdetails"
                                        placeholder="Topic Details"
                                        value={this.state.tdetails}
                                        onChange={this.handleInputChange} />


                                </div>

                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; Register
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
