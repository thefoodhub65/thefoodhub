import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FaqPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Frequently Asked Questions</h1>
      <Accordion className={classes.textAlign}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            How to order food from The food Hub?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can order food from The food Hub via phone call or online
            through Zomato. Just choose the food item you want to order and make
            the phone call to our restaurant on one of the phone numbers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.textAlign}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            When can I order food from food hub?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can order food fron The food Hub all seven days a week from 7:00
            AM to 11:00 PM Indian Standard Time(IST).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.textAlign}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            What are the services provided by the food hub?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The food hub provides you with the following services: (a) You can
            order food from website or Zomato. (b) You can buy tiffin from our
            website. (In tiffin service, you will get different food items on
            different days)
          </Typography>
        </AccordionDetails>
      </Accordion>
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
  },
  header: {
    color: theme.palette.primary.main,
    fontFamily: "Amita, cursive",
    fontSize: "clamp(1.5rem, 3vw ,2.5rem)",
    maxWidth: "1000px",
    margin: "20px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  textAlign: {
    maxWidth: "800px",
    textAlign: "left",
  },
}));

export default FaqPage;
