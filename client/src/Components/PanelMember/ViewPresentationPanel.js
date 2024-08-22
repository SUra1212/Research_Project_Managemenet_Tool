import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePresentationPanel extends Component {

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
        axios.get("/presentationMarks").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    //to delete the presentation panel details if want by clicking delete button
    onDelete = (id) => {
        axios.delete(`/presentationMarks/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrivePosts();
        })
    }

    //to search presentation details
    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.Group_ID.toLowerCase().includes(searchKey) ||
            post.Student_ID.toLowerCase().includes(searchKey) ||
            post.Student_name.toLowerCase().includes(searchKey) ||
            post.PanelNo.toLowerCase().includes(searchKey) ||
            post.Mark.toLowerCase().includes(searchKey)


        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        //to get all the mobile payment details
        axios.get("/presentationMarks").then(res => {
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
                        <h1> Presentation Evaluation Panel with student details </h1> 
                        </div>

                        <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Group_ID</th>
                            <th scope="col">Student_1_ID</th>
                            <th scope="col">Student_1_name</th>
                            <th scope="col">Student_2_ID</th>
                            <th scope="col">Student_2_name</th>
                            <th scope="col">Student_3_ID</th>
                            <th scope="col">Student_3_name</th>
                            <th scope="col">Student_4_ID</th>
                            <th scope="col">Student_4_name</th>
                            <th scope="col">Panel No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>
                                <td>
                                <a href={`/presentationMarking/${posts._id}`} style={{textDecoration:'none'}}> 
                               {posts.Group_ID}
                               </a>
                                </td>
                                    <td>{posts.Student_ID1}</td>
                                    <td>{posts.Student_name1}</td>
                                    <td>{posts.Student_ID2}</td>
                                    <td>{posts.Student_name2}</td>
                                    <td>{posts.Student_ID3}</td>
                                    <td>{posts.Student_name3}</td>
                                    <td>{posts.Student_ID4}</td>
                                    <td>{posts.Student_name4}</td>
                                <td>{posts.PanelNo}</td></tr>
                                
                            
                            
                              



                            

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
