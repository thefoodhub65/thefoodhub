import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Hero = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.container}>
      <Image
        className={classes.bgImage}
        src="/images/main_hero.jpg"
        alt="main poster"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={classes.main}>
        <Image src="/logo.svg" alt="The Food Hub" width="300" height="300" />
        <h1 className={`${classes.gap} ${classes.subheader}`}>
          Satisfy your cravings...
        </h1>
        <ButtonGroup
          className={classes.gap}
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button onClick={() => router.push("/menu")} color="primary">
            Our Menu
          </Button>
          <Button onClick={() => router.push("/tiffin")}>Order Tiffin</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    position: "relative",
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      backgroundImage: "url(/images/wave.png)",
      backgroundSize: "80px",
      height: "20px",
      backgroundPosition: "top",
      backgroundRepeat: "repeat-x",
      transform: "rotate(180deg)",
    },
  },
  bgImage: {
    zIndex: "-1",
  },
  main: {
    color: theme.palette.primary.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gap: {
    margin: "20px 0",
  },
  header: {
    fontSize: "clamp(1rem, 2.5vw, 2rem)",
    color: theme.palette.primary.contrastText,
  },
  subheader: {
    fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
  },
}));

export default Hero;
