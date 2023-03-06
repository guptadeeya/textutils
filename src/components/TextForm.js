import React,{useState} from 'react'

export default function TextForm(props) {

    const handleupclick=() =>{
        console.log("Upper case was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }

    const handlelowclick=() =>{
        console.log("Upper case was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case","success");
    }

    const handleclearclick=() =>{
        console.log("Clear text was clicked");
        let newtext = "";
        setText(newtext);
        props.showAlert("Text cleared.", "success")
    }

    const handleonchange=(event) =>{
        console.log("Onchange");
        setText(event.target.value);
    }

    const[text, setText] = useState('Enter text here');
    // text = "new text lines";   ---this is a wrong way to update text.. use setText function
    
    // setText("new text");   --correct way to update the text
    return (
        <>
    <div className='container' style={{backgroundColor:props.mode === 'dark'? 'darkgrey' : 'white',color:props.mode === 'dark'? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark'? 'darkgrey' : 'white', color:props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{backgroundColor:props.mode === 'dark'? 'darkgrey' : 'white',color:props.mode === 'dark'? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words, {text.length} characters</p>
        {/* 0.008 minutes is the googled value of reading one word in minutes */}
        <p> {0.008 * text.split(" ").length} Minutes read</p>  
        <h2>Preview</h2>
        <p>{text.length>0?text:"(Enter something in the textbox above to preview it here.)"}</p>
    </div>
    </>
  )
}