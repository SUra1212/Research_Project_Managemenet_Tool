import React, { Component } from 'react';
import axios from 'axios';

export default class PMarking extends Component{

 
    // generatePDF = ()=>{
    //     var doc = new jsPDF("p","pt","a2");
    //     doc.html(document.querySelector("#content"), {
    //         callback: function(pdf){
                
    //             pdf.save("salary.pdf");
    //         }
    //     });

    // };




    constructor(props) {
        super(props);
        this.state = {
            Student_ID1:"",
            Student_ID2:"",
            Student_ID3:"",
            Student_ID4:"",
            Student_name1:"",
            Student_name2:"",
            Student_name3:"",
            Student_name4:"",
            S1SRS:"",
            S2SRS:"",
            S3SRS:"",
            S4SRS:"",
            S1FR:"",
            S2FR:"",
            S3FR:"",
            S4FR:"",
            S1BK:"",
            S2BK:"",
            S3BK:"",
            S4BK:"",
            S1UT:"",
            S2UT:"",
            S3UT:"",
            S4UT:"",
            Mark1: "",
            Mark2: "",
            Mark3: "",
            Mark4: ""

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

        console.log(this.state.S1SRS, this.state.S1FR, this.state.S1BK, this.state.S1UT)
        this.setState({ Mark1: parseInt(this.state.S1SRS) + parseInt(this.state.S1FR) + parseInt(this.state.S1BK) +parseInt(this.state.S1UT)  })
        console.log(this.state)
        console.log(this.state.S2SRS, this.state.S2FR, this.state.S2BK, this.state.S2UT)
        this.setState({ Mark2: parseInt(this.state.S2SRS) + parseInt(this.state.S2FR) + parseInt(this.state.S2BK) +parseInt(this.state.S2UT)  })
        console.log(this.state)
        console.log(this.state.S3SRS, this.state.S3FR, this.state.S3BK, this.state.S3UT)
        this.setState({ Mark3: parseInt(this.state.S3SRS) + parseInt(this.state.S3FR) + parseInt(this.state.S3BK) +parseInt(this.state.S3UT)  })
        console.log(this.state)
        console.log(this.state.S4SRS, this.state.S4FR, this.state.S4BK, this.state.S4UT)
        this.setState({ Mark4: parseInt(this.state.S4SRS) + parseInt(this.state.S4FR) + parseInt(this.state.S4BK) +parseInt(this.state.S4UT)  })
        console.log(this.state)

        const { S1SRS,S2SRS, S3SRS, S4SRS,S1FR, S2FR, S3FR, S4FR, S1BK, S2BK, S3BK, S4BK, S1UT, S2UT, S3UT, S4UT,Mark1,Mark2,Mark3,Mark4, Student_ID1,Student_ID2,Student_ID3,Student_ID4,Student_name1,Student_name2,Student_name3,Student_name4 } = this.state;
        const data = {
            Student_ID1:Student_ID1,
            Student_ID2:Student_ID2,
            Student_ID3:Student_ID3,
            Student_ID4:Student_ID4,
            Student_name1:Student_name1,
            Student_name2:Student_name2,
            Student_name3:Student_name3,
            Student_name4:Student_name4,
            S1SRS:S1SRS,
            S2SRS:S2SRS, 
            S3SRS:S3SRS,
            S4SRS:S4SRS,
            S1FR:S1FR,
            S2FR:S2FR,
            S3FR:S3FR,
            S4FR:S4FR, 
            S1BK:S1BK,
            S2BK:S2BK,
            S3BK:S3BK,
            S4BK:S4BK,
            S1UT:S1UT,
            S2UT:S2UT,
            S3UT:S3UT,
            S4UT:S4UT,
            Mark1: Mark1,
            Mark2: Mark2,
            Mark3: Mark3,
            Mark4: Mark4


        }

       
        
        //to save the inputed data
        axios.post("/pMarks/save", data).then((res) => {
            if (res.data.success) {
                alert("Presentation Marks saved Successful")
                this.setState(
                    {
                        Student_ID1:"",
                        Student_ID2:"",
                        Student_ID3:"",
                        Student_ID4:"",
                        Student_name1:"",
                        Student_name2:"",
                        Student_name3:"",
                        Student_name4:"",
                        S1SRS:"",
                        S2SRS:"", 
                        S3SRS:"",
                        S4SRS:"",
                        S1FR:"",
                        S2FR:"",
                        S3FR:"",
                        S4FR:"", 
                        S1BK:"",
                        S2BK:"",
                        S3BK:"",
                        S4BK:"",
                        S1UT:"",
                        S2UT:"",
                        S3UT:"",
                        S4UT:"",
                        Mark1: "",
                        Mark2: "",
                        Mark3: "",
                        Mark4: ""

                    }
                )
            }
        })
    }


    render() {
       
        return (
            
            <div style={{ marginTop: '20px' }}>
               
                <br></br><br></br>
                <center><h2>Add/Update Presentations marks to the Marking Scheme</h2></center>
                <br></br><br></br>
                
           
          <br></br>
         <center> <h2>Presentations Marking</h2></center>
         <table border="1" className='table'>
             <thead>
                 <tr>
                            <th scope="col">Criteria</th>
                            <th scope="col">Student 1</th>
                            <th scope="col">Student 2</th>
                            <th scope="col">Student 3</th>
                            <th scope="col">Student 4</th>
                </tr>
             </thead>
             <tbody>
             <tr>
                     <td>Student ID</td>
                     <td>
                                <input type="text"
                                    className="form-control"
                                    name="Student_ID1"
                                    value={this.state.Student_ID1}
                                    onChange={this.handleInputChange} /></td>
                    <td>
                                    <input type="text"
                                    className="form-control"
                                    name="Student_ID2"
                                    value={this.state.Student_ID2}
                                    onChange={this.handleInputChange} />
                                    </td>
                    <td><input type="text"
                                    className="form-control"
                                    name="Student_ID3"
                                    value={this.state.Student_ID3}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="text"
                                    className="form-control"
                                    name="Student_ID4"
                                    value={this.state.Student_ID4}
                                    onChange={this.handleInputChange} /></td>
                 </tr>

                 <tr>
                     <td>Student name</td>
                     <td>
                                <input type="text"
                                    className="form-control"
                                    name="Student_name1"
                                    value={this.state.Student_name1}
                                    onChange={this.handleInputChange} /></td>
                    <td>
                                    <input type="text"
                                    className="form-control"
                                    name="Student_name2"
                                    value={this.state.Student_name2}
                                    onChange={this.handleInputChange} />
                                    </td>
                    <td><input type="text"
                                    className="form-control"
                                    name="Student_name3"
                                    value={this.state.Student_name3}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="text"
                                    className="form-control"
                                    name="Student_name4"
                                    value={this.state.Student_name4}
                                    onChange={this.handleInputChange} /></td>
                 </tr>

                 <tr>
                     <td>SRS Document</td>
                     <td>
                                <input type="number"
                                    className="form-control"
                                    name="S1SRS"
                                    value={this.state.S1SRS}
                                    onChange={this.handleInputChange} /></td>
                    <td>
                                    <input type="number"
                                    className="form-control"
                                    name="S2SRS"
                                    value={this.state.S2SRS}
                                    onChange={this.handleInputChange} />
                                    </td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S3SRS"
                                    value={this.state.S3SRS}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S4SRS"
                                    value={this.state.S4SRS}
                                    onChange={this.handleInputChange} /></td>
                 </tr>
                 <tr>
                     <td>Frontend Development</td>
                     <td><input type="number"
                                    className="form-control"
                                    name="S1FR"
                                    value={this.state.S1FR}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S2FR"
                                    value={this.state.S2FR}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S3FR"
                                    value={this.state.S3FR}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S4FR"
                                    value={this.state.S4FR}
                                    onChange={this.handleInputChange} /></td>
                 </tr>
                 <tr>
                     <td>Backend Development</td>
                     <td><input type="number"
                                    className="form-control"
                                    name="S1BK"
                                    value={this.state.S1BK}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S2BK"
                                    value={this.state.S2BK}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S3BK"
                                    value={this.state.S3BK}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S4BK"
                                    value={this.state.S4BK}
                                    onChange={this.handleInputChange} /></td>
                 </tr>
                 <tr>
                     <td>Unit Testing</td>
                     <td><input type="number"
                                    className="form-control"
                                    name="S1UT"
                                    value={this.state.S1UT}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S2UT"
                                    value={this.state.S2UT}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S3UT"
                                    value={this.state.S3UT}
                                    onChange={this.handleInputChange} /></td>
                    <td><input type="number"
                                    className="form-control"
                                    name="S4UT"
                                    value={this.state.S4UT}
                                    onChange={this.handleInputChange} /></td>
                 </tr>
                          
                             <tr>
                                 <td></td>
                                 <td><a className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                
                                &nbsp; Get Total
                            </a></td>
                                <td><a className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                
                                &nbsp; Get Total
                            </a></td>
                            <td><a className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                
                                &nbsp; Get Total
                            </a></td>
                            <td><a className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                
                                &nbsp; Get Total
                            </a></td>
                            
                             </tr>

                             <tr>
                                    <td>Total</td>
                                <td><input type="number"
                                    className="form-control"
                                    name="Mark1"
                                    value={this.state.Mark1}
                                    onChange={this.handleInputChange} /></td>
                                    
                                <td><input type="number"
                                    className="form-control"
                                    name="Mark2"
                                    value={this.state.Mark2}
                                    onChange={this.handleInputChange} /></td>
                                <td><input type="number"
                                    className="form-control"
                                    name="Mark3"
                                    value={this.state.Mark3}
                                    onChange={this.handleInputChange} /></td>
                                <td><input type="number"
                                    className="form-control"
                                    name="Mark4"
                                    value={this.state.Mark4}
                                    onChange={this.handleInputChange} /></td>
                             </tr>
             </tbody>
         </table>
         <center>
                            <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                <i className="far fa-check-square" ></i>
                                &nbsp; save
                            </a>
                        </center>
                        <button className="btn btn-success"> <a href="/viewPresentationMarks" style={{textDecoration:'none', color:'white'}}> View Presentation Marks </a> </button><br/>
         
                        
              <br></br><br></br><br></br>




            {/* <button className="btn btn-secondary" onClick={this.generatePDF} type="primary">  Generate PDF Report </button> */}
            </div>
        );
    }
}

 