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

export default function ButtonAppBar() {
  const [values, setValues] = React.useState([
    "Explain to me like I am 5",
    "Writers: Generate Content",
  ])
  const [selected, setSelected] = useState("Explain to me like I am 5");

  const myComponentStyle = {
    'color': 'white !important',
  }

  // create a function called navToWriter that will navigate to the writer page
  const navToWriter = () => {
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
              inputProps={{
                name: "agent",
                id: "age-simple"
              }}
            >
              {values.map((value, index) => {
                return <MenuItem onClick={navToWriter} style={myComponentStyle} value={value}>{value}</MenuItem>;
              })}
            </Select>
          </div>
        </Typography>
        <Button color="inherit"></Button>
      </AppBar>
    </Box>
  );
}