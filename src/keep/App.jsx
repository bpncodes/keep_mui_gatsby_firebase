import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createNote, getNotes, db } from "./firebase_actions";
import Firebase from "firebase";
import { Grid, CardHeader } from "@material-ui/core/"

function App() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    let ref = Firebase.database().ref("notes");
    console.log(ref);
    ref.on("value", (snapshot) => {
      const cloudNotes = snapshot.val();
      if (cloudNotes == null) {
        setNotes([]);
        return;
      }
      var newnotes = Object.keys(cloudNotes)
        .map((i) => cloudNotes[i])
        .reverse();
      setNotes(newnotes); //  // Similar to componentDidMount and componentDidUpdate:
    });
  }, []);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea /> {/* // create Migrated delete to cloud */}
      <Grid container xs="1" md="2"></Grid>
      <Grid container xs="10" md="8" justify="left">
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </Grid>
      <Grid container xs="1" md="2"></Grid>
      <Footer />
    </div>
  );
}

export default App;
