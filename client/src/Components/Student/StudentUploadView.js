import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import React from 'react'

const StudentUploadView = () => {
    const [studentUp, setStudentUp] = useState([]);
    const [search, setSearch] = useState("");
    const [search2,setSearch2] = useState("")
   
    const history = useHistory();


    useEffect(() => {
        const fetchStudentUp = async () => {
          const res = await fetch(`http://localhost:3000/studentUp`);
          const data = await res.json();
          setStudentUp(data);
          console.log("test", data);
        };
        fetchStudentUp();
      }, []);

    //   const deleteUpload =(pdfId) =>{
        
    //     pfdService.deleteFile(pdfId).then((response)=>{
    //       history('/')
    //     })
      
    //   }

  return (
    <div>
             <nav class="navbar navbar-expand-lg nav" style={{ marginTop: '5%' }}>
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <div >
                                        <button className="btn btn-success" ><a href="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboad</a> </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
         <br/>
             <div className="row">
   
     </div>

            <div style={{marginTop:'1%', marginLeft:'4%'}} className='container'>
            <div className='row'>
            <div className='card col-md-10 offset-md-1 offset-md-2'>

                  <table class="table">
                      <thead>
                        <tr>
                        <th class="table-primary" scope="col">#</th>
                          <th class="table-primary" scope="col">Name</th>
                          <th class="table-primary" scope="col">Document</th>
                        </tr>
                        </thead>
                        <tbody>
                          {studentUp.map((studentUp, index)=>
                          <tr key={studentUp.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{studentUp.name}</td>
                            <td>{ <a href={studentUp.pdf} download>{studentUp.name}</a>}</td>
                            
                          </tr>

                          )
                            
                          }
                        </tbody>           
                  </table>

            </div>

            </div>

        </div>
        
<div style={{marginBottom:'12%'}}></div>
    </div>
  )
}

export default StudentUploadView;