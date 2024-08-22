import React, { Component } from 'react'
import axios from 'axios'

export default class CreateMS extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MSname: "",
            SRL: "",
            SRLMM: "",
            SRLW: "",
            SRF: "",
            SRFMM: "",
            SRFW: "",
            A1R: "",
            A1RMM: "",
            A1RW: "",
            A2R: "",
            A2RMM: "",
            A2RW: "",
            OPA1: "",
            OPA1MM: "",
            OPA1W: "",
            OPA2: "",
            OPA2MM: "",
            OPA2W: ""
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
        const { MSname, SRL, SRLMM, SRLW, SRF, SRFMM, SRFW, A1R, A1RMM, A1RW, A2R, A2RMM, A2RW, OPA1, OPA1MM, OPA1W, OPA2, OPA2MM, OPA2W } = this.state;
        const data = {
            MSname: MSname,
            SRL: SRL,
            SRLMM: SRLMM,
            SRLW: SRLW,
            SRF: SRF,
            SRF: SRF,
            SRFMM: SRFMM,
            SRFW: SRFW,
            A1R: A1R,
            A1RMM: A1RMM,
            A1RW: A1RW,
            A2R: A2R,
            A2RMM: A2RMM,
            A2RW: A2RW,
            OPA1: OPA1,
            OPA1MM: OPA1MM,
            OPA1W: OPA1W,
            OPA2: OPA2,
            OPA2MM: OPA2MM,
            OPA2W: OPA2W
        }
        console.log(data)


        this.setState(
            {
                MSname: "Presentaion 01 Marking Schema",
                SRL: "Supervisor report-literature review",
                SRLMM: "70",
                SRLW: "5.0%",
                SRF: "Supervisor report-final ",
                SRFMM: "100",
                SRFW: "30.0%",
                A1R: "Assessor 1 report",
                A1RMM: "100",
                A1RW: "22.5%",
                A2R: "Assessor 2 report",
                A2RMM: "100",
                A2RW: "22.5%",
                OPA1: "Oral presentation-Assessor 1",
                OPA1MM: "30",
                OPA1W: "10.0%",
                OPA2: "Oral presentation-Assessor 2",
                OPA2MM: "30",
                OPA2W: "10.0%"

            }
        )

    }

    onSubmit = (e) => {
        e.preventDefault();
        const { MSname, SRL, SRLMM, SRLW, SRF, SRFMM, SRFW, A1R, A1RMM, A1RW, A2R, A2RMM, A2RW, OPA1, OPA1MM, OPA1W, OPA2, OPA2MM, OPA2W } = this.state;
        const data = {
            MSname: MSname,
            SRL: SRL,
            SRLMM: SRLMM,
            SRLW: SRLW,
            SRF: SRF,
            SRF: SRF,
            SRFMM: SRFMM,
            SRFW: SRFW,
            A1R: A1R,
            A1RMM: A1RMM,
            A1RW: A1RW,
            A2R: A2R,
            A2RMM: A2RMM,
            A2RW: A2RW,
            OPA1: OPA1,
            OPA1MM: OPA1MM,
            OPA1W: OPA1W,
            OPA2: OPA2,
            OPA2MM: OPA2MM,
            OPA2W: OPA2W
        }

        // console.log(data)
        // const SenderContact = /^[0-9\b]+$/;
        // const ReceiverContact = /^[0-9\b]+$/;
        // const ReceiverEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const SenderEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // if ((!SenderContact.test(String(senderContact))) || (senderContact.length != 10)) {
        //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        // } else if ((!ReceiverContact.test(String(receiverContact))) || (receiverContact.length != 10)) {
        //     swal("Invalid Contact Number !", "contact number should be valid pattern", "error");
        // } else if ((!ReceiverEmail.test(String(receiverEmail)))) {
        //     swal("Invalid email address !", "Please enter valid email address", "error");
        // } else if ((!SenderEmail.test(String(senderEmail)))) {
        //     swal("Invalid email address !", "Please enter valid email address", "error");
        // } else if (serialNumber.length === 0 || receiverName.length === 0 || receiverContact.length === 0 ||
        //     receiverEmail.length === 0 || receiverAddress.length === 0 || senderName.length === 0 || senderContact.length === 0 ||
        //     senderEmail.length === 0 || senderAddress.length === 0 || pNo.length === 0 || pType.length === 0 || pWeight.length === 0 || pShippingCost.length === 0) {
        //     swal("Please fill all the details")
        // }else {


        axios.post("/ms/save", data).then((res) => {
            let path = "/CMS";
            if (res.data.success) {
                alert("Details Saved Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        MSname: "",
                        SRL: "",
                        SRLMM: "",
                        SRLW: "",
                        SRF: "",
                        SRFMM: "",
                        SRFW: "",
                        A1R: "",
                        A1RMM: "",
                        A1RW: "",
                        A2R: "",
                        A2RMM: "",
                        A2RW: "",
                        OPA1: "",
                        OPA1MM: "",
                        OPA1W: "",
                        OPA2: "",
                        OPA2MM: "",
                        OPA2W: ""

                    }
                )
            }
        })
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
                                        <button className="btn btn-success" ><a href="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboad</a> </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='card'>
                    <div className="card" style={{ width: '85rem', marginLeft: '6%', marginTop: '3%' }}>
                        <div class="card-body">
                            <form>
                                <br />
                                <center>
                                    <h1 className='anm'>Create Marking Schema</h1>
                                </center>
                                <br />
                                <div className="col-sm-7 col-form-group" style={{ marginBottom: '5px' }}>
                                    <lable style={{ marginBottom: '5px' }}><h4>Marking schema Name</h4></lable>
                                    <input type="text"
                                        className="form-control"
                                        name="MSname"
                                        placeholder='Enter Marking Schema Name'
                                        value={this.state.MSname}
                                        onChange={this.handleInputChange} />

                                </div>
                                <br />
                                <div className='row'>
                                    <h4 style={{ marginLeft: '2%' }}>Assessment</h4>
                                    <h4 style={{ marginLeft: '24%' }}>Maximum Mark</h4>
                                    <h4 style={{ marginLeft: '21%' }}>Weighting</h4>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col'>
                                        <div className="col-sm-9 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="SRL"
                                                value={this.state.SRL}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px', }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="SRLMM"
                                                value={this.state.SRLMM}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="SRLW"
                                                value={this.state.SRLW}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="col-sm-9 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="SRF"
                                                value={this.state.SRF}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px', }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="SRFMM"
                                                value={this.state.SRFMM}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="SRFW"
                                                value={this.state.SRFW}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="col-sm-9 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="A1R"
                                                value={this.state.A1R}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px', }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="A1RMM"
                                                value={this.state.A1RMM}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="A1RW"
                                                value={this.state.A1RW}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="col-sm-9 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="A2R"
                                                value={this.state.A2R}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px', }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="A2RMM"
                                                value={this.state.A2RMM}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="A2RW"
                                                value={this.state.A2RW}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="col-sm-9 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="OPA1"
                                                value={this.state.OPA1}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px', }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="OPA1MM"
                                                value={this.state.OPA1MM}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="OPA1W"
                                                value={this.state.OPA1W}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="col-sm-9 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="OPA2"
                                                value={this.state.OPA2}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px', }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="OPA2MM"
                                                value={this.state.OPA2MM}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="col-sm-6 col-form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}></lable>
                                            <input type="text"
                                                className="form-control"
                                                name="OPA2W"
                                                value={this.state.OPA2W}
                                                onChange={this.handleInputChange} />

                                        </div>
                                    </div>
                                </div>



                            </form>
                            <br></br>
                            <center>
                                <a className="btn btn-warning btn-lg text-dark" type="submit" onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; save
                                </a>
                                &nbsp;
                                &nbsp;
                                <button className="btn btn-success btn-lg text-dark" type="submit" onClick={this.btnDemo}>
                                    <i class='fas fa-bookmark'></i>
                                    &nbsp; Demo
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
