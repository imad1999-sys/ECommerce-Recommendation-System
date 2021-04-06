import React from "react";
import Fab from "@material-ui/core/Fab";

const floatingActionButton = (props) => {
  return (
    <div>
      <Fab color="primary">
        {props.icon}
      </Fab>
    </div>
  );
}
export default floatingActionButton;