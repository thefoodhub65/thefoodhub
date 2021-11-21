import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CategoryCard = ({ imgUrl, title, desp, loc }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => router.push(loc)}>
        <Image src={imgUrl} alt={title} width="485" height="497" />
        <CardContent>
          <Typography color="primary" gutterBottom variant="h5" component="h2">
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
    "&:hover": {
      transform: "scale(1.05) rotate(-3deg)",
    },
  },
  // media: {
  //   height: 140,
  // },
}));

export default CategoryCard;
