import React, { Component } from 'react';
import './Allcss.css';


export default class StatusCheck extends Component {
  render() {
    return (
      <div>
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
        <br />
        <center>
          <h1>Check Status</h1>
        </center>
        <br />
        <div class="card" style={{ width: '40rem', marginLeft: '27%' }}>
          <div class="sccontainer">
            Your Topic Has been approved / rejected!
            <p>If your topic got rejected please register for another topic from below </p>


            <button className="btn btn-success"><a href="/CTR" style={{ textDecoration: 'none', color: 'white' }}>Register for Another Topic</a> </button>
            <br />
            <br />
          </div>
        </div>

        <div style={{ marginBottom: '18%' }}></div>
      </div>



    )
  }
}
