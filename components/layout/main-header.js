import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const MainHeader = () => {
  const classes = useStyles();

  const { toggleSidebar } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => toggleSidebar()}
          >
            <Image src="/logo.svg" alt="the food hub" width="40" height="40" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            THE FOOD HUB
          </Typography>
          <Link href="/">
            <a className={classes.links}>
              <Button>Home</Button>
            </a>
          </Link>
          <Link href="/">
            <a className={classes.links}>
              <Button>About</Button>
            </a>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  links: {
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
}));

export default MainHeader;
