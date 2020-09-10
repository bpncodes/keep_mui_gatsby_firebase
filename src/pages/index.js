import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SmallCard from "../components/topIconSmall";
import ImgMediaCard from "../components/topIconLarge";
import CreateArea from "../keep/CreateArea";
import { useState, useEffect } from "react";

import Firebase from "firebase";
import { Grid  } from "@material-ui/core/";
import "../components/layout.css";
import NewNote from "../keep/NewNote";
import SEO from "../components/seo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  card: {
    maxWidth: 345,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: "0",
    paddingTop: "56.25%", // 16:9
  },
}));
export default function Index() {

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

  const classes = useStyles();
  return (
    <Grid container style={{ marginTop: 20 }}>
      <SEO title="Home" />
      <Grid item xs={1} sm={2}></Grid>
      <Grid item xs={10} sm={8}>
        <Grid item>
          {" "}
          {/* This is the Icons bar*/}
          <Grid container justify="center" className={classes.root} spacing={3}>
            <Grid item xs={2} sm={1}>
              <ImgMediaCard
                value={"https://api.iconify.design/logos:gatsby.svg"}
              />
            </Grid>
            <Grid item xs={2} sm={1}>
              <SmallCard
                value={"https://img.icons8.com/android/144/000000/plus.png"}
              />
            </Grid>
            <Grid item xs={2} sm={1}>
              <ImgMediaCard
                value={
                  "https://img.icons8.com/color/144/000000/react-native.png"
                }
              />
            </Grid>
            <Grid item xs={2} sm={1}>
              <SmallCard
                value={"https://img.icons8.com/android/144/000000/plus.png"}
              />
            </Grid>
            <Grid item xs={2} sm={1}>
              <ImgMediaCard
                value={
                  "https://img.icons8.com/color/144/000000/google-firebase-console.png"
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/* This is the creation form*/}
          <CreateArea />
        </Grid>
      </Grid>
      {/* <Grid item xs={1} sm={2}></Grid> */}
      <Grid
        item
        container
        justify="flex-start"
        spacing={3}
        style={{ padding: "15px" }}
      >
        {notes.map((item) => (
          <Grid item xs={12} sm={4} md={3}>
            <NewNote
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            ></NewNote>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

//<a href="https://icons8.com/icon/123603/react-native">React Native icon by Icons8</a><a href="https://icons8.com/icon/87330/google-firebase-console">Google Firebase Console icon by Icons8</a>
