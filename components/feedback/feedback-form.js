import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { db } from "../../helpers/firebase/firebase";

const FeedbackForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(4);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const data = {
      name,
      email,
      phone,
      feedback,
      rating,
    };
    try {
      await addDoc(collection(db, "userFeedback"), data);
      setName("");
      setEmail("");
      setPhone("");
      setFeedback("");
      setRating(4);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          name="name"
          className={classes.textfield}
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          name="email"
          type="email"
          className={classes.textfield}
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Box
          className={classes.rating}
          component="fieldset"
          borderColor="transparent"
        >
          <Typography component="legend">Your rating</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>
        <TextField
          required
          name="feedback"
          className={classes.textfield}
          id="feedback"
          label="Your valuable feedback"
          placeholder="Share your experience with us"
          variant="outlined"
          multiline
          rows={5}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>
      <div className={classes.submit}>
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save your Review
        </Button>
      </div>
      {success && !error && !loading && (
        <h2 className={classes.success}>
          Successfully submitted your feedback. Thank you!
        </h2>
      )}
      {error && !loading && (
        <h2 className={classes.error}>
          Unable to submit your feedback. Please try again later.
        </h2>
      )}
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
  rating: {
    textAlign: "left",
    margin: "10px",
  },
  error: {
    color: "red",
    fontSize: "1.2rem",
  },
  success: {
    color: "green",
    fontSize: "1.2rem",
  },
}));

export default FeedbackForm;
