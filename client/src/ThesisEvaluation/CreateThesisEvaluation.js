import React, { Component } from 'react'
import axios from 'axios'

export default class CreateThesisEvaluation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentgroupid: "",
            marks: "",

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
        const { studentgroupid, marks } = this.state;
        const data = {
            studentgroupid: studentgroupid,
            marks: marks,


        }




        axios.post("/thesisevaluation/save", data).then((res) => {

            if (res.data.success) {
                alert("Thesis Evaluation Done!")
                this.setState(
                    {
                        studentgroupid: "",
                        marks: "",


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
                                        <button className="btn btn-success" ><a href="/dashboard2" style={{ textDecoration: 'none', color: 'white' }}>Dashboad</a> </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br/>
                <center>
                <h1>Add Final Thesis Marks</h1>
                </center>

                <br/>


                <br />
                <div class="card" style={{ width: '50rem', marginLeft: '22%' }}>
                    <div class="card-body">
                        <form>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Student Group ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="studentgroupid"
                                    value={this.state.studentgroupid}
                                    onChange={this.handleInputChange} />

                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Final Thesis Mark:</label>
                                <input type="text"
                                    className="form-control"
                                    name="marks"
                                    value={this.state.marks}
                                    onChange={this.handleInputChange} />

                            </div>
                        </form>
                        <br></br>
                        <center>
                            <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                <i className="far fa-check-square" ></i>
                                &nbsp; save
                            </a>
                        </center>


                    </div>
                </div>
                <br />
                <br />
                <br />

            </div>

        )
    }
}
