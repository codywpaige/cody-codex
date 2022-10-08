import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from 'react';
import { useEffect } from 'react';

export default function ButtonAppBar() {

  // set state hook for the usefeffect
  const [drop, setDrop] = useState(1);

  useEffect(() => {
    var currentSlugs = window.location.href;
    let dropDownTitle = window.location.href.includes("content-writer") ? "Writers: Generate Content" : "Explain to me like I am 5";
    setDrop(dropDownTitle);
    console.log(dropDownTitle);
   }, []);

  const [values, setValues] = React.useState([
    "Writers: Generate Content",
    "Explain to me like I am 5",
  ])
  const [selected, setSelected] = useState("Explain to me like I am 5");

  const styledButton = {
    'text-decoration': 'bold',
    'font-size': '20px',
  }

  const styledButtonTwo = {
    'text-decoration': 'bold',
    'font-size': '20px',
  }

  const flexClass = {
    'display': 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    'padding-bottom': '15px',
  }

  // if content is in the url then set a new var called dropDownTitle
  // to the content of the url
  // if not then set it to the default value of "Explain to me like I am 5"

  // create a function called navToWriter that will navigate to the writer page
  const navToWriter = () => {
    // get the current slug, and create a variable to save it to
    // if the current url contains the string explain, then navigate to the writer page
    if (window.location.href.includes("explain")) {
    window.location.href = "/content-writer";
  } else {
    // if the current url contains the string writer, then navigate to the explain page
    window.location.href = "/explain-like-five";
  }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div className='flex-class'>
            <br></br>
            <Select
              value={selected}
              style={styledButtonTwo}
              inputProps={{
                name: "agent",
                id: "age-simple"
              }}
            >
              {values.map((value, index) => {
                return <MenuItem style={styledButton} onClick={navToWriter} value="Drop Down">{value}</MenuItem>;
              }
              )}
            </Select>
          </div>
          <div className='parent' style={flexClass}>
          {"Cody's Compendium of Codexes"}
          </div>
        </Typography>
      </AppBar>
    </Box>
  );
}




