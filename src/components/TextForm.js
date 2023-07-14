import React, {useState} from 'react'

export default function TextForm(props) {

    // set text to upper case
    const handleUpClick = () =>{
        // console.log("Uppercase option clicked.");
        let new_text = text.toUpperCase();
        setText(new_text);
        props.showAlert('Capital util selected', 'success');
    };


    // set text to lower case
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Lower case util selected', 'success');
    }

    // clear the text from textarea
    const handleClearClick = () =>{
        setText('');
        props.showAlert('Clear text util selected', 'success');
    }

    // Trim text
    const handleTrimTextClick = () => {
        let trimmed_text = text.trim()
        setText(trimmed_text);
        props.showAlert('Trimmed text util selected', 'success');
    }

    // OnChange even on text area to insert the text
    const handleOnChangeText = (event) =>{
        // console.log("Handle on change text.");
        setText(event.target.value);
    }


    // logic to write the entered text in camel case
    const handleCamelCaseClick = () => {
        function toCamelCase(text) {
            let words = text.split(" ")
            let camelCaseText = ''; //words[0].toLowerCase();

            for (let i = 0; i < words.length; i++){
                let word = words[i];
                if (i === 0){
                    camelCaseText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }else{
                    camelCaseText += ' ' + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }

            }
            props.showAlert('Camel case util selected', 'success');
            return camelCaseText;
        }
        let camelCaseText = toCamelCase(text);

        setText(camelCaseText);
    }

    // copy the text to clipboard
    const handleCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(text);
          props.showAlert('your text has been copied', 'success');
        } catch (error) {
          console.error('Failed to copy text:', error);
        }
    };

    // state using useState hooks
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h4 className="my-3">{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10" value={text} onChange={handleOnChangeText}></textarea>
            </div>

            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowerCaseClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleTrimTextClick}>Trim</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCamelCaseClick}>Camel case</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopyToClipboard}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text area</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h4>Your text summary</h4>

            <p><b>{text.length===0 ? 0 : text.includes(" ") === true ? text.trim().split(/\s+/).length : text.split(" ").length}</b> words, and <b>{text.length}</b> characters</p>

            <p>{0.008 * text.split(" ").length} need to spend to read the above text.</p>

            <hr />
            <h6>Preview</h6>
            <p className="my-3">{text.length>0?text:"Typs something above to preview it...."}</p>
        </div>
        </>
    )
}
