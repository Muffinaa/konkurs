import react from "react";
import { Card, Typography, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const OfferCard = () => {
  const [favorite, setFavorite] = react.useState(false);

  return (
    <Card sx={{ width: "350px", padding: "20px" }}>
      <Typography>Hello</Typography>
      <IconButton
        onClick={() => setFavorite(favorite ? false : true)}
        color="secondary"
        aria-label="Save"
        component="label"
      >
        {favorite ? <Favorite color="secondary" /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
};
