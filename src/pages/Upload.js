import React from "react"
import {useDropzone} from 'react-dropzone'

function Upload(props) {
    const {acceptedFiles, getRootProps, getInputProps} =
    useDropzone();



const files = acceptedFiles.map(file => (
    <li key={file.path}>
        {file.path} - {file.size} bytes
        
    </li>
));
return (
    <section className="basestyle">
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p> Drag 'n' Drop..Into The Void </p>
            <img className="void-img-upload" src="https://cdn-icons-png.flaticon.com/512/190/190279.png" alt = ""/>
        <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
        </aside>
         </div>
       
    </section>
);
}


export default Upload;

