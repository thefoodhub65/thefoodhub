import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Sidebar = ({ children }) => {
  const { toggleSidebar, sidebarOpen } = useContext(GlobalContext);

  return (
    <SwipeableDrawer
      anchor="left"
      open={sidebarOpen}
      onClose={toggleSidebar}
      onOpen={toggleSidebar}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default Sidebar;
