import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard2 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (

      <div className=''>
             <button  style={{marginLeft:'90%', marginTop:'2.5%'}}
                      onClick={this.onLogoutClick}
                      className="btn btn-lg btn-warning "
                    >
                      Logout
                    </button>
        <div>
          <center>
            <h1 style={{marginTop:'-3%'}} className='backw1'>Supervisor Dashboard</h1>
          </center>
          <img className='backw' src='./system.jpg' />
          <img className='backwo' src='./system.jpg' />
     
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                 
                  <li>
                    <button className="btn btn-success"><a href="/SUV" style={{ textDecoration: 'none', color: 'white', }}>Student Uploads</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                  <li class="nav-item ">
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='mern1'>

<div className='row' style={{marginLeft:'40%', marginTop:'3%'}}>
<div class="card" style={{width:'20rem'}} >
<div class="card-body">
<i class='fas'><h4><b>&#xf044; Quick Links</b></h4></i>
<br/><br/>
<p> <a href="/addstatus">Add Topic Status</a></p>
<p> <a href="/supervisorstatus">View Topic Status</a></p>
<p> <a href="/addthesisevaluation">Add Thesis Evaluation</a></p>
<p> <a href="/supervisorthesisevaluation">View Thesis Evaluation</a></p>

</div>
</div>
</div>

   </div>
  </div>
</div>
    );
  }
}

Dashboard2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard2);
