import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'

export default class AllocatePanelM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }


  componentDidMount() {

    const id = this.props.match.params.id;

    axios.get(`/sgroup/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });

        console.log(this.state.post);
      }
    });
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
    const { SGNumber, SGleader, AllocateName, AllocateEmail } = this.state;
    const data = {
      SGNumber: SGNumber,
      SGleader: SGleader,
      AllocateName: AllocateName,
      AllocateEmail: AllocateEmail
    }
    console.log(data)

    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((!email.test(String(AllocateEmail)))) {
        swal("Invalid email address !", "Please enter valid email address", "error");
    } else if (SGNumber.length === 0 || SGleader.length === 0 || AllocateName.length === 0) {
        swal("Please fill all the details")
    }else {
 

    axios.post("/allocate/save", data).then((res) => {
      let path = "/SGH";
      if (res.data.success) {
        alert("Successfully Allocate Panel Member")
        this.props.history.push(path);
        this.setState(
          {
            SGNumber: "",
            SGleader: "",
            AllocateName: "",
            AllocateEmail: ""

          }
        )
      }
    })
  }
  }
  
  render() {

    const { sname1, sid1, semail1 } = this.state.post;
    return (
      <div>
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
        <div class="card" style={{ width: "60rem", marginLeft: '16%', marginTop: '5%' }}>
          <div class="card-body">
            <center>
              <h1>Allocate Panel Member</h1>
            </center>
            <br />
            <br />
            <form>

              <label>Leader Name</label>
              <input className="form-control" type="text" placeholder={sname1} aria-label="Disabled input example" disabled></input>

              <label>Leader Registration Number</label>
              <input className="form-control" type="text" placeholder={sid1} aria-label="Disabled input example" disabled></input>

              <label>Leader Email</label>
              <input className="form-control" type="text" placeholder={semail1} aria-label="Disabled input example" disabled></input>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <lable style={{ marginBottom: '5px' }}>Group Number</lable>
                <input type="text"
                  className="form-control"
                  name="SGNumber"
                  placeholder="Group Number"
                  value={this.state.SGNumber}
                  onChange={this.handleInputChange} />

              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <lable style={{ marginBottom: '5px' }}>Group Leader IT Number</lable>
                <input type="text"
                  className="form-control"
                  name="SGleader"
                  placeholder="Group Leader IT Number"
                  value={this.state.SGleader}
                  onChange={this.handleInputChange} />

              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <lable style={{ marginBottom: '5px' }}>Panel Member Name</lable>
                <input type="text"
                  className="form-control"
                  name="AllocateName"
                  placeholder="Panel Member Name"
                  value={this.state.AllocateName}
                  onChange={this.handleInputChange} />

              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <lable style={{ marginBottom: '5px' }}>Panel Member Email</lable>
                <input type="text"
                  className="form-control"
                  name="AllocateEmail"
                  placeholder="Panel Member Email"
                  value={this.state.AllocateEmail}
                  onChange={this.handleInputChange} />

              </div>
              <center>
                <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far fa-check-square" ></i>
                  &nbsp; Allocate
                </a>
              </center>
            </form>


          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )

  }

}

