import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Profile = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Avatar>US</Avatar>
      </Stack>
    </Box>
  );
};

export default Profile;
