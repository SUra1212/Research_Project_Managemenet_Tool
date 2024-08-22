import React, { Component } from 'react'
import axios from 'axios'

export default class AddTopicEvaluationDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Group_ID: "",
            TopicTitle: "",
            Feedback: ""

        }
    }

    //to handle the changes of the values according to the name
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }



    //to save the data all the details must be filled
    onSubmit = (e) => {
        e.preventDefault();
        const { Group_ID,TopicTitle, Feedback } = this.state;
        const data = {
            Group_ID: Group_ID,
            TopicTitle: TopicTitle,
            Feedback: Feedback


        }

       
        
        //to save the inputed data
        axios.post("/evaluateTopics/save", data).then((res) => {
            if (res.data.success) {
                alert("Topic Evaluation Successful")
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


    render() {

        return (
            <div >
                <br />
                <br />

                <div class="card" style={{width:'50rem', marginLeft:'23%'}}>
                    <div class="card-body">
                        <h1> Add Topic Evaluation Details</h1> 
                        
                        <form>
                        
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Group_ID:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="Group_ID"
                                    value={this.state.Group_ID}
                                    onChange={this.handleInputChange} />

                            </div>
                            
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Topic Title:</lable>
                                <input type="text"
                                    className="form-control"
                                    name="TopicTitle"
                                    value={this.state.TopicTitle}
                                    onChange={this.handleInputChange} />

                            </div>
                             <div className="form-group" style={{ marginBottom: '15px' }}>
                                <lable style={{ marginBottom: '5px' }}>Feedback:</lable>
                                <textarea id="Feedback"  rows="4" cols="50" className="form-control"
                                    name="Feedback"
                                    value={this.state.Feedback}
                                    onChange={this.handleInputChange}>
                                Add the feedback here....
                                </textarea>
                               

                            </div>



                          

                        </form>
                        <br></br>
                        <center>
                            <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                <i className="far fa-check-square" ></i>
                                &nbsp; save
                            </a>
                        </center>
                        <button className="btn btn-success"> <a href="/EP" style={{textDecoration:'none', color:'white'}}> View Evaluation Details </a> </button><br/>
         


                    </div>
                </div>
                <br />
                <br />
            </div>

        )
    }
}
