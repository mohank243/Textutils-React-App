import React, { useState } from "react";

export default function TextForm(probs) {
  const [text, setText] = useState("");
  let handleUpOnClick = () => {
    // console.log('OnUpCaseTriggerd' +text)
    let upCaseText = text.toUpperCase();
    setText(upCaseText);
    probs.showAlert('success' ,'Converted To UpperCase')
  };
  let handleLoOnClick = () => {
    // console.log('OnUpCaseTriggerd' +text)
    let loCaseText = text.toLowerCase();
    setText(loCaseText);
    probs.showAlert('success' ,'Converted To LowerCase')
  };
  let handleFlToUpOnClick = () => {
    // console.log('OnUpCaseTriggerd' +text)
    // let splitArray = text.split(' ');
    // let element = '';
    // for (let i = 0; i < splitArray.length; i++) {
    //   element = element + splitArray[i].charAt(0).toUpperCase();
    // setText(element);

    // }

    // Split the text into an array of words
    let words = text.split(" ");

    // Capitalize the first letter of each word
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a single string
    let result = capitalizedWords.join(" ");
    setText(result)

  };
  let handleOnChange = (event) => {
    // console.log('handleOnChange')
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3" style={probs.mode === 'light'?{color: "black"}:{color: "white"}}>
        <h1>{probs.heading}</h1>
        <textarea
          style={probs.mode === 'light'?{color: "black", backgroundColor:'white'}:{color: "white", backgroundColor:'#3c5a87'}}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpOnClick}
        >
          ConvertToUpperCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoOnClick}
        >
          ConvertToLowerCase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleFlToUpOnClick}
        >
          ConvertFirstLetterToUpperCase
        </button>
      </div>
      <div className="container" style={probs.mode === 'light'?{color: "black"}:{color: "white"}}>
        <h2>Your Text Summary</h2>
        <p>
          <b>
            Words {text.split(" ").filter((e) => e.length!=0 ).length} and Characters {text.length}
          </b>
        </p>
        <p>Time to Read {0.08 * (text.split(" ").filter((e) => e.length!=0 ).length)} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
