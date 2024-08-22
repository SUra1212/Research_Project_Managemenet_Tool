import React, { Component } from 'react';
import axios from 'axios';

export default class PresentationMarking extends Component{

    constructor(props){
        super(props);
        this.state={
          post:{}
        };
    }

    componentDidMount(){
        const id =this.props.match.params.id;

        axios.get(`/presentationMarks/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    // generatePDF = ()=>{
    //     var doc = new jsPDF("p","pt","a2");
    //     doc.html(document.querySelector("#content"), {
    //         callback: function(pdf){
                
    //             pdf.save("salary.pdf");
    //         }
    //     });

    // };


    render() {
        const {Group_ID, Student_ID1,Student_ID2,Student_ID3,Student_ID4,Student_name1,Student_name2,Student_name3,Student_name4,PanelNo} = this.state.post;
        return (
            
            <div style={{ marginTop: '20px' }}>
                <div id="content"> 
                <br></br><br></br>
                <center><h2>Presentation Evaluation with the Marking Scheme</h2></center>
                <br></br><br></br>
                <div class="card-body">
                <h3>Group_ID - {Group_ID}</h3>
                <h4>Panel - {PanelNo}</h4>
            <hr/><dl className="row">
                    <dt className="col-sm-3">1.Student_1_ID</dt>
                    <dd className="col-sm-9">{Student_ID1}</dd>

                    <dt className="col-sm-3">--Student_1_name</dt>
                    <dd className="col-sm-9">{Student_name1}</dd>

                    <dt className="col-sm-3">2.Student_2_ID2</dt>
                    <dd className="col-sm-9">{Student_ID2}</dd>

                    <dt className="col-sm-3">--Student_2_name</dt>
                    <dd className="col-sm-9">{Student_name2}</dd>

                    <dt className="col-sm-3">3.Student_3_ID</dt>
                    <dd className="col-sm-9">{Student_ID3}</dd>

                    <dt className="col-sm-3">--Student_3_name</dt>
                    <dd className="col-sm-9">{Student_name3}</dd>

                    <dt className="col-sm-3">4.Student_4_ID</dt>
                    <dd className="col-sm-9">{Student_ID4}</dd>

                    <dt className="col-sm-3">--Student_4_name</dt>
                    <dd className="col-sm-9">{Student_name4}</dd>

            
                </dl>
                
            </div> 
            </div>
          <br></br>
      

          <button className="btn btn-lg btn-success"><a href="/Pmarking" style={{ textDecoration: 'none', color: 'white' }}>Add Marks </a> </button>




            {/* <button className="btn btn-secondary" onClick={this.generatePDF} type="primary">  Generate PDF Report </button> */}
            </div>
        );
    }
}

 