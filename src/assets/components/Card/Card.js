import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography
} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Milk"
          height="180"
          image="https://images.pexels.com/photos/799273/pexels-photo-799273.jpeg"
          title="Milk"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Full cream
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Full cream milk will have all the cream inside it as the name suggests.
            Best for young ones.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
