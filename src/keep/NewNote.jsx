import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import "../components/layout.css";
import { deleteNote } from "./firebase_actions";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NewNote(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function handleClick() {
    deleteNote(props.id);
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          <Box fontWeight="fontWeightBold">
            {props.title}
          </Box>
        </Typography>
        <Typography variant="subtitle1" component="p">
        <Box fontWeight="fontWeightRegular">
          {props.content}
          </Box>
        </Typography>
      </CardContent>
      <IconButton onClick={handleClick}>
        <DeleteIcon color="secondary" />
      </IconButton>
    </Card>
  );
}
