import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../components/layout.css";

const useStyles = makeStyles({
  root: {
    width:"60%",
    height:'auto',
    objectFit: "contain",
  },
  fit:{
    objectFit: "contain",
    height:"auto",
    width:"100%"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    // <Card className={classes.root}>
    //   <CardActionArea>
        <CardMedia
          component="img"
          className={classes.fit}
          alt="Contemplative Reptile"
          height="140"
          image={props.value}
          title="Contemplative Reptile"
        />
    //   </CardActionArea>
    // </Card>
  );
}