import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  const filters = [
    'filter1',
    'filter2'
  ];

  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <List >
        {filters.map((filter, i) => (
          <ListItem component="a" href="#simple-list">
            <ListItemText
              primary={filter}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Sidebar;
