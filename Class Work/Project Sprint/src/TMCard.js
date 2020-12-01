import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
  spacer: {
    flexGrow: 1
  }
});

function TMCard(prop) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>P</Avatar>}
        title="Pondorasti"
      />
        <CardMedia
          className={classes.media}
          image="https://thumbs.videogamer.com/gIzHBeSoybrgy7E6wOblHmNG1C4=/1920x1080/smart/https://s.videogamer.com/meta/39e8/ed097b1d-fca9-4cbc-8b84-4ca56c10b384_AmongUsbanner.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>

        <div className={classes.spacer} />

        <Button size="small" color="primary" variant="contained">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}

export default TMCard