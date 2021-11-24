import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CategoryCard from "./category-card";

const PopularCategory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Most Popular Categories</h1>
      <hr className={classes.divider} />
      <Grid className={classes.grid} container justifyContent="center">
        <Grid item className={classes.gridItem}>
          <CategoryCard
            imgUrl="/images/food/south_indian.png"
            title="South Indian"
            loc="/menu#southindian"
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <CategoryCard
            imgUrl="/images/food/north_indian_non_veg.png"
            title="North Indian"
            loc="/menu#northindian"
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <CategoryCard
            imgUrl="/images/food/thali.png"
            title="Chinese Cuisine"
            loc="/menu#chinese"
          />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    color: theme.palette.primary.main,
    fontFamily: "Amita, cursive",
    fontSize: "clamp(1.8rem, 3vw ,2.5rem)",
    maxWidth: "1000px",
    margin: "10px",
    padding: "0 10px",
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
  grid: {
    margin: "10px",
    padding: "10px",
  },
  gridItem: {
    width: 340,
    margin: "15px",
    zIndex: "10",
  },
}));

export default PopularCategory;
