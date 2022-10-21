import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';


import { IoIosSearch } from "react-icons/io"
import { FaMicrophone } from "react-icons/fa"
import { RiVideoAddLine } from "react-icons/ri"
import { IoIosNotificationsOutline } from "react-icons/io"
import axios from 'axios';
import service from '../../services/navbarTags';

import { dataA, dataB, dataC, dataD, dataE, dataF } from "./data/data"
import { BsYoutube } from "react-icons/bs"
import "./index.css";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const getColor = localStorage.getItem("backgroundColor");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loading, setLoading] = useState(true)
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let navigate = useNavigate('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddd = (value) => {
    localStorage.setItem("backgroundColor",value.target.value)
    setOpen(false);
    
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };


  const drawer = (
    <Box sx={{
      backgroundColor: getColor, height: "100%",
      overflowY: "scroll",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      "::-webkit-scrollbar": {
        display: "none",
      },
      pb: "30px",
      px: "1vw"
    }}>
      {/* <Toolbar /> */}
      <Divider />
      <List sx={{ paddingLeft: "2%" }}>
        {dataA.map((val, index) => (
          <ListItem key={index} disablePadding sx={{ ":hover": { backgroundColor: "#383838" } }} id="navlink">
            <NavLink
              style={{ textDecoration: "none", position: "relative", zIndex: 100, width: "100%", }}
              to={val.href}
            >
              <ListItemButton sx={{ zIndex: "10", width: "100%" }} >
                <Box sx={{ width: "100%", zIndex: "1", display: "flex", }}>
                  <ListItemIcon sx={{ color: "#909090", zIndex: "9", fontSize: "24px" }} className="icon">
                    {index % 2 === 0 ? val.icon : val.icon}
                  </ListItemIcon>
                  <Typography sx={{ color: "#FFFCF8", zIndex: "9" }}>{val.text}</Typography>
                </Box>
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <List sx={{ borderTop: "1px solid #383838", paddingLeft: "2%", borderBottom: "1px solid #383838", width: "90%" }}>
        {dataB.map((val, index) => (
          <ListItem key={index} disablePadding sx={{ ":hover": { backgroundColor: "#383838" } }}>
            <NavLink
              style={{ textDecoration: "none", position: "relative", zIndex: 100, width: "100%" }}
              to={val.href}
            >
              <ListItemButton sx={{ zIndex: "10", width: "100%" }}>
                <Box sx={{ width: "100%", zIndex: "1", display: "flex" }}>
                  <ListItemIcon sx={{ color: "#909090", zIndex: "9", fontSize: "24px" }}>
                    {index % 2 === 0 ? val.icon : val.icon}
                  </ListItemIcon>
                  <Typography sx={{ color: "#FFFCF8", zIndex: "9" }}>{val.text}</Typography>
                </Box>
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <List sx={{ borderTop: "1px solid #383838", paddingLeft: "2%", borderBottom: "1px solid #383838", width: "90%" }}>
        <Typography sx={{ fontFamily: "sans-serif", color: "#AAAAAA", fontWeight: "600", fontSIze: "20px", paddingLeft: "6%" }}>SUBSCRIPTIONS</Typography>
        {dataC.map((val, index) => (
          <ListItem key={index} disablePadding sx={{ ":hover": { backgroundColor: "#383838" } }}>
            <NavLink
              style={{ textDecoration: "none", position: "relative", zIndex: 100, width: "100%" }}
              to={val.href}
            >
              <ListItemButton sx={{ zIndex: "10", width: "100%" }}>
                <Box sx={{ width: "100%", zIndex: "1", display: "flex" }}>
                  <ListItemIcon sx={{ color: "#909090", zIndex: "9", fontSize: "24px", width: "10%" }}>
                    <img src={val.icons} alt="" style={{ width: "50%", borderRadius: "50%", height: "100%" }} />
                  </ListItemIcon>
                  <Typography sx={{ color: "#FFFCF8", zIndex: "9", width: "100%" }}>{val.name}</Typography>
                </Box>
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <List sx={{ borderTop: "1px solid #383838", paddingLeft: "2%", borderBottom: "1px solid #383838", width: "90%" }}>
        <Typography sx={{ fontFamily: "sans-serif", color: "#AAAAAA", fontWeight: "600", fontSIze: "20px", paddingLeft: "6%" }}>EXPLORE</Typography>
        {dataD.map((val, index) => (
          <ListItem key={index} disablePadding sx={{ ":hover": { backgroundColor: "#383838" } }}>
            <NavLink
              style={{ textDecoration: "none", position: "relative", zIndex: 100, width: "100%" }}
              to={val.href}
            >
              <ListItemButton sx={{ zIndex: "10", width: "100%" }}>
                <Box sx={{ width: "100%", zIndex: "1", display: "flex", flexDirection: "row" }}>
                  <ListItemIcon sx={{ color: "#909090", zIndex: "9", fontSize: "24px", width: "10%" }}>
                    {index % 2 === 0 ? val.icon : val.icon}
                  </ListItemIcon>
                  <Typography sx={{ color: "#FFFCF8", zIndex: "9", fontSize: "16px" }}>{val.text}</Typography>
                </Box>
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <List sx={{ paddingLeft: "2%", borderBottom: "1px solid #383838", width: "90%" }}>
        {dataE.map((val, index) => (
          <ListItem key={index} disablePadding sx={{ ":hover": { backgroundColor: "#383838" } }}>
            <NavLink
              style={{ textDecoration: "none", position: "relative", zIndex: 100, width: "100%" }}
              to={val.href}
            >
              <ListItemButton sx={{ zIndex: "10", width: "100%" }}>
                <Box sx={{ width: "100%", zIndex: "1", display: "flex" }}>
                  <ListItemIcon sx={{ color: "#909090", zIndex: "9", fontSize: "24px" }}>
                    {index % 2 === 0 ? val.icon : val.icon}
                  </ListItemIcon>
                  <Typography sx={{ color: "#FFFCF8", zIndex: "9" }}>{val.text}</Typography>
                </Box>
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <List sx={{ paddingLeft: "2%", borderBottom: "1px solid #383838", width: "90%" }}>
        {dataF.map((val, index) => (
          <ListItem key={index} disablePadding sx={{ ":hover": { backgroundColor: "#383838" } }}>
            <ListItemButton sx={{ zIndex: "10", width: "100%" }}>
              <Box sx={{ width: "100%", zIndex: "1", display: "flex", flexDirection: "column" }}>
                <Typography sx={{ color: "#9DAAAA", zIndex: "9", fontSize: "12px", fontWeight: "700" }}>{val.text}</Typography>
                <Typography sx={{ color: "#9DAAAA", zIndex: "9", fontSize: "12px", fontWeight: "700", paddingTop: "5%" }}>{val.text2}</Typography>
                <Typography sx={{ color: "#6C6E71", zIndex: "9", fontSize: "12px", fontWeight: "700", paddingTop: "5%" }}>{val.company}</Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          borderBottom: "1px solid #373737",
          backgroundColor: getColor
        }}
      >
        <Toolbar sx={{ borderBottom: "1px solid #383838" }}>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <input placeholder=' Search' type="text" style={{ width: "50%", height: "40px", backgroundColor: "#121212", borderRadius: "2px", marginRight: "-8%", fontWeight: "500", fontSize: "16px", border: "1px solid #303030", color: "white" }} />
              <Box sx={{ display: "flex", alignItems: "center", width: { md: "8%", xs: "10%", sm: "10%", lg: "5%" }, marginLeft: "3%", ":hover": { cursor: "pointer" } }}>
                <IoIosSearch style={{ width: "100%", backgroundColor: "#313131", height: "37px", padding: "7px 14px", }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", width: { md: "8%", xs: "10%", sm: "10%", lg: "4%" }, borderRadius: "50%", backgroundColor: "#181818", justifyContent: "center", marginLeft: "1%", ":hover": { cursor: "pointer" } }}>
                <FaMicrophone style={{ paddingLeft: "0%", width: "32%", fontSize: "22px", color: "white", borderRadius: "50%", height: "40px", backgroundColor: "#181818" }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "20%", }}>
              <RiVideoAddLine style={{ color: "white", fontSize: "30px", width: "100%" }} />
              <IoIosNotificationsOutline style={{ color: "white", fontSize: "35px", marginLeft: "5%", width: "100%" }} />
              <img src="https://yt3.ggpht.com/jAmnk3xp3qKx5fi302z9S19XXUlS4Ib6t4mRjVUamYD-vb9pmkLZ5tUZHIEcK2bdg9IqaorG=s88-c-k-c0x00ffffff-no-rj-mo" alt="" style={{ width: "20%", borderRadius: "50%", marginLeft: "10%" }} onClick={handleClickOpen} />
              <React.Fragment>
                <Dialog
                  fullWidth={fullWidth}
                  open={open}
                  onClose={handleClose}
                >
                  <DialogTitle>Background rangini o'zgartirish</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Hozir siz background rangini tanlang
                    </DialogContentText>
                    <Box
                      noValidate
                      component="form"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: 'fit-content',
                      }}
                    >
                      <FormControl sx={{ mt: 2, minWidth: 120 }}>
                        <InputLabel htmlFor="max-width">Rangni tanlash</InputLabel>
                        <Select
                          autoFocus
                          value={maxWidth}
                          onChange={handleAddd}
                          label="ChangeColor"
                          inputProps={{
                            name: 'max-width',
                            id: 'max-width',
                          }}
                        >
                          <MenuItem value="#212121">Black</MenuItem>
                          <MenuItem value="white">White</MenuItem>
                          <MenuItem value="red">Red</MenuItem>
                          <MenuItem value="blue">Blue</MenuItem>
                          <MenuItem value="green">Green</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Qaytish</Button>
                    <Button onClick={handleAddd}>Tasdiqlash</Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Box sx={{ backgroundColor: getColor, display: "flex", alignItems: "center", padding: "3%" }}>
            <Typography sx={{ fontSize: "38px", display: "flex", alignItems: "center", marginLeft: "10%", color: "red" }}><BsYoutube /></Typography>
            <Typography sx={{ fontFamily: "sans-serif", color: "white", fontSize: "20px", letterSpacing: "-2px", fontWeight: "600", paddingLeft: "2%" }}>YouTube</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none', xs: "block" } }}
            >
              <MenuIcon />
            </IconButton>

          </Box>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
