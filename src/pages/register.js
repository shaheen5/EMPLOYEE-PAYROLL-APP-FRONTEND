import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export const Register = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle} src="https://www.exactax.com/track/img/hr.png"/>
                    <h2 style={headerStyle}>Employee Payroll Registration</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !
                    </Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='First Name' placeholder="Enter your first name" required />
                    <TextField fullWidth label='Last Name' placeholder="Enter your last email" required />
                    <TextField fullWidth label='Email' placeholder="Enter your email id" required />
                    <TextField fullWidth label='Password' placeholder="Enter your password" required />
                    <FormControlLabel control={<Checkbox name="checkedA" />} label="I accept the terms and conditions." required />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    );
}