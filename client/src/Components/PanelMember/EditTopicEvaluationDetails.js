import React, { Component } from 'react'
import axios from 'axios'

export default class EditTopicEvaluationDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Group_ID: "",
            TopicTitle: "",
            Feedback: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { Group_ID, TopicTitle, Feedback} = this.state;


        const data = {
            Group_ID: Group_ID,
            TopicTitle: TopicTitle,
            Feedback: Feedback


        }

        console.log(data)

        axios.put(`/evaluateTopics/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Data Updated Successfully")
                this.setState(
                    {

                        Group_ID: "",
                        TopicTitle: "",
                        Feedback: ""
                    }

                )

            }

        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/evaluateTopics/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    Group_ID: res.data.post.Group_ID,
                    TopicTitle: res.data.post.TopicTitle,
                    Feedback: res.data.post.Feedback


                });
                console.log(this.state.post);
            }
        });
    }





    render() {
        return (
            <div >
                <nav className="navbar b">
                    <div className="container">
                        <form className="d-flex nav1 " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
                            &nbsp;
                            <button className="btn btn-outline-warning " type="submit">
                                Search</button>
                        </form>
                        <a className="navbar-brand" href="#">
                        </a>
                    </div>
                </nav>

                <br></br><br></br>
                <div className="card" style={{width:'50rem', marginLeft:'23%'}}>
                <h1>Edit Topic Evaluation Details</h1>
                <form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Group_ID:</label>
                        <input type="text"
                            className="form-control"
                            name="Group_ID"
                            placeholder="Group_ID"
                            value={this.state.Group_ID}
                            onChange={this.handleInputChange} />

                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Topic Title:</label>
                        <input type="text"
                            className="form-control"
                            name="TopicTitle"
                            placeholder="TopicTitle"
                            value={this.state.TopicTitle}
                            onChange={this.handleInputChange} />

                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Feedback:</label>
                        <input type="text"
                            className="form-control"
                            name="Feedback"
                            placeholder="Feedback"
                            value={this.state.Feedback}
                            onChange={this.handleInputChange} />

                    </div>

                </form>
                </div>
                <br></br>
                <center>
                    <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square" ></i>
                        &nbsp; Update-save
                    </a>
                </center>
                <button className="btn btn-success"> <a href="/evaluateTopics" style={{textDecoration:'none', color:'white'}}> Back-To add new Feedback </a> </button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn btn-success"> <a href="/EP" style={{textDecoration:'none', color:'white'}}> View Evaluation Details </a> </button><br/>
         

            </div>

        )
    }
}
