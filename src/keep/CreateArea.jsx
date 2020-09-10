import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import { createNote, getNotes } from "./firebase_actions";
import "../components/layout.css";
import Card from "@material-ui/core/Card";
import { Grid, CardHeader } from "@material-ui/core/";
import "../components/layout.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function CreateArea(props) {
  //Snackbar
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [note, setNote] = useState({
    title: "",
    content: "",  
    id: "",
  });

  const [expand, setExpand] = useState({
    inputShow: false,
    rows: 1,
    addShow: false,
    showTitle: "none",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title === "" || note.content === "") {
      setOpen(true);
      return;
    }
    createNote(note.title, note.content); //This is for Firebase data s
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expandAll() {
    setExpand({
      inputShow: true,
      rows: 3,
      addShow: true,
      showTitle: "",
    });
  }

  return (
    <Grid container>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please enter title and content fields
        </Alert>
      </Snackbar>
      <Grid item xs={0} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <div>
          <form className="create-note">
            <input
              style={{ display: expand.showTitle }}
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              required
            />
            <textarea
              onClick={expandAll}
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={expand.rows}
              required
            />
            <Zoom in={expand.addShow}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </form>
        </div>
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    </Grid>
  );
}

export default CreateArea;

// You can just set a bool var and use ternary operator to update the rest
