import {
    Button,
    Dialog,
    DialogContent,
    Fade,
    Grid,
    IconButton,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { forwardRef } from "react";
  
  const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
  });
  
  const handleClick=()=>{
    window.location.href="http://localhost:3000/feedback"
  }

  const handleNoClick=()=>{
    window.location.href="http://127.0.0.1:8000/route/"
  }
  function ConfirmBox({ open, closeDialog, title }) {
    {console.log("entered")}
    return (
       
      <Dialog
        // fullWidth
        open={open}
        // maxWidth="md"
        scroll="body"
        onClose={closeDialog}
        onBackdropClick={closeDialog}
        TransitionComponent={Transition}
      >
        <DialogContent sx={{ px: 4, py: 5, position: "relative" }}>
          <IconButton
            size="medium"
            onClick={closeDialog}
            sx={{ position: "absolute", right: "1rem", top: "1rem" }}
          >
            X
          </IconButton>
  
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Rate Us?</Typography>
  
                <Typography variant="body1">
                  Do you want to give rating ?
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
            >
            <Button onClick={()=>handleClick()} size="medium" variant="contained" color="primary">
                Yes
              </Button>
            <Button onClick={()=>handleNoClick()} size="medium" variant="contained" color="error">
                No
              </Button>{" "}
              
              
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
  
  export default ConfirmBox
