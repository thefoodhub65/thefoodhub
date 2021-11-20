import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const FooterItem = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.footerItem}>
      <h1 className={classes.header}>{title}</h1>
      <hr className={classes.divider} />
      <div className={classes.content}>{children}</div>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  footerItem: {
    width: 340,
    margin: "15px",
    zIndex: "10",
  },
  header: {
    color: theme.palette.primary.main,
    fontFamily: "Amita, cursive",
    fontSize: "1.5rem",
  },
  divider: {
    color: theme.palette.primary.main,
  },
  content: {
    padding: "10px",
  },
}));

export default FooterItem;
