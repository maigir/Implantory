import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Container,
} from '@mui/material';

// TODO: Redo login page UI

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const DUMMY_USER = {
        username: 'admin',
        password: '7734'
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if(username === DUMMY_USER.username && password === DUMMY_USER.password) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Container
            maxWidth='sm'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
        <Paper
            elevation={3}
            sx={{
                p: 4,
                width: '100%',
                borderRadius: 2,
                backgroundColor: '#fff',
            }}
        >
        <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
        <Typography variant="h5" component="h1" textAlign="center" color="#333">
            Login
        </Typography>

        <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
        />

        <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
        />

        <Button
            type="submit"
            variant="contained"
            sx={{
                mt: 1,
                py: 1.5,
                background: '#90caf9',
                color: '#333',
                '&:hover': {
                    background: '#64b5f6',
                },
            }}
            fullWidth
        >
            Login
        </Button>
        </Box>
        </Paper>
        </Container>
    )
}

export default Login;