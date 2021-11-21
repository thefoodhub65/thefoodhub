import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { formattedPrice } from "../../helpers/ui/price";

const FoodItem = ({ foodItem }) => {
  const classes = useStyles();
  const prices = Object.entries(foodItem.price);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h2">
          {foodItem.name}
        </Typography>
        {foodItem.description && (
          <Typography className={classes.desp} variant="body2" component="p">
            {foodItem.description}
          </Typography>
        )}
        {foodItem.subcategory && (
          <Typography className={classes.desp} variant="body2" component="p">
            {foodItem.subcategory}
          </Typography>
        )}
        <Typography className={classes.prices}>
          <span>Prices</span>
          {prices.map(([key, value]) => (
            <span key={key}>{`${key}: ${formattedPrice(value)}`}</span>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
  },
  desp: {
    fontSize: "0.8rem",
    color: theme.palette.grey[700],
  },
  prices: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.9rem",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));

export default FoodItem;
