import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CategoryCard = ({ imgUrl, title, loc }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => router.push(loc)}>
        <Image src={imgUrl} alt={title} width="485" height="497" />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="body2" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 340,
    transition: "all 0.5s ease",
    cursor: "pointer",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.60) 0px 4px 12px",
    "&:hover": {
      transform: "scale(1.05) rotate(3deg)",
    },
  },
  title: {
    fontFamily: "Amita, cursive",
    fontSize: "1.2rem",
    color: "white",
  },
  content: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default CategoryCard;
