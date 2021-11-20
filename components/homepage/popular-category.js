import { makeStyles } from "@material-ui/core/styles";

const PopularCategory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Some of the most popular categories you can get here...</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    position: "relative",
  },
}));

export default PopularCategory;
