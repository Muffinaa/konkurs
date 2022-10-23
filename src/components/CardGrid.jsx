import { React, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { OfferCard } from "./OfferCard";

const CardGrid = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Box flex={5} p={2}>
      <Grid container spacing={2} sx={{justifyContent: 'center'}}>
      {posts.map((post) => (
        <Grid item key={post.post_id} xs='auto'>
        <OfferCard
          title={post.title}
          location={post.description}
        />
        </Grid>
      ))}
      </Grid>
    </Box>
  );
};

export default CardGrid;
