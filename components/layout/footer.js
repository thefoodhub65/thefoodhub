import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const Footer = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <span>&#169; The Food Hub 2021</span>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    "& span": {
      flexGrow: 1,
      textAlign: "center",
    },
  },
}));

export default Footer;
