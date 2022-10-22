import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';


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
      <Box
        sx={{bgcolor:'primary.main',width:'100%', height:55, position:"absolute"}}

      >
       <Typography
        variant='h5'
        sx={{position:'absolute', left:'7%', top:'21%', color:"white" }}
      >
        Profile Settings

      </Typography>
      <Stack
        spacing={2}
        direction="row"
        sx={{position:'absolute',float:"right", color:"white", top:'15%', right:"4%" }}
      >
        <Button 
          variant="contained"
          >
          Layout 
        </Button>
        <Button 
          variant="contained"
          

          >
          Privacy  
        </Button>
        <Button 
          variant="contained"
          

          >
          Achivments
        </Button>
      </Stack>  
      </Box> 
      
      <Stack
        spacing={4}
        sx={{left:'5%' , top:'13%', position:"absolute"}}
      >
        <TextField
         sx={{ }}
           disabled
           id="filled-disabled"
           label="Name"
           defaultValue="Name"
            variant="filled" />

       <TextField
         sx={{ }}
          disabled
           id="filled-disabled"
           label="Surname"
           defaultValue="Surname"
           variant="filled" 
           />
           

        <TextField
          id="filled-search"
          label="Age"
          defaultValue="Age"
          type="search"
          variant="filled"
        />
      
      <TextField
          id="filled-search"
          label="Gender"
          defaultValue="Male/Female"
          type="search"
          variant="filled"
        />
        
      </Stack>
        
      <Stack>



      </Stack>
    </Box>
    <Box 
      sx = {{ width:300, height:600 , position:'absolute' ,  left:'70%' , top:'15%',
             padding:'55px', borderRadius: '0% 0% 0% 0%', boxShadow: '3px 2px 9px grey',}} 
             > 
            
      <Box
      sx = {{ width:'100%', height:150, left:0,top:0, position:"absolute",
      bgcolor: 'primary.main' 
      }}
      
      >


      </Box>
      
        <Stack direction="row"
          sx={{ position:'absolute', left:'38%', top:'12%', borderRadius:40
            
          }}
        >
          <Avatar
          src="/broken-image.jpg"
          sx = {{width: 100, height:100}}

          ></Avatar>
        </Stack>
        <Typography
          variant="h5"
          sx={{ position:"absolute", top:'29%', left:'30%', opacity:'80%' }}
        >
            Name Surname
          </Typography>

        <Typography

          variant="h7"
          sx={{position:"absolute", top:'36%', left:'44%', opacity:'70%'}}
        >
          E-mail

          
        </Typography>

        <Typography

          variant="h7"
          sx={{position:"absolute", top:'41%', left:'44%', opacity:'70%'}}
        >
          Phone

          
        </Typography>
      
    
    </Box>
  </Box>
  );
};

export default Profile;
