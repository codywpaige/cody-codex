import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { MenuIcon} from '@mui/icons-material';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar(navToWriter) {
  const navigate = useNavigate();

  // set state hook for the usefeffect
  const [drop, setDrop] = useState(1);

  useEffect((navToWriter) => {
    var currentSlugs = window.location.href;
    let dropDownTitle = window.location.href.includes("content-writer") ? "Writers: Generate Content" : "Explain to me like I am 5";
    setDrop(dropDownTitle);
    console.log(navToWriter);

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
                return <MenuItem href="https://main--charming-gelato-34ef5b.netlify.app/content-writer" style={styledButton} onClick={navToWriter} value="Drop Down">{value}</MenuItem>              }
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




