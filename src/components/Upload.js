import React, { useState } from 'react';

function Upload(props) {
  const [file, setFile] = useState(null);
  function handleChange(e) {
      console.log(e.target.files);
      if (e.target.files[0]) {
        setFile(URL.createObjectURL(e.target.files[0]));
      }
      else {
        setFile(null);
      }
  }
  const passAlert = () => {
    props.showAlert("Your Picture is being analyzed", "success");
}
let myStyle = {
  width: "100vh",
  position: "center",
}
let stl = {
  color : 'white',
}
  return (
    <div>
        <h1 className="my-5" style={stl} >Analyze your Plant here</h1>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Name of Plant</label>
                    <input className="form-control" type="text" placeholder="" aria-label="default input example"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Describe your problem</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
              <p style={stl}>Upload Image</p>
              <input className="form-control" type="file" onChange={handleChange} />
              <div className="text-center">
              <img  style={myStyle} className='my-5' src={file} />
              </div>
            </div>
            <button type="submit" onClick={passAlert} className="my-3 btn btn-success text-center">Analyze</button>
    </div>
  )
}

export default Upload
