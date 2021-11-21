import { makeStyles } from "@material-ui/core/styles";
import { formattedPrice } from "../../helpers/ui/price";

const TiffinItem = ({ tiffin }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{tiffin.name}</h1>
      <p>Price: {formattedPrice(tiffin.price)}</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "5px",
    padding: "0 10px",
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
  },
}));

export default TiffinItem;
