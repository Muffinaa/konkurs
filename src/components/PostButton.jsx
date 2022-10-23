import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 375,
};

export default function PostButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ position: "fixed", bottom: 10, right: 10 }}>
      <Fab onClick={handleOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Card p={4} sx={style}>
          <CardContent>
            <Stack direction="column" spacing={1}>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom>
                Create a post
              </Typography>
              <TextField id="outlined-basic" label="Title" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline
                rows={4}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Post</Button>
          </CardActions>
        </Card>
      </Modal>
    </Box>
  );
}
