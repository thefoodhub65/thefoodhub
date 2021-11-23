import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const TeamCard = ({ imgUrl, name, desp }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={imgUrl} alt={name} width="485" height="497" />
      <div className={classes.titles}>
        <span className={classes.mainTitle}>{name}</span>
        <span className={classes.subTitle}>{desp}</span>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    transition: "all 0.5s ease",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.60) 0px 4px 12px",
    backgroundColor: theme.palette.primary.main,
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.05) rotate(3deg)",
    },
  },
  titles: {
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  mainTitle: {
    fontFamily: "Amita, cursive",
    fontSize: "1.2rem",
  },
  subTitle: {
    fontSize: "0.8rem",
    marginBottom: "5px",
  },
}));

export default TeamCard;
