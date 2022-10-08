import './styles.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import ButtonAppBar from './ButtonAppBar';
import { useNavigate } from 'react-router-dom';

function RenderedResponse() {
  const navigate = useNavigate();

  // create a usestate var called test that captures the value of the input wtext
  const [text, setText] = React.useState([]);
  const [codex, setCodex] = React.useState();
  const [textTwo, setTextTwo] = React.useState([]);
  const [todoId, setTodoId] = useState(1);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const navToWriter = () => {
    // if the current route matches the explain-like-five route, then render the renderedResponse component
    if (window.location.href === "http://main--charming-gelato-34ef5b.netlify.app/content-writer") {
        // navigate to the writer page by rendering its component
        // USING REACT ROUTER, ROUTE TO CONTENT-WRITER
        navigate("/explain-like-five");
    } 
    if (window.location.href === "http://main--charming-gelato-34ef5b.netlify.app/explain-like-five") {
        // navigate to the writer page by rendering its component
        // USING REACT ROUTER, ROUTE TO CONTENT-WRITER
        navigate("/content-writer");
    }
}
  
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

  let textStringInput = "placeholder"

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
    'width': '60%',
    'display': 'flex',
    'height': '50px',
  }

  const myComponentStyleTwo = {
    'background-color': 'white',
    'height': '50px',
    'width': '25%',
  }

  const myComponentStyleThree = {
    'background-color': 'black',
    'color': 'white',
    'display': 'flex',
    'height': '50px',
  }
  
  const myComponentStyleFour = {
    'color': 'black',
    'font-size': '25px',
    'padding-left': '35px',
    'padding-right': '25px',
    'text-align': 'center',
  }

  const myComponentStyleFive = {
    'color': 'black',
    'font-size': '45px',
    'font-weight': 'bold',
    'border': '1.4px solid black',
    'background-color': 'white',
  }
  
  const myComponentStyleSix = {
    'padding-bottom': '25px',
    'height': '50px',
    'width': '100%',
  }

  return (
    <div>
      <body>
      <ButtonAppBar onClick={navToWriter} />
        <div className="paragraph-text">
          <h3 style={myComponentStyleFive}>Writers: Generate Content</h3>
          <p style={myComponentStyleFour}>Essentially, you can provide any amount (small or large) of text as a writer, and the second box is where you give instructions to AI in regards to the direction, tone, wordiness, length, content etc. and it will output a piece of work for you!</p>
          <TextareaAutosize placeholder="Provided Sample" style={myComponentStyleTwo} value={text} name="Sample" onChange={e => onChangeL(e.target.value)} />
          <br></br>
          <TextareaAutosize placeholder="Instructions and critiques (form a response)" style={myComponentStyleTwo} value={textTwo} name="Instructions" onChange={e => onChangeTwo(e.target.value)} />
          <br></br>
          <Button style={myComponentStyleThree} onClick={submitCodexCall} className='submit-one'>Submit</Button>
          <div>
          </div>
        </div>
        <div className='parent'>
        <div className='child'>
        <br></br>
        <TextareaAutosize value={codex} placeholder4={codex} style={myComponentStyleSix} name="Instructions" placeholder='AI Generative Output' onChange={e => onChangeTwo(e.target.value)} />
        </div>
        </div>
      </body>
    </div>
  );
}

export default RenderedResponse;