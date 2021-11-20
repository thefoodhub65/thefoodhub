import { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Sidebar from "../wrappers/sidebar";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function UserSidebar() {
  const classes = useStyles();
  const router = useRouter();
  const { toggleSidebar, sidebarOpen } = useContext(GlobalContext);

  const list = () => (
    <div className={classes.list} role="presentation" onClick={toggleSidebar}>
      <List>
        <ListItem button onClick={() => router.push("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => router.push("/menu")}>
          <ListItemIcon>
            <RestaurantMenuIcon />
          </ListItemIcon>
          <ListItemText primary="Our Menu" />
        </ListItem>
        <ListItem button onClick={() => router.push("/tiffin")}>
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText primary="Tiffin Service" />
        </ListItem>
        <ListItem button onClick={() => router.push("/feedback")}>
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem button onClick={() => router.push("/contact")}>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return <Sidebar>{list()}</Sidebar>;
}
