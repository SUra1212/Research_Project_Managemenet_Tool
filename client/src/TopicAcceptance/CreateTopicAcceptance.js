import React, { Component } from 'react'
import axios from 'axios'

export default class CreateTopicAcceptance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentgroupid: "",
            topic: "",
            status: "",


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
        const { studentgroupid, topic, status } = this.state;
        const data = {
            studentgroupid: studentgroupid,
            topic: topic,
            status: status,


        }




        axios.post("/topicacceptance/save", data).then((res) => {

            if (res.data.success) {
                alert("Topic Status Added")
                this.setState(
                    {
                        studentgroupid: "",
                        topic: "",
                        status: "",


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
                <h1>Add Topic Status</h1>
                </center>



                <br />
                <div class="card" style={{ width: '50rem', marginLeft: '22%' }}>
                    <div class="card-body">
                        <form>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Student Group ID:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="studentgroupid"
                                    value={this.state.studentgroupid}
                                    onChange={this.handleInputChange} />

                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Topic:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="topic"
                                    value={this.state.topic}
                                    onChange={this.handleInputChange} />

                            </div>


                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Topic Status:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
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
