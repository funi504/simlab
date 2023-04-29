import React, { useRef ,useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './write.css'

//image handle for uploading images
const image_upload_handler = (blobInfo, success, failure, progress) => {
  
    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());
    let options = {
        method:'POST',
        headers:{
            'Content-Type':'multipart/form-data'
        },
        body: formData,
    }
  
    fetch('my-server-upload-url',options)
        .then(res => res.json())
        .then(data => success(data.url))
        .catch(e => {failure('ooops the upload was not successful try again' )
                console.log(e)
        })
 
  }

export default function MyEditor() {

    const [html , setHtml ] = useState('')
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            //for the useState
            setHtml(editorRef.current.getContent())
    }
  }
  ////////// text  area content
  const [title, setTitle] = useState('');

  const handleTitleChange = event => {
    // 👇️ access textarea value
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
     
        <button>View draft</button>
        <button>Publish</button>
     
    <textarea 
        className='textarea'
        id="title"
        name="title"
        value={title}
        onChange={handleTitleChange}
        placeholder={'Enter title here!!!'}
    />
    
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        
        placeholder="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: true,
          branding:false,
          browser_spellcheck: true,
          images_upload_handler: image_upload_handler,

          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
       
      />
      <button onClick={log}>save content</button>
      <div contentEditable='true' dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};
