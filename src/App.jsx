import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const handleOutput = (e) =>{
const iframe = document.getElementById("output");
  iframe.contentDocument.body.innerHTML = 
  `${htmlCode}<style>${cssCode}</style>`;
  iframe.contentWindow.eval(jsCode);
  };
  return (
    <>
     <div className='ide'>
     
     
     <div className="left">
     <label>HTML</label>
     <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>

     <label>CSS</label>
     <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>

     <label>JavaScript</label>
     <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
     </div>
     <div className="right">
      <button onClick= {handleOutput}>Run</button>
      <iframe id="output"></iframe>
     </div>
     </div>
     
     
    </>
  )
}

export default App
