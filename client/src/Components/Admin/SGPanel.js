import React, { Component } from 'react';
import axios from 'axios';

export default class SGPanel extends Component {
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
    axios.get("/allocate").then(res => {
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
      post.SGNumber.toLowerCase().includes(searchKey) ||
      post.SGleader.toLowerCase().includes(searchKey) ||
      post.AllocateName.toLowerCase().includes(searchKey) ||
      post.AllocateEmail.toLowerCase().includes(searchKey)
    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/allocate").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
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
        <nav class="navbar navbar-expand-lg nav" style={{marginTop:'5%'}}>
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
        <br/>
        <center>
          <h1>Group Panel Member</h1>
        </center>
        <br/>
        <br/>
        <table class="table">
          <thead>
            <tr>
              <th class="table-primary" scope="col">#</th>
              <th class="table-primary" scope="col">Group Number</th>
              <th class="table-primary" scope="col">Group Leader IT Number</th>
              <th class="table-primary" scope="col">Panel Member</th>
              <th class="table-primary" scope="col">Panel Member Email</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td> {posts.SGNumber}</td>
                <td>{posts.SGleader}</td>
                <td>{posts.AllocateName}</td>
                <td>{posts.AllocateEmail}</td>
                
                {/* <td>
                <a className="btn btn-warning text-dark" href={`/UE/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>&nbsp; &nbsp;
                  <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(posts._id)} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td> */}

              </tr>

            ))}
          </tbody>

        </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}