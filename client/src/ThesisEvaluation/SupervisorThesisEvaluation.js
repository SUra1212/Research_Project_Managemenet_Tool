import React, { Component } from 'react';
import axios from 'axios';

export default class SupervisorThesisEvaluation extends Component {
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
        axios.get("/thesisevaluation").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    onDelete = (id) => {
        if (window.confirm('Are You Sure?')) {
            window.location.reload(false);
            axios.delete(`/thesisevaluation/delete/${id}`).then((res) => {
                alert("Record Deleted Successfully");
                this.retrivePosts();

            })
        }
    }

    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.studentgroupid.toLowerCase().includes(searchKey)
        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/thesisevaluation").then(res => {
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
                <h1>Final Thesis Marks</h1>
                </center>

                <br/>

                <table class="table" style={{ marginLeft: "30px" }}>
                    <thead>
                        <tr>

                            <th scope="col">Student Group ID</th>
                            <th scope="col">Final Thesis Mark</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>

                                <td>{posts.studentgroupid}</td>
                                <td>{posts.marks}</td>
                                <td>
                                    <a className="btn btn-warning text-dark" href={`/editthesisevaluation/${posts._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp; Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger text-dark " href="#" onClick={() => this.onDelete(posts._id)} >
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                </td>


                            </tr>

                        ))}
                    </tbody>

                </table>
                <br />
                <a style={{ marginLeft: "30px" }} class="btn btn-primary" href="/chatapp"  >
                    <i class="fas fa-comment"></i> &nbsp; Chat Corner
                </a>


                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}