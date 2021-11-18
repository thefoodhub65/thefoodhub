import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const MainHeader = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 767px)");

  const { toggleSidebar } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start">
            <Image src="/logo.svg" alt="the food hub" width="35" height="35" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            The Food Hub
          </Typography>
          {matches ? (
            <>
              <Link href="/" passHref>
                <Button>Home</Button>
              </Link>
              <Link href="/about" passHref>
                <Button>About</Button>
              </Link>
            </>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => toggleSidebar()}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Amita, cursive",
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
}));

export default MainHeader;
