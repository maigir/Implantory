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

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if(username === 'admin' && password === '7734') {
            navigate('/dashboard');
        } else {
            alert('Invalid credentials')
        }
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #6B73FF, #000DFF)',
            }}
        >
        <Paper
            elevation={10}
            sx={{
                p: 4,
                width: '100%',
                borderRadius: 3,
                backdropFilter: 'blur(10px)',
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
        <Typography variant="h4" component="h1" textAlign="center" color="#000DFF">
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
                mt: 2,
                py: 1.5,
                background: '#6B73FF',
                '&:hover': {
                    background: '#000DFF',
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