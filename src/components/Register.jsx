import react from "react";
import { Card, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export const Register = () => {

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
      <TextField id="outlined-basic" label="First name" variant="outlined" />
      <TextField id="outlined-basic1" label="Last name" variant="outlined" />
      <TextField id="outlined-basic2" label="Email" variant="outlined" />
      <TextField id="outlined-basic3" label="Password" variant="outlined" />
      <TextField id="outlined-basic4" label="Confirm password" variant="outlined" />
    </Box>
    <Button variant="contained" size="large" sx={{ marginLeft: '115px', display: { xs: "none", sm: "block" } }}>
          Stwórz
        </Button>
    </Card>
  );
};

export default Register;