import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Home } from '@mui/icons-material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetLogout } from '../../Store/Auth/AuthSlice';
export default function Profile() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const nav = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  function HandelLogout(){
    dispatch(SetLogout())
    nav('/login')
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: '45px' , height: '45px'}}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Link style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/myPlans'>
            <Avatar><Home /></Avatar> My Plans
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/gym'>
            <Avatar><FitnessCenterIcon /></Avatar> Gym
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/services'>
            <Avatar><AnnouncementIcon /></Avatar> Services
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link style={{display: 'flex' , alignItems: 'center' , width: '100%'}} to='/myProfile'>
          <Avatar /> My profile 
          </Link>
        </MenuItem>
        
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=>{
          HandelLogout()
          }}>
         <ListItemIcon><Logout /></ListItemIcon>
          Logout 
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
