import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import axios from 'axios';

class StudentGH extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }


  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("/sgroup").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    })
  }

  filterData(posts, searchKey) {

    const result = posts.filter((post) =>
      post.sname1.toLowerCase().includes(searchKey) ||
      post.sid1.toLowerCase().includes(searchKey) ||
      post.semail1.toLowerCase().includes(searchKey)
    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/sgroup").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    const { user } = this.props.auth;
    return (

      <div>
        <nav class="navbar b">
          <div class="container">
            <form class="d-flex nav1 " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
              &nbsp;
              <button class="btn btn-outline-warning " type="submit">
                Search</button>
            </form>
            <a class="navbar-brand" href="#">
            </a>
          </div>
        </nav>
        <br />
        <nav class="navbar navbar-expand-lg nav" style={{marginTop:'2%'}}>
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
          <br/>
        <center>
          <h1>Group Leaders Details</h1>
        </center>
        <br />
        <br />
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="table-primary" scope="col">#</th>
              <th class="table-primary" scope="col">Name</th>
              <th class="table-primary" scope="col">Registration Number</th>
              <th class="table-primary" scope="col">Email</th>
              <th class="table-primary" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td> {posts.sname1}</td>
                <td>{posts.sid1}</td>
                <td>{posts.semail1}</td>
                <td>
                  <a className="btn btn-warning text-dark" href={`/APM/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Allocate panel member
                  </a>
                </td>



              </tr>

            ))}
          </tbody>

        </table>
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

StudentGH.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(StudentGH);
