import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box 
      sx = {{border:'2px dashed black', width:550, height:700 , position:'absolute' ,  left:'33%' , top:'15%',
             padding:'55px'
            }} > 
            
      <Box
      sx = {{border:'2px dashed black', width:'100%', height:150, left:0,top:0, position:"absolute"}}
      
      >


      </Box>
      
        <Stack direction="row"
          sx={{ position:'absolute', left:'13%', top:'12%', border:'2px dashed black', borderRadius:40, 
            
          }}
        >
          <Avatar
          src="/broken-image.jpg"
          sx = {{width: 100, height:100}}

          ></Avatar>
        </Stack>
        <Typography
          variant="h5"
          sx={{ position:"absolute", top:'27%', left:'9%' }}
        >
            Name Surname
          </Typography>
      
    </Box>
  );
};

export default Profile;
