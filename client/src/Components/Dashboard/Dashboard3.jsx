import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard3 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className=''>
        <div>
          <button style={{ marginLeft: '90%', marginTop: '2.5%' }}
            onClick={this.onLogoutClick}
            className="btn btn-lg btn-warning "
          >
            Logout
          </button>
          <center>
            <h1 className='backw12'>Panel Dashboard</h1>
          </center>
          <img className='backw2' src='./system.jpg' />
          <img className='backwo2' src='./system.jpg' />
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <button className="btn btn-success"><a href="#" style={{ textDecoration: 'none', color: 'white' }}>Allocated Panels</a> </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className='mern1'>
            <div className='row' style={{ marginLeft: '40%', marginTop: '3%' }}>
              <div class="card" style={{ width: '20rem' }} >
                <div class="card-body">
                  <i class='fas'><h4><b>&#xf044; Quick Links</b></h4></i>
                  <br /><br />
                  <p> <a href="/presentationPanels">Presentation Panel Member </a></p>
                  <p> <a href="/spresnt">Students Presentations</a></p>
                  <p> <a href="/evaluateTopics">Evaluate Student Topics</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Dashboard3.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard3);
