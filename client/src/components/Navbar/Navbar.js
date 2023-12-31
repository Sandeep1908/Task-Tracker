import './Navbar.css';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#04A29F'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  menuButton: {
    marginRight: 36,
    
  },
  [theme.breakpoints.down('xs')]: {
      width: 0,
      display: 'none',
    },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    fontFamily: 'Days One',
    fontSize: '32px'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      position: 'absolute'
    },
    
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      width: 0,
      display: 'none',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    
  },
  fixedHeight: {
    height: 240,
  },
}));

const Navbar = ({ pages, setpageState, me, isLoggedIn, handleLogOut }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // eslint-disable-next-line
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // eslint-disable-next-line
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // eslint-disable-next-line
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorEl(null);
  };

  return(
  <>
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <img src="https://www.projectmanager.com/wp-content/uploads/2022/04/PM-logo-email.png" alt="" className="brandicon" />
        </Typography>
          <div className={classes.sectionDesktop}>
            {
              !isLoggedIn
              ? (
                  <Button color="inherit" href="/login">Login</Button>
              )
              : (
                  <IconButton
                    aria-label="user menu"
                    aria-controls="user-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleUserClick}
                  >
                    <AccountCircle /> <span className="usermenuname">{me.username}</span>
                  </IconButton>
              )
            }
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleUserClose}
            >
             
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </div>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <div>
          <ListItem button component={Link} to='/'>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
              <ListItemText primary="Dashboard" /> 
          </ListItem>
          <ListItem button component={Link} to='/projects'>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
              <ListItemText primary="View My Projects" />
          </ListItem>
            <ListItem button component={Link} to='/me'>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
              <ListItemText primary="Reported By Me" />
          </ListItem>
            <ListItem button component={Link} to='/help'>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
              <ListItemText primary="Community Issues" />
          </ListItem>
            <ListItem button component={Link} to='/about'>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
        </div>
      </List>
    </Drawer>
  </>
  )
}

export default Navbar