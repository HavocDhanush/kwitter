var firebaseConfig = {
      apiKey: "AIzaSyAAJEzNJOq9SX1wk4EFtiX9riQVwR037qA",
      authDomain: "class-test-2-1aea9.firebaseapp.com",
      databaseURL: "https://class-test-2-1aea9-default-rtdb.firebaseio.com",
      projectId: "class-test-2-1aea9",
      storageBucket: "class-test-2-1aea9.appspot.com",
      messagingSenderId: "1050268459022",
      appId: "1:1050268459022:web:24a33b711acf510f0c1c5f"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name+ "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names - "+room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;   
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
