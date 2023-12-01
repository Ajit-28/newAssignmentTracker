import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <AppBar style={{backgroundColor: '#309b9b'}}>
      <Toolbar>
        <Typography component="div" variant='h6' sx={{ flexGrow: 1 }}>
          Assignment Tracker
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' component={Link} to="/">Profile</Button>
          <Button color='inherit' component={Link} to="/assignment">Assignments</Button>
          <Button color='inherit' component={Link} to="/submission">Submission</Button>
          <Avatar>A</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
