import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterItem from "./footer-item";
import BusinessIcon from "@material-ui/icons/Business";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MainFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image
        className={classes.bgImage}
        src="/images/footer.jpg"
        alt="main poster"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Grid className={classes.grid} container justifyContent="center">
        <FooterItem title="Contact">
          <address>
            <BusinessIcon />
            <p>
              401, Pocket-N, Near Aggarwal Sweets, Sarita Vihar, New Delhi -
              110076
            </p>
          </address>
          <br />
          <address>
            <PhoneIcon />
            <p>+91 7982755525, +91 7827224907</p>
          </address>
          <br />
          <address>
            <EmailIcon />
            <p>
              <a href="mailto:thefoodhub65@gmail.com" className={classes.link}>
                thefoodhub65@gmail.com
              </a>
            </p>
          </address>
        </FooterItem>
        <FooterItem title="Quick Links">
          <ul className={classes.list}>
            <li className={classes.listContent}>
              <ArrowForwardIosIcon fontSize="small" />
              <Link href="/">
                <a className={classes.link}>Home</a>
              </Link>
            </li>
            <li className={classes.listContent}>
              <ArrowForwardIosIcon fontSize="small" />
              <Link href="/menu">
                <a className={classes.link}>Menu</a>
              </Link>
            </li>
            <li className={classes.listContent}>
              <ArrowForwardIosIcon fontSize="small" />
              <Link href="/tiffin">
                <a className={classes.link}>Tiffin</a>
              </Link>
            </li>
            <li className={classes.listContent}>
              <ArrowForwardIosIcon fontSize="small" />
              <Link href="/feedback">
                <a className={classes.link}>Feedback</a>
              </Link>
            </li>
            <li className={classes.listContent}>
              <ArrowForwardIosIcon fontSize="small" />
              <Link href="/contact">
                <a className={classes.link}>Contact</a>
              </Link>
            </li>
            <li className={classes.listContent}>
              <ArrowForwardIosIcon fontSize="small" />
              <Link href="/faq">
                <a className={classes.link}>FAQ</a>
              </Link>
            </li>
          </ul>
        </FooterItem>
        <FooterItem title="Opening Hours">
          <p>Our support available to help you seven days a week.</p>
          <br />
          <p>Monday - Sunday: 7:00AM to 11:00PM IST</p>
        </FooterItem>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      width: "100%",
      backgroundImage: "url(/images/wave.png)",
      backgroundSize: "80px",
      height: "20px",
      backgroundPosition: "top",
      backgroundRepeat: "repeat-x",
    },
  },
  bgImage: {
    zIndex: "-10",
  },
  grid: {
    margin: "10px",
    padding: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  list: {
    listStyle: "none",
  },
  listContent: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
    "& a": {
      margin: "0 5px",
    },
  },
}));

export default MainFooter;
