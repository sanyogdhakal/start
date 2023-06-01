import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick= ()=>{
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick= ()=>{
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText="";
    setText(newText)
  }
  const handleReverseClick = ()=>{
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
  }
  const handleOnChange= (event)=>{
    // console.log("UpperCase was change");
    setText(event.target.value);
  }
  
 

  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}  </h1>
   <div className="mb-3">
    
     <textarea class="form-control"value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>
   <button class="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
   <button class="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
   <button class="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
   <button class="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
    </div>
    <div className="container my-3
    ">
      <h1>Your text summery</h1>
      <p>{text.split(/[^\s]+/).length-1} words and {text.length}  characters</p>
      <p>{0.08 * text.split(/[^\s]+/).length-1}
      </p>
      <p>{0.088* text.split ("").length}Minutes read</p>
      <h2>Prewiew</h2>
      <p>{text}</p>
    </div>
    </>
  )
} 
