import React, { useState, useEffect,useContext} from 'react';
import '../App.css'
import axios from 'axios';
import HubContext from "../context/HubContext";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const context = useContext(HubContext);
  const { user} = context; 
  const sl=user?user.id.slice(-1)=='*':0;

  useEffect(() => {
    // Fetch uploaded files when the component mounts
    fetchUploadedFiles();
  }, []);

  const fetchUploadedFiles = () => {
    axios.get('https://rgukt-std-hub-server.onrender.com/get/uploads')
      .then(response => {
        setUploadedFiles(response.data.uploadedFiles);
      })
      .catch(error => {
        console.error('Error fetching uploaded files:', error);
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('pdf', selectedFile);

      axios.post('https://rgukt-std-hub-server.onrender.com/upload', formData)
        .then(response => {
          // Update the list of uploaded files immediately
          fetchUploadedFiles();
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    }
  };
  const handleDownload = (fileName) => {
    window.location.href = `https://rgukt-std-hub-server.onrender.com/download/${fileName}`;
  };
//   const handleDownload = (fileName) => {
//     axios({
//       url:` https://rgukt-std-hub-server.onrender.com/download/${fileName}`,
//       method: 'GET',
//       responseType: 'blob',
//     })
//       .then(response => {
//         // Create a Blob from the file response
//         const blob = new Blob([response.data], { type: response.headers['content-type'] });

//         // Create a link element and trigger a download
//         const link = document.createElement('a');
//         link.href = window.URL.createObjectURL(blob);
//         link.download = fileName;
//         link.click();

//         // Release the object URL to free resources
//         window.URL.revokeObjectURL(link.href);
//       })
//       .catch(error => {
//         console.error('Error downloading file:', error);
//       });
//   };

  return (
    <div className='uploadingbox'>
      

      <div className='row rowsl'>
          {uploadedFiles.map(file => (
            <>
            <div  key={file} className="card" >
              <img src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g" alt={file} style={{ width: "100%" }} />
              <div className="container" style={{whiteSpace:'normal'}}>
                <h5><p>{file.split(' ').slice(0,2).join(' ')}</p></h5>
                
                <h4>
                  <a onClick={() => handleDownload(file)} style={{cursor:'pointer'}}><b>Download</b> <i className="fa-solid fa-file-arrow-down"></i></a>
                </h4>
                
              </div>
            </div>

            </>
          ))}
      </div>
    {sl?(<div className='upload'>
    <input id="selectfile" type="file" name="pdf" onChange={handleFileChange} />
    <button className='selectfilebtn' onClick={handleUpload}>Upload</button>
    </div>):<div></div>}
    </div>
  );
};

export default UploadFile;