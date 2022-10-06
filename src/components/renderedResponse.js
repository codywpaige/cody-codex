import './App.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import React from 'react';

function RenderedResponse() {
  // create a usestate var called test that captures the value of the input wtext
  const [text, setText] = React.useState([]);
  const [codex, setCodex] = React.useState([]);
  const [textTwo, setTextTwo] = React.useState([]);

  // update state value for input
  const onChangeL = (event) => {
      setText(event);
      console.log(event);
    };

  const onChangeTwo = (event) => {
    setTextTwo(event);
    console.log(event);
  };


  let submitCodexCall = () => {
    fetch('https://api.openai.com/v1/edits', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
        'model': 'text-davinci-edit-001',
        'input': `${text}`,
        'instruction': `${textTwo}`
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setCodex(data)
    console.log(codex + "codex")
  })
}

  return (
    <div className="paragraph-text">
    Provided Sample
    <TextField value={text} name="Sample" onChange={e => onChangeL(e.target.value)} />
    <br></br>
    <br></br>
    Instructions and <br></br>
    critiques (response)<TextField value={textTwo} name="Instructions" onChange={e => onChangeTwo(e.target.value)} />
    <br></br>
    <Button onClick={submitCodexCall} className='submit-one'>Primary</Button>
    <div>
    </div>
    </div>
  );
}

export default RenderedResponse;
