import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState,AtomicBlockUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyEditor = () => {


const handlePastedFiles = ( files) => {
    const formData = new FormData();
    formData.append('file',files[0]) 
    fetch('/api/uploads', 
    {method: 'POST', body: formData})
    .then(res => res.json())
    .then(data => {
      if (data.file) { 
         setEditorState(insertImage(data.file)) //created below
      }
    }).catch(err => {
        console.log(err) 
    })
 };

 const insertImage = ( url) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
        'IMAGE',
        'IMMUTABLE',
        { src: url },)
const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
const newEditorState = EditorState.set( editorState, { currentContent: contentStateWithEntity });
return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, '');
};
 //DraftJS seems to have problem handling multiple files inserts, lets just try to work with 1 at the moment.
 const [editorState, setEditorState] = useState(EditorState.createEmpty())


    
return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
   <Editor 
        editorState={editorState} 
        onChange={editorState} 
        handlePastedFiles={handlePastedFiles}
  />
  <p onClick={handlePastedFiles} > button</p>
  </div>
)}
//////////////////////////////////////
//file_browser_callback_types:'image',
/*
file_picker_callback:function(callback,value,meta){

          if(meta.filetype =='image'){
              var input = document.getElementById('my-file')
              input.click()
              input.onchange = function(){
                  var file = input.file[0]
                  var reader = new FileReader();
                  reader.onload = function(e){
                      console.log('name',e.target.result)
                      callback(e.target.result,{
                          alt:file.name
                      });
                  };
                  reader.readAsDataURL(file)
              }
          }
},
paste_data_images:true */

const image_upload_handler = (blobInfo, progress) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'postAcceptor.php');
  
    xhr.upload.onprogress = (e) => {
      progress(e.loaded / e.total * 100);
    };
  
    xhr.onload = () => {
      if (xhr.status === 403) {
        reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
        return;
      }
  
      if (xhr.status < 200 || xhr.status >= 300) {
        reject('HTTP Error: ' + xhr.status);
        return;
      }
  
      const json = JSON.parse(xhr.responseText);
  
      if (!json || typeof json.location != 'string') {
        reject('Invalid JSON: ' + xhr.responseText);
        return;
      }
  
      resolve(json.location);
    };
  
    xhr.onerror = () => {
      reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };
  
    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());
  
    xhr.send(formData);
  });