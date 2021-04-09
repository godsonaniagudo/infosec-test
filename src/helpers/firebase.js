import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA_4u4ikNzsVo9uax_zrYRZW8mgoxqxbsc",
  authDomain: "assessment-29048.firebaseapp.com",
  projectId: "assessment-29048",
  databaseURL:
    "assessment-29048-default-rtdb.europe-west1.firebasedatabase.app/",
};
firebase.initializeApp(config);

export const db = firebase.database();
