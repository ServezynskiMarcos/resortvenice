import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  InputBase,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import logo from "./Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import s from "./Header.module.css"
const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    const responsive = () =>
      window.innerWidth < 900 ? setMobile(true) : setMobile(false);
    responsive();
    window.addEventListener("resize", () => responsive());
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
    const drawerData = ["My account", "Previous bookings", "Log out"];
    const getDrawerChoices = () => {
      return drawerData.map((e, i) => {
        return (
          <List key={i}>
            <ListItem>{e}</ListItem>
          </List>
        );
      });
    };
    return (
      <Toolbar className={classes.toolbar}>
        <IconButton
          {...{
            edge: "start",
            color: "#ccc",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <img src={logo} alt="a" className={classes.logo} />

        <div className={classes.right}>
          <Typography>Sing in</Typography>
          <Avatar className={classes.avatar} />
        </div>
      </Toolbar>
    );
  };
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <a href="/"><img src={logo} alt="a" className={classes.logo} /></a>
        <div className={s.nav}>
          <a href="/">HOME</a>
          <a href="/rooms">ROOMS</a>
          <a href="/deals">DEALS</a>
        </div>
        <div className={classes.center}>
          <InputBase
            fullWidth
            placeholder="Search"
            inputProps={{ className: classes.input }}
          />
          <SearchIcon />
        </div>
        <div className={s.nav}>
          <a href="/gallery">GALLERY</a>
          <a href="/contact">CONTACT</a>
          <a href="/about">ABOUT US</a>
        </div>
        <div className={classes.right}>
          {/* <Typography>Sing in</Typography> */}
          <Avatar className={classes.avatar} />
        </div>
      </Toolbar>
    );
  };

  return (
    <AppBar className={classes.root}>
      {mobile ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    color: "#000",
    zIndex: 100,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "85px",
    width: "85px",
   
    
  },
  input: {
    padding: theme.spacing(1),
  },
  center: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.2),
    margin: theme.spacing(1),
    border: "1px solid lightgray",
    borderRadius: "999px",
    minWidth: "300px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
}));

export default Header;
