import './App.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import React from 'react';

function App() {
  // create a usestate var called test that captures the value of the input wtext
  const [text, setText] = React.useState([]);
  const [codex, setCodex] = React.useState();
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
    console.log(data.choices[0].text);
    setCodex(data.choices[0].text)
    })
}

    const myComponentStyle = {
      'font-weight': 'bold',
    }

  return (
    <div>
      <div className="paragraph-text">
      <p style={myComponentStyle}>Provided Sample</p>
      <TextField value={text} name="Sample" onChange={e => onChangeL(e.target.value)} />
      <br></br>
      <br></br>
      <p style={myComponentStyle}>Instructions and 
      <br></br>
      critiques (response)</p>
      <TextField value={textTwo} name="Instructions" onChange={e => onChangeTwo(e.target.value)} />
      <br></br>
      <Button onClick={submitCodexCall} className='submit-one'>Primary</Button>
      <div>
      </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <div className='box-styling'>
        {codex !== null && 
          <p>{codex}</p>
        }
      </div>
    </div>
  );
}

export default App;