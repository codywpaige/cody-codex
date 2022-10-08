import './styles.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import ButtonAppBar from './ButtonAppBar';
import { useNavigate } from 'react-router-dom';

let CompletionsResponse = () => {

    const navigate = useNavigate();

    const navToWriter = () => {
        // if the current route matches the explain-like-five route, then render the renderedResponse component
        if (!window.location.href === "https://main--charming-gelato-34ef5b.netlify.app/content-writer") {
            // navigate to the writer page by rendering its component
            // USING REACT ROUTER, ROUTE TO CONTENT-WRITER
            window.location.href = "https://main--charming-gelato-34ef5b.netlify.app/explain-like-five";
        } 

        if (!window.location.href === "https://main--charming-gelato-34ef5b.netlify.app/explain-like-five") {
            // navigate to the writer page by rendering its component
            // USING REACT ROUTER, ROUTE TO CONTENT-WRITER
            window.location.href = "https://main--charming-gelato-34ef5b.netlify.app/content-writer";
        }
        return navToWriter;
    }
      

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

      const styledButtonTwo = {
    'text-decoration': 'bold',
    'font-size': '20px',
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
        'background-color': 'white',
    }

    const myComponentStyleSix = {
        'padding-bottom': '25px',
        'height': '50px',
        'width': '100%',
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

    const myComponentStyleSeven = {
        'background-color': '#FF10F0 !important',
        'height': '100%',
        'width': '100%',
    }
    

    let submitCodexCall = () => {
        fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_FIRST_SECRET}`,
            },
            body: JSON.stringify({
                'model': 'text-davinci-002',
                'prompt': `Summarize this for a second-grade student:\n\n${text}`,
                'temperature': 0.7,
                'max_tokens': 256,
                'top_p': 1,
                'frequency_penalty': 0,
                'presence_penalty': 0
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.choices[0].text);
                setCodex(data.choices[0].text)
            })
    }

    return (
        <div className='pink'>
        <ButtonAppBar navToWriter={navToWriter} />
            <div style={myComponentStyleSeven} className='pink'>
                <div className="paragraph-text">
                    <h3 style={myComponentStyleFive}>Explain To Me Like I'm Five</h3>
                    <p style={myComponentStyleFour}>Input any amount of information and AI will break it down for you like grade school!</p>
                    <TextareaAutosize placeholder="Provided Sample" style={myComponentStyleTwo} value={text} name="Sample" onChange={e => onChangeL(e.target.value)} />
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
            </div>
        </div>
    );
}

export default CompletionsResponse;