import Drawer from '@mui/material/Drawer';
import React from "react";
// import AddLanguage from "../../pages/language/AddLanguage";
import Sidear from "../container/sidebar/SidebarDrawer";
import { IDrawerProps } from '../HOC/DrawerHoc';
// import { IDrawersNames } from '../utils/Types';
// import ToasterDrawer from "./ToasterDrawer";
type IDrawersNames = "ALL" | "OPEN_DRAWER" | "CLOSE_DRAWER";
interface ICustomDrawers extends IDrawerProps {
    Open: boolean;
    handleClose: (Name: IDrawersNames)=>any;
    disableBackdropClick: boolean
}
const CustomDrawer = (props:ICustomDrawers) => {

  let drawerInnerContent = () => {
    switch (props.Name) {
      case "OPEN_DRAWER":
        return (
          <Sidear
            {...props.DrawerData}
            onClose={props.handleClose}
          />
        );

      default:
        return <div>No Drawer Content!</div>;
    }
  };
  return (
    <React.Fragment key={props.Name || String(Math.random)}>
      <Drawer
        onBackdropClick={()=>props.handleClose(props.Name)}
        // disableBackdropClick={props.disableBackdropClick}
        hideBackdrop={props.disableBackdropClick}
        anchor={props.Anchor}
        className={"w-100"}
        PaperProps={{
          className: `w-100 paper_drawer ${
            (props.DrawerData && props.DrawerData.paperClass) || ""
          }`,
        }}
        open={props.Open}
        onClose={()=>props.handleClose(props.Name)}
      >
        <div className="w-100 h-100">{drawerInnerContent()}</div>
      </Drawer>
    </React.Fragment>
  );
};

export default CustomDrawer;
