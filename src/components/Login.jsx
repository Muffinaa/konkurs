import react from "react";
import { Card, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export const Login = () => {

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const value = 3.5;
  

  return (
    <Card sx={{ width: "350px", height: '450px', padding: "20px", backgroundColor: 'white', boxShadow: '3px 2px 9px lightblue',
    margin: '4em', padding: '3em', }}>
      <AccountCircleIcon color="primary" sx={{fontSize: '60px', marginLeft: '145px' }} />
      <Typography 
            sx={{ flexGrow: 3, fontSize: 30, textAlign: 'center', display: { xs: "none", sm: "block" } }}
          >
            Logowanie
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
    <Button variant="contained" size="large" sx={{ marginLeft: '78px' }}>
          Login
        </Button>
        <Rating
      sx={{
        width: 50,
        display: 'flex',
        alignItems: 'center',
        float: 'left',
        marginTop: '70px',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Rating sx={{ ml: 2 }}>{labels[value]}</Rating>
    </Rating>
    <Typography 
            sx={{ flexGrow: 3, fontSize: 15, textAlign: 'center', marginTop: '30px', marginLeft: '10px', display: { xs: "none", sm: "block" } }}
          >
            Rate our service!
          </Typography>
    </Card>
  );
};

export default Login;