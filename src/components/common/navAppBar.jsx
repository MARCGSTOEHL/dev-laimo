import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavAppBar(props) {
  const classes = useStyles();
  const { site_title, history, menu, search, position } = props;

  console.log("before", menu);

  let icon = (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={() => history.goBack()}
    >
      <ArrowBack />
    </IconButton>
  );

  if (menu) {
    icon = (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
    );
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
          <Toolbar>
            {icon}
            <Typography variant="h6" className={classes.title} align="center">
              {site_title}
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        <AppBar position={position}>
          <Toolbar>
            {icon}
            <Typography variant="h6" className={classes.title} align="center">
              {site_title}
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
