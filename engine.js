const firebaseConfig = {
  apiKey: "AIzaSyC1FUl6r5w_zM_qG3-vmYiTCsWiLjOO-nM",
  authDomain: "kunini-21fcf.firebaseapp.com",
  databaseURL: "https://kunini-21fcf.firebaseio.com",
  projectId: "kunini-21fcf",
  storageBucket: "kunini-21fcf.appspot.com",
  messagingSenderId: "556867610659",
  appId: "1:556867610659:web:3b69984deb0d0604d82996"
};
  firebase.initializeApp(firebaseConfig);  
  var database = firebase.database();
	
	var ref = database.ref('Heading');
ref.on('value', gotData, errData);

function gotData(data) {
//console.log(data.val());
  var Heading = data.val();
  var keys = Object.keys(Heading);
}
function errData(err) {
			console.log('error!');
			console.log(err);
}

var firebaseRef = document.getElementById("firebaseRef");
var btn = document.getElementById("btn");

function retrieve() {
var search = document.getElementById("search").value;
var sub = 'dependants'
var ref = database.ref("Heading/" + search);
var subRef = database.ref("Heading/" + search + sub);
ref.on("value", got, errData);
//Subref.on("value", got, errData);

function got(data) {
  var Heading = data.val();
  console.log(data.val())
	
	document.getElementById("mylist").innerHTML += "<li> <b>Client Name:</b> " + data.val().name + data.val().surname +"</li>";
	document.getElementById("mylist").innerHTML += "<li> <b>Gender:</b> " + data.val().gender + "</li>";
	document.getElementById("mylist2").innerHTML += "<li> <b>Phone Number:</b> " + data.val().phone + "</li>";
	document.getElementById("mylist2").innerHTML += "<li> <b>Identity Number:</b> " + data.val().identity + "</li>";
	document.getElementById("mylist3").innerHTML += "<li> <b>Address:</b> " + data.val().address + "</li>";
	document.getElementById("benefit").innerHTML += "<td>" + data.val().dependants.name + "</td>";
	document.getElementById("premium").innerHTML += "<td>" + data.val().dependants.surname + "</td>";
		//li.parent('mylist');
  }    
}


  //console.log(keys);	

  //for (var i = 0; i < keys.length; i++) {
    //var k = keys[i];
    //var cover = Heading[k].cover;
	//var	date = Heading[k].date;
	//console.log(cover,date);	
