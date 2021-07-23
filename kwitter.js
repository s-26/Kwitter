var firebaseConfig = {
  apiKey: "AIzaSyBm-AFCQRLESdEHwLwILim-h8qKA7c3ehg",
  authDomain: "einstienbot-olwq.firebaseapp.com",
  databaseURL: "https://einstienbot-olwq-default-rtdb.firebaseio.com",
  projectId: "einstienbot-olwq",
  storageBucket: "einstienbot-olwq.appspot.com",
  messagingSenderId: "500449369376",
  appId: "1:500449369376:web:d492dfa3e930e512c60b45"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser(){  
  user_name=document.getElementById("user_name")  
  firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    localStorage.setItem("user_name",user_name);
    window.location("kwitter_room.html");
}