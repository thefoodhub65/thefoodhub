import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FoodItem from "./food-item";

const ItemList = ({ filterCategory, items }) => {
  const classes = useStyles();
  const filteredItems = items.filter((item) => {
    return item.category.toLowerCase().includes(filterCategory.toLowerCase());
  });

  return (
    <Grid className={classes.grid} container justifyContent="center">
      {filteredItems.map((foodItem) => (
        <Grid key={foodItem.id} item className={classes.gridItem}>
          <FoodItem foodItem={foodItem} />
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "10px",
    padding: "10px",
  },
  gridItem: {
    width: 250,
    margin: "15px",
    zIndex: "10",
  },
}));

export default ItemList;
