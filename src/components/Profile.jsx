<<<<<<< HEAD
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FormControl, Icon, Typography } from "@mui/material";
=======
import react from "react";
import { Card, Typography } from "@mui/material";
import Box from '@mui/material/Box';
>>>>>>> fc72c4d2736216781cde5171a9c0ab650235d94e
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import Switch from '@mui/material/Switch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
=======
>>>>>>> fc72c4d2736216781cde5171a9c0ab650235d94e


export const Login = () => {


  return (
    <Card sx={{ width: "350px", height: '450px', padding: "20px", backgroundColor: 'white', boxShadow: '3px 2px 9px lightblue',
    margin: '4em', padding: '3em', }}>
      <AccountCircleIcon color="primary" sx={{fontSize: '60px', marginLeft: '145px' }} />
      <Typography 
            sx={{ flexGrow: 3, fontSize: 30, textAlign: 'center', display: { xs: "none", sm: "block" } }}
          >
<<<<<<< HEAD
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

      <TextField
         sx={{ }}
           id="filled-disabled"
           label="Job"
           defaultValue="Job"
            variant="filled" />
        
      </Stack>
      <FormControl
        spacing={4}
        sx={{left:'30%' , top:'14%', position:"absolute" }}
      >
        <Switch
        
        {...label} 
        
        />

        <Switch
        
        {...label} 
        
        />

        <Switch
        
        {...label} 
        
        />
        
      </FormControl>
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
=======
            Logowanie
>>>>>>> fc72c4d2736216781cde5171a9c0ab650235d94e
          </Typography>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', marginLeft: '65px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First name" variant="outlined" />
      <TextField id="outlined-basic1" label="Last name" variant="outlined" />
      <TextField id="outlined-basic2" label="Email" variant="outlined" />
      <TextField id="outlined-basic3" label="Password" variant="outlined" />
    </Box>
    <Button variant="contained" size="large" sx={{ marginLeft: '125px' }}>
          Login
        </Button>
    </Card>
  );
};

export default Login;
