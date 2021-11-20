import { makeStyles } from "@material-ui/core/styles";
import FeedbackForm from "./feedback-form";

const FeedbackPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Rate your experience with The Food Hub</h1>
      <h2 className={classes.subheader}>
        Tell us about your your favourite dishes at &quot;The Food Hub&quot; or
        if you have any suggestion for us.
      </h2>
      <FeedbackForm />
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
  subheader: {
    fontSize: "clamp(1rem, 2.5vw ,1.5rem)",
  },
}));

export default FeedbackPage;
