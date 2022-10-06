import './styles.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function RenderedResponse() {
  // create a usestate var called test that captures the value of the input wtext
  const [text, setText] = React.useState([]);
  const [codex, setCodex] = React.useState();
  const [textTwo, setTextTwo] = React.useState([]);
  const [todoId, setTodoId] = useState(1);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  
  function getNewTodo() {
    setTodoId((todoId) => (todoId === 20 ? 1 : todoId + 1));
  }

  // update state value for input
  const onChangeL = (event) => {
    setText(event);
    console.log(event);
  };

  const onChangeTwo = (event) => {
    setTextTwo(event);
    console.log(event);
  };

  useEffect(() => {
    async function fetchTodo() {
      const url = `/.netlify/functions/todo?id=${todoId}`;
      try {
        setLoading(true);
        const todo = await fetch(url).then((res) => res.json());
        setTodo(todo.title);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTodo();
  }, [todoId]);


  let submitCodexCall = () => {
    fetch('https://api.openai.com/v1/edits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_FIRST_SECRET}`,
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

  const myComponentStyleTwo = {
    'background-color': 'white',
  }

  const myComponentStyleThree = {
    'background-color': 'black',
    'color': 'white',
  }

  return (
    <div>
      <body>
        <div className="paragraph-text">
          <h3>The Cody-Codex</h3>
          <p>Essentially, you can provide any amount (small or large) of text as a writer, and the second box is where you give instructions to AI in regards to the direction, tone, wordiness, length, content etc. and it will output a piece of work for you!</p>
          <p style={myComponentStyle}>Provided Sample</p>
          <TextField style={myComponentStyleTwo} value={text} name="Sample" onChange={e => onChangeL(e.target.value)} />
          <br></br>
          <br></br>
          <p style={myComponentStyle}>Instructions and
            <br></br>
            critiques (response)</p>
          <TextField style={myComponentStyleTwo} value={textTwo} name="Instructions" onChange={e => onChangeTwo(e.target.value)} />
          <br></br>
          <Button style={myComponentStyleThree} onClick={submitCodexCall} className='submit-one'>Primary</Button>
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
      </body>
    </div>
  );
}

export default RenderedResponse;
