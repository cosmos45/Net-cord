import React from "react";
import "./SidebarChannel.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
  };
  return (
    <div className="sidebarChannel">
      <Chip
        icon={<FaceIcon />}
        label={channelName}
        onClick={handleClick}
        onDelete={handleDelete}
        color='primary'
        
      />
    </div>
  );
}

export default SidebarChannel;
