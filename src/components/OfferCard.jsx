import react from "react";
import {
  Button,
  Card,
  Typography,
  IconButton,
  Tooltip,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { red } from "@mui/material/colors";


export const OfferCard = (props) => {
  const [favorite, setFavorite] = react.useState(false);

  return (
    <Card sx={{ width: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/1080"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {props.location}
        </Typography>
       
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Udostępnij">
          <IconButton aria-label="Share" component="label">
            <Share />
          </IconButton>
        </Tooltip>
        <Tooltip title="Zapisz">
          <IconButton
            onClick={() => setFavorite(favorite ? false : true)}
            sx={{ color: red[400] }}
            aria-label="Favorite"
            component="label"
          >
            {favorite ? (
              <Favorite sx={{ color: red[400] }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </Tooltip>

        <Button sx={{ marginLeft: "auto" }} color="error" variant="text">
          Informacje
        </Button>
      </CardActions>
    </Card>
  );
};
