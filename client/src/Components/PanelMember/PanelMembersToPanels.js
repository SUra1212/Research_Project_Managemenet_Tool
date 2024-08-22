import React, { Component } from 'react'
import axios from 'axios'

export default class PanelMembersToPanels extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    //to execute the React code when the component is already placed in the DOM (Document Object Model)
    componentDidMount() {
        this.retrivePosts();
    }

    //to save the panels details into the table(in the admin side)
    retrivePosts() {
        axios.get("/makePanels").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    //to delete the  panel details if want by clicking delete button
    onDelete = (id) => {
        axios.delete(`/makePanels/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrivePosts();
        })
    }

    //to search panel details
    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.Sliit_Staff_ID.toLowerCase().includes(searchKey) ||
            post.PanelMemberName.toLowerCase().includes(searchKey) ||
            post.Email.toLowerCase().includes(searchKey) ||
            post.PanelNo.toLowerCase().includes(searchKey) 

        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        //to get all the panels details
        axios.get("/makePanels").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });

    }


    render() {

        return (
            <div >
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
                <br />

                
                    <div class="card-body">
                        <h1> Panel Members' Panels </h1> 
                        </div>

                        <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sliit_Staff_ID</th>
                            <th scope="col">Panel Member Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Panel Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>
                                    <td>{posts.Sliit_Staff_ID} </td>
                                    <td>{posts.PanelMemberName}</td>
                                    <td>{posts.Email}</td>
                                    <td>{posts.PanelNo}</td>
                             </tr>
                                
                                     

                        ))}
                    </tbody>

                </table>
                <br/>


                    
               
                <br />
                <br />
            </div>

        )
    }
}
