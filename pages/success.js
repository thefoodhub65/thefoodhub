import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <h1>
          Thank you for contacting us. We will try to respond as fast as
          possible.
        </h1>
        <br />
        <p>
          Go to
          <Link href="/">
            <a className={classes.link}>Home page</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    maxWidth: "400px",
    textAlign: "center",
    margin: "20px",
  },
  link: {
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default Page;
