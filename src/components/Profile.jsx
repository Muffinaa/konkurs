import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

const Profile = () => {
  return (
  <Box
    sx={{ width:"100%", height:"100%", bgColor:"#0d47a1"}}
    
  >
    <Box
    sx={{ height:710,width:900,  left:'6%' , top:'15%', position:'absolute',
          boxShadow: '3px 2px 9px grey'
        }}
    >
      <TextField
        sx={{left:'5%' , top:'5%'}}
       id="outlined-basic" label="Name" variant="outlined" />


    </Box>
    <Box 
      sx = {{ width:300, height:600 , position:'absolute' ,  left:'70%' , top:'15%',
             padding:'55px', borderRadius: '0% 0% 0% 0%', boxShadow: '3px 2px 9px grey',}} 
             > 
            
      <Box
      sx = {{borderBottom:'5px solid black', width:'100%', height:150, left:0,top:0, position:"absolute",
      bgcolor: 'primary.main' 
      }}
      
      >


      </Box>
      
        <Stack direction="row"
          sx={{ position:'absolute', left:'36%', top:'12%', border:'4px solid black', borderRadius:40
            
          }}
        >
          <Avatar
          src="/broken-image.jpg"
          sx = {{width: 100, height:100}}

          ></Avatar>
        </Stack>
        <Typography
          variant="h5"
          sx={{ position:"absolute", top:'29%', left:'29%', opacity:'80%' }}
        >
            Name Surname
          </Typography>

        <Typography

          variant="h7"
          sx={{position:"absolute", top:'36%', left:'43%', opacity:'70%'}}
        >
          E-mail

          
        </Typography>

        <Typography

          variant="h7"
          sx={{position:"absolute", top:'41%', left:'43%', opacity:'70%'}}
        >
          Phone

          
        </Typography>
      
    
    </Box>
  </Box>
  );
};

export default Profile;
