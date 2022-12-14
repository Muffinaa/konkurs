import * as React from "react";
import { react, useState } from 'react'
import { Card, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Axios from 'axios' 



export const Register = () => {
  
  const [FnameReg, setFirstnameReg] = useState("");
  const [LnameReg, setLastnameReg] = useState("");
  const [EmailReg, setEmailReg] = useState("");
  const [PasswordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post('http://localhost:3001/Register' , {
      
    FirstName: FnameReg,
    LastName: LnameReg,
    email: EmailReg,
    password: PasswordReg
    
  
  }).then((response) => {
      console.log(response);
  });
  };


  return (
    <Card sx={{ width: "350px", height: '532px', padding: "20px",  backgroundColor: 'white', boxShadow: '3px 2px 9px lightblue',
    margin: '4em', padding: '3em', }}>
      <AccountCircleIcon color="primary" sx={{fontSize: '60px', marginLeft: '145px' }} />
      <Typography 
            sx={{ flexGrow: 3, fontSize: 30, textAlign: 'center', display: { xs: "none", sm: "block" } }}
          >
            Załóż konto
          </Typography>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', marginLeft: '65px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" 
      onChange={(e) => {setFirstnameReg(e.target.value); }} label="First name" variant="outlined" />
      <TextField id="outlined-basic1" 
      onChange={(e) => {setLastnameReg(e.target.value); }} label="Last name" variant="outlined" />
      <TextField id="outlined-basic2" 
      onChange={(e) => {setEmailReg(e.target.value); }} label="Email" variant="outlined" />
      <TextField id="outlined-basic3" 
      onChange={(e) => {setPasswordReg(e.target.value); }} label="Password" variant="outlined" />
      <TextField id="outlined-basic4" label="Confirm password" variant="outlined" />
    </Box>
    <Button variant="contained" size="large" sx={{ marginLeft: '115px', display: { xs: "none", sm: "block" } }}
      onClick={register}
    >
          Stwórz
        </Button>
    </Card>
  );
};

export default Register;
