import React, { Component } from 'react'
import axios from 'axios'
import './Allcss.css';
import swal from '@sweetalert/with-react'

export default class CreateStudentGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sname1: "",
            sid1: "",
            semail1: "",
            sname2: "",
            sid2: "",
            semail2: "",
            sname3: "",
            sid3: "",
            semail3: "",
            sname4: "",
            sid4: "",
            semail4: "",
            dp: null
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();
        const { sname1, sid1, semail1, sname2, sid2, semail2, sname3, sid3, semail3, sname4, sid4, semail4 } = this.state;
        const data = {
            sname1: sname1,
            sid1: sid1,
            semail1: semail1,
            sname2: sname2,
            sid2: sid2,
            semail2: semail2,
            sname3: sname3,
            sid3: sid3,
            semail3: semail3,
            sname4: sname4,
            sid4: sid4,
            semail4: semail4
        }

        console.log(data)

        this.setState(
            {
                sname1: "Umaya Ekanayake",
                sid1: "IT20252236",
                semail1: "it20252236@my.sliit.com",
                sname2: "Surath Chathuranga",
                sid2: "IT20135898",
                semail2: "it20135898@my.sliit.lk",
                sname3: "Anuruddha Ekanayake",
                sid3: "IT20253356",
                semail3: "it20153356@my.sliit.lk",
                sname4: "Subhashani Weerasooriya",
                sid4: "IT20251111",
                semail4: "it20251111@my.sliit.lk"
            }
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { sname1, sid1, semail1, sname2, sid2, semail2, sname3, sid3, semail3, sname4, sid4, semail4 } = this.state;
        const data = {
            sname1: sname1,
            sid1: sid1,
            semail1: semail1,
            sname2: sname2,
            sid2: sid2,
            semail2: semail2,
            sname3: sname3,
            sid3: sid3,
            semail3: semail3,
            sname4: sname4,
            sid4: sid4,
            semail4: semail4
        }
        console.log(data)

        const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if ((!email.test(String(semail1||semail2||semail3||semail4)))) {
          swal("Invalid email address !", "Please enter valid email address", "error");
      } else if (sname1.length === 0 || sid1.length === 0 || semail1.length === 0 ||
        sname2.length === 0 || sid2.length === 0 || semail2.length === 0 || sname3.length === 0 || sid3.length === 0 || semail3.length === 0 ||
        semail4.length === 0 || sid4.length === 0 || semail4.length === 0 ) {
          swal("Please fill all the details")
      }else {



        axios.post("/sgroup/save", data).then((res) => {
            var fd = new FormData();
            fd.append("dp", this.state.dp);
            let path = "/CSG";
            if (res.data.success) {
                alert("Details Saved Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        sname1: "",
                        sid1: "",
                        semail1: "",
                        sname2: "",
                        sid2: "",
                        semail2: "",
                        sname3: "",
                        sid3: "",
                        semail3: "",
                        sname4: "",
                        sid4: "",
                        semail4: ""

                    }
                )
            }
        })
    }
}

    fup(ev) {
        this.setState({ dp: ev.target.files[0] })
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

                <div className='card2'>
                    <div className="card" style={{ width: '70rem' }}>
                        <div class="card-body">
                            <form>
                                <br />
                                <center>
                                    <h1 className='anm'>Register Student group</h1>
                                </center>
                                <br />
                                <br />
                                <div className='row'>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Team Leader's Name</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sname1"
                                            placeholder="Team Leader's Name"
                                            value={this.state.sname1}
                                            onChange={this.handleInputChange} />

                                    </div>

                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Team Leader's Student ID</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sid1"
                                            placeholder="Team Leader's Student ID"
                                            value={this.state.sid1}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Team Leader's Email</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="semail1"
                                            placeholder="Team Leader's Email"
                                            value={this.state.semail1}
                                            onChange={this.handleInputChange} />

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 2 Name</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sname2"
                                            placeholder="Studen Name"
                                            value={this.state.sname2}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 2 ID</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sid2"
                                            placeholder="Student ID"
                                            value={this.state.sid2}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 2 Email</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="semail2"
                                            placeholder="Student Email"
                                            value={this.state.semail2}
                                            onChange={this.handleInputChange} />

                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 3 Name</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sname3"
                                            placeholder="Student name"
                                            value={this.state.sname3}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 3 ID</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sid3"
                                            placeholder="Student ID"
                                            value={this.state.sid3}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 3 Email</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="semail3"
                                            placeholder="Student Email"
                                            value={this.state.semail3}
                                            onChange={this.handleInputChange} />

                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 4 Name</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sname4"
                                            placeholder="Student Name"
                                            value={this.state.sname4}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 4 ID</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="sid4"
                                            placeholder="Student ID"
                                            value={this.state.sid4}
                                            onChange={this.handleInputChange} />

                                    </div>
                                    <div className="col-sm-4 col-form-group" style={{ marginBottom: '15px' }}>
                                        <lable style={{ marginBottom: '5px' }}>Student 4 Email</lable>
                                        <input type="text"
                                            className="form-control"
                                            name="semail4"
                                            placeholder="Student Email"
                                            value={this.state.semail4}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>


                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; save
                                </a>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <button className="btn btn-success btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.btnDemo}>
                                    <i class='fas fa-bookmark'></i>
                                    &nbsp; <b>Demo</b>
                                </button>
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
