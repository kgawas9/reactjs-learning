import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase option clicked.");
        let new_text = text.toUpperCase();
        setText(new_text);
    }

    const handleOnChangeText = (event) =>{
        // console.log("Handle on change text.");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here ..');

    return (
        <div>
            <h4 className="my-3">{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChangeText}></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        </div>
    )
}
