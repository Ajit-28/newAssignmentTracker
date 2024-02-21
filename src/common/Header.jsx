import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar style={{backgroundColor: '#309b9b'}}>
      <Toolbar>
        <Typography component="div" variant='h6' sx={{ flexGrow: 1 }}>
          Assignment Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
