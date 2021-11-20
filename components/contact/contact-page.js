import { makeStyles } from "@material-ui/core/styles";
import BusinessIcon from "@material-ui/icons/Business";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ContactForm from "./contact-form";

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Feel free to contact us</h1>
      <div>
        <address className={classes.center}>
          <BusinessIcon />
          <span className={classes.gap}>
            401, Pocket-N, Near Aggarwal Sweets, Sarita Vihar, New Delhi -
            110076
          </span>
        </address>
        <br />
        <address className={classes.center}>
          <PhoneIcon />
          <span className={classes.gap}>
            +91 7982755525, +91 7827224907, +91 9667060624, +91 9891596245
          </span>
        </address>
        <br />
        <address className={classes.center}>
          <EmailIcon />
          <span className={classes.gap}>
            <a href="mailto:thefoodhub65@gmail.com" className={classes.link}>
              thefoodhub65@gmail.com
            </a>
          </span>
        </address>
      </div>
      <br />
      <h2>Or</h2>
      <br />
      <h1>Contact us via email</h1>
      <ContactForm />
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
    "& h1": {
      color: theme.palette.primary.main,
      fontFamily: "Amita, cursive",
      fontSize: "clamp(1.5rem, 3vw ,2.5rem)",
    },
  },
  header: {
    marginBottom: "20px",
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
  gap: {
    margin: "0 5px",
    textAlign: "left",
  },
}));

export default ContactPage;
