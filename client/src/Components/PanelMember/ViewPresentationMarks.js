import React, { Component } from 'react'
import axios from 'axios'

export default class ViewPresentationMarks extends Component {

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

    //to save the presentation marks details into the table(in the admin side)
    retrivePosts() {
        axios.get("/pMarks").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    //to delete the presentation marks details if want by clicking delete button
    onDelete = (id) => {
        axios.delete(`/pMarks/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrivePosts();
        })
    }

    //to search p details
    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.Student_ID1.toLowerCase().includes(searchKey) ||
            post.Student_ID2.toLowerCase().includes(searchKey) ||
            post.Student_ID3.toLowerCase().includes(searchKey) ||
            post.Student_ID4.toLowerCase().includes(searchKey) ||
            post.Student_name1.toLowerCase().includes(searchKey) ||
            post.Student_name2.toLowerCase().includes(searchKey) ||
            post.Student_name3.toLowerCase().includes(searchKey) ||
            post.Student_name4.toLowerCase().includes(searchKey) ||
            post.Mark1.toLowerCase().includes(searchKey)||
            post.Mark2.toLowerCase().includes(searchKey)||
            post.Mark3.toLowerCase().includes(searchKey)||
            post.Mark4.toLowerCase().includes(searchKey)


        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        //to get all the presentation marks details
        axios.get("/pMarks").then(res => {
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
                        <h1> Presentation Marks </h1> 
                        </div>

                        <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Student_1_ID</th>
                            <th scope="col">Student_1_name</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Student_2_ID</th>
                            <th scope="col">Student_2_name</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Student_3_ID</th>
                            <th scope="col">Student_3_name</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Student_4_ID</th>
                            <th scope="col">Student_4_name</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>
                                    <td>{posts.Student_ID1}</td>
                                    <td>{posts.Student_name1}</td>
                                    <td>{posts.Mark1}</td>
                                    <td>{posts.Student_ID2}</td>
                                    <td>{posts.Student_name2}</td>
                                    <td>{posts.Mark2}</td>
                                    <td>{posts.Student_ID3}</td>
                                    <td>{posts.Student_name3}</td>
                                    <td>{posts.Mark3}</td>
                                    <td>{posts.Student_ID4}</td>
                                    <td>{posts.Student_name4}</td>
                                    <td>{posts.Mark4}</td>
                                    <td>
                   <a className="btn btn-warning" href={`/updatePresentationMarks/${posts._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Update
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                     <i className="fas fa-trash"></i>&nbsp;Delete
                   </a>
                 </td>
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
