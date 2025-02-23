// @ts-nocheck
import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "10%",
    margin: 0,
    overflow: "hidden",
    cursor: "pointer", // Makes it clear that the image is clickable
  },
  image: {
    position: "relative",
    top: 1,
    left: "0",
    width: "100%",
    height: "80%",
    objectFit: "cover",
  },
  modalImage: {
    width: "100%",
    height: "auto",
  },
};

const FullPageImage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Clickable Image */}
      <div style={styles.container} onClick={() => setOpen(true)}>
        <img src="workFlowManager.png" alt="Full Page" style={styles.image} />
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogContent>
          <img src="workflowImage_dialog.png" alt="Expanded View" style={styles.modalImage} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FullPageImage;
