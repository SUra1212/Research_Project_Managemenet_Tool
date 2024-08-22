import React, { Component } from 'react'
import axios from 'axios'

export default class ViewTopicEvaluation extends Component {

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

    //to save the topic evaluation details into the table(in the admin side)
    retrivePosts() {
        axios.get("/evaluateTopics").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }

    //to delete the topic evaluation details if want by clicking delete button
    onDelete = (id) => {
        axios.delete(`/evaluateTopics/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrivePosts();
        })
    }

    //to search topic evaluation details
    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.Group_ID.toLowerCase().includes(searchKey) ||
            post.TopicTitle.toLowerCase().includes(searchKey) ||
            post.Feedback.toLowerCase().includes(searchKey)

        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        //to get all the topic evaluation details
        axios.get("/evaluateTopics").then(res => {
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
                        <h1> Topic Evaluation Details </h1> 
                        </div>

                        <table border="1" className="table">
                    <thead>
                        <tr>
                            <th scope="col">Group_ID</th>
                            <th scope="col">Topic Title</th>
                            <th scope="col">Feedback</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>
                                    <td>{posts.Group_ID} </td>
                                    <td>{posts.TopicTitle}</td>
                                    <td>{posts.Feedback}</td>
                                    <td>
                   <a className="btn btn-warning" href={`/updateTopicEvaluation/${posts._id}`}>
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
                <button className="btn btn-success"> <a href="/evaluateTopics" style={{textDecoration:'none', color:'white'}}> Back-To add new Feedback </a> </button><br/>
         
            </div>
            

        )
    }
}
