import { makeStyles } from "@material-ui/core/styles";
import ItemList from "./item-list";

const MenuPage = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Our delicious menu</h1>
      <div className={classes.category} id="thali">
        <h2 className={classes.subheader}>Thali&apos;s</h2>
        <hr className={classes.divider} />
        <ItemList filterCategory="thali" items={items} />
      </div>
      <div className={classes.category} id="southindian">
        <h2 className={classes.subheader}>South Indian Feast</h2>
        <hr className={classes.divider} />
        <ItemList filterCategory="south indian" items={items} />
      </div>
      <div className={classes.category} id="northindian">
        <h2 className={classes.subheader}>North Indian</h2>
        <hr className={classes.divider} />
        <ItemList filterCategory="north indian" items={items} />
      </div>
      <div className={classes.category} id="nonveg">
        <h2 className={classes.subheader}>Non-veg delight</h2>
        <hr className={classes.divider} />
        <ItemList filterCategory="nonveg" items={items} />
      </div>
      <div className={classes.category} id="chinese">
        <h2 className={classes.subheader}>Chinese</h2>
        <hr className={classes.divider} />
        <ItemList filterCategory="chinese" items={items} />
      </div>
      <div className={classes.category} id="ricebread">
        <h2 className={classes.subheader}>Rice and bread</h2>
        <hr className={classes.divider} />
        <ItemList filterCategory="ricebread" items={items} />
      </div>
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
    marginBottom: "20px",
  },
  header: {
    color: theme.palette.primary.main,
    fontFamily: "Amita, cursive",
    fontSize: "clamp(1.8rem, 3vw ,2.5rem)",
    maxWidth: "1000px",
    margin: "20px",
  },
  category: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "5px 20px",
    padding: "10px",
    textAlign: "left",
  },
  subheader: {
    color: theme.palette.primary.main,
    fontFamily: "Amita, cursive",
    fontSize: "1.5rem",
    margin: "0 10px",
  },
  divider: {
    color: theme.palette.primary.main,
  },
}));

export default MenuPage;
