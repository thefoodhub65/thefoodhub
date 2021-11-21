import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import TiffinItem from "./tiffin-item";

const TiffinPage = ({ tiffins }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Tiffin Service</h1>
      <div className={classes.tiffins}>
        {tiffins.map((tiffin) => (
          <TiffinItem key={tiffin.id} tiffin={tiffin} />
        ))}
      </div>
      <Alert className={classes.info} severity="success" color="info">
        Order thali&apos;s from The food Hub via a phone call on one of the
        numbers provided below. You will get different food items based on your
        thali on different days. And It&apos;s free home delivery 😱😍.
      </Alert>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    color: theme.palette.primary.main,
    fontFamily: "Amita, cursive",
    fontSize: "clamp(1.5rem, 3vw ,2.5rem)",
    maxWidth: "1000px",
    margin: "20px",
  },
  tiffins: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
  },
  info: { margin: "10px", maxWidth: "700px", textAlign: "left" },
}));

export default TiffinPage;
