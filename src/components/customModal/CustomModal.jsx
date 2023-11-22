import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTheme } from "@mui/material/styles";
import { DialogTitleWrapper, DialogTitleText } from "./style";

const CustomModal = ({ open, handleClose, children, dialogTitle, type }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="">
      <Dialog
        open={open}
        fullWidth
        maxWidth={"sm"}
        onClose={handleClose}
        fullScreen={fullScreen}
      >
        <DialogTitleWrapper>
          <DialogTitleText>Product Details</DialogTitleText>
          <IconButton onClick={handleClose}>
            <AiOutlineCloseCircle />
          </IconButton>
        </DialogTitleWrapper>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomModal;
