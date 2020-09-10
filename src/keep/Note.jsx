import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteNote } from "./firebase_actions";
import { Grid, CardHeader } from "@material-ui/core/"
import "../components/layout.css";
import Card from "@material-ui/core/Card";

function Note(props) {
  function handleClick() {
    deleteNote(props.id);
    props.onDelete(props.id);
  }

  return (
    <Grid item>
    <Card>Hi</Card>
    </Grid>
  );
}

export default Note;

// <div className="note">
// <h1>{props.title}</h1>
// <p>{props.content}</p>
// <button onClick={handleClick}>
//   <DeleteIcon />
// </button>
// </div>