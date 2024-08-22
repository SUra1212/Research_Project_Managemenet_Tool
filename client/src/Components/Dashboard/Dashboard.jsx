import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
        isShown: true,
    }
}

toggleIsShown = () => this.setState(({isShown}) => ({ isShown: !isShown}));

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (

      <div >
        <div>
          <center>
            <h1 className='backw1'>Wellcome To Admin</h1>
          </center>
          <img className='backw' src='./system.jpg' />
          <img className='backwo' src='./system.jpg' />
          <button style={{marginLeft:'90%', marginTop:'-14%'}}
            onClick={this.onLogoutClick}
            className="btn btn-lg btn-warning "
          >
            Logout
          </button>
          <nav class="navbar navbar-expand-lg nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <button className="btn btn-success"><a href="/SGH" style={{ textDecoration: 'none', color: 'white' }}>Allocate Panel Member</a> </button>
                  </li>
                  <li>
                    <button onClick={this.toggleIsShown} className="btn btn-success"><a href="/UH" style={{ textDecoration: 'none', color: 'white', }}>All Users</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li>
                    <button className="btn btn-success"><a href="/CMS" style={{ textDecoration: 'none', color: 'white' }}>Create Marking Schema</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li>
                    <button className="btn btn-success"><a href="/AdminUpload" style={{ textDecoration: 'none', color: 'white' }}>Upload Files</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li>
                    <button className="btn btn-success"><a href="/SUV" style={{ textDecoration: 'none', color: 'white' }}>Download Files</a> </button>
                  </li>
                  &nbsp; &nbsp; &nbsp;
                  <li class="nav-item ">
                  </li>
                </ul>

              </div>
            </div>
          </nav>
          <div className='mern'>
          <div className='row' style={{marginTop: '6%', marginBottom: '8%', marginLeft:'8%'}}>
          <div className='col'>
              <div class="card" style={{ width: '18rem' }}>
                  <img src="./PanelSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">Panel Member</h5>
                      <br/><br/>
                      <a href="/dashboard3" class="btn btn-primary">Panel Member</a>&nbsp;
                  </div>
              </div>
          </div>

          <div className='col'>
              <div class="card" style={{ width: '18rem' }}>
                  <img src="./StuSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">Student</h5>
                      <br/><br/>
                      <a href="/dashboard1" class="btn btn-primary">Student</a>&nbsp;
                  </div>
              </div>
          </div>

          <div className='col'>
              <div class="card" style={{ width: '18rem' }}>
                  <img src="./SupervSign.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">Supervisor/Co-supervisor</h5>
                      <br/><br/>
                      <a href="/dashboard2" class="btn btn-primary">Supervisor/Co-supervisor</a>&nbsp;
                  </div>
              </div>
          </div>
          </div>

        </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
