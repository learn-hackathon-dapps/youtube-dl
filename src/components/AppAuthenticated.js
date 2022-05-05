import React from 'react'
import { Box } from "@mui/system";
import { CssBaseline,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItemButton }
from '@mui/material';

import Ytdl from './YouTubeDownLoader/YtdlApp';

const AppAuthenticated = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
              YoutubeDownloader + Filecoin Demo
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper' : {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
          variant="permanent"
          anchor="left">
          <Toolbar />
          <Divider />
          <List>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "Background.default",
          p: 3
        }}>
        <Toolbar />
        <Ytdl />
      </Box>
    </Box>
  )
}

export default AppAuthenticated