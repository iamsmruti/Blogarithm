import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Blogarithm
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LoginComp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data)
    try {
      axios.post('https://blogarithm-api.onrender.com/api/auth/login', {
        email: username,
        password: password
      }, {withCredentials: true} ).then((res) => {
        console.log(res.data)
        setToken(res.data)
        navigate('/dashboard')
      })
    } catch (err) {
      console.log(err.message)
    }
  };

  useEffect(() => {
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '0.5px solid black',
          padding: 3
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 6, mb: 4 }} />
    </Container>
  );
}

export default LoginComp