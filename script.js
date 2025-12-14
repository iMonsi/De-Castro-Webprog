// A
document.getElementById("themeBtn").onclick = function() {
	document.body.classList.toggle("darkmode");
};

// B
  	const editBtn = document.getElementById("editJobBtn");
  	const jobTitle = document.getElementById("job-title");

  	editBtn.onclick = function () {

  		let newText = prompt("Enter New Job Title");

  		if (newText != null && newText != "") {
  			jobTitle.textContent = newText;
  		}

};

// C
document.getElementById("toggleSkillsBtn").onclick = function() {
	const btn = document.getElementById("toggleSkillsBtn")
	const skills = document.getElementById("skillsSection"); 
		if (skills.style.display === "none"){
			skills.style.display = "block";
			btn.textContent = "Hide Skills";
		}
		else {
			skills.style.display = "none";
			btn.textContent = "Show Skills"
		}
};
// D
	const msgBox = document.getElementById("msgBox");
	const count = document.getElementById("counter");
	const max = 200;

	msgBox.onkeyup = function (){
		let remaining = max - msgBox.value.length;

		if (remaining < 0){
			msgBox.value = msgBox.value.slice(0, max);
			remaining = 0;
			alert("Limit Reached!")
		}

		count.textContent = remaining;
	};

// E
function validateForm() {
	let name = document.getElementById("nameField").value;
	let email = document.getElementById("emailField").value;

	if (name === ""){
		alert("Name is required.");		
		return false;
	}

	if (email === ""){
		alert("Email is required.")		
		return false;
	}
	else {
		return true;
	}
};

// F
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
n = new Date();
y = n.getFullYear();
let m = months[n.getMonth()];
d = n.getDate();
document.getElementById("dateDisplay").innerHTML = m + " " + d + ", " + y;


// G
//Greetings
const date = new Date();
const hour = date.getHours();

let greet;

if (hour < 12) {
	greet = "Good Morning!";
} else if (hour >= 12 && hour < 18) {
	greet = "Good Afternoon!";
} else {
	greet = "Good Evening!";
}
document.getElementById("greet").innerHTML = greet;


// font-size

let fontSize = 25;

	function increaseFont() {
		if (fontSize < 35){
			fontSize += 1;
			document.getElementById("text").style.fontSize = fontSize + "px";
		}
		
	}

	function decreaseFont() {
		if (fontSize > 18){
			fontSize -= 1;
			document.getElementById("text").style.fontSize = fontSize + "px";
		}
	}

