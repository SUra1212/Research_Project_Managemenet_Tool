import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import React from 'react'

const AdminUpload = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState([]);

  const upload = async (e) => {
    try {
      e.preventDefault();

      const data = new FormData();

      data.append("name", name);
      data.append("description", description);
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }

      const res = await fetch(`http://localhost:3000/marksSupervisor`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert("File Upload Successfully")
        setName("");
        setDescription("");
        // setFile(null);
        setPdf(null);
        // setVideo(null);
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg nav" style={{ marginTop: '4%' }}>
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
      <br/>
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <h1>Upload document/presentation templates</h1>
        <br />
        {/* <pre>{file!=null && file.length}</pre> */}
        <form onSubmit={upload} encType="multipart/form-data" >

          <div className="form-group">
            <label>Document Name</label>
            <input type="text" placeholder="Name" value={name} required
              onChange={e => { setName(e.target.value) }}
              className="form-control" />
          </div>

          {/* <div className="form-group">  
          <input description="text"  placeholder="description" value={description} required
                  onChange={e=>{setDescription(e.target.value)}}
                    className="form-control"/>
          </div> */}

          Upload Pdf
          <div className="form-group">
            <input type="file" multiple required filename="uploaded_Image"
              className="form-control-file"
              onChange={e => { setPdf(e.target.files) }} />
          </div>

          <button className="btn btn-warning text-dark"
            type="submit"
            variant="primary"
            size="lg">
            Upload
          </button>
        </form>
      </div>
      <div style={{ marginBottom: '8%' }}></div>
    </div>
  )
}

export default AdminUpload;