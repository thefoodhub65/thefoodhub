import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const ContactForm = () => {
  const classes = useStyles();

  return (
    <form
      className={classes.form}
      autoComplete="off"
      name="contactForm"
      method="post"
      data-netlify="true"
      action="/contact?success=true"
    >
      <input type="hidden" name="contactForm" value="contactForm" />
      <div>
        <TextField
          required
          name="name"
          className={classes.textfield}
          id="name"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          name="email"
          type="email"
          className={classes.textfield}
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          name="phone"
          type="tel"
          className={classes.textfield}
          id="phone"
          label="Phone number"
          variant="outlined"
          inputProps={{ pattern: "[0-9]{10}" }}
        />
        <TextField
          required
          name="message"
          className={classes.textfield}
          id="message"
          label="Your message"
          variant="outlined"
          multiline
          rows={5}
        />
        <div data-netlify-recaptcha="true"></div>
      </div>
      <div className={classes.submit}>
        <Button type="submit" variant="contained" color="primary">
          <SendIcon style={{ marginRight: "5px" }} />
          SEND
        </Button>
      </div>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: "500px",
    padding: "20px 20px 20px 0",
  },
  textfield: {
    width: "100%",
    margin: "10px",
  },
  submit: {
    margin: "10px",
  },
}));

export default ContactForm;
