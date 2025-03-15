window.addEventListener("load", (event) => {
	let navBar = document.querySelector("#navigationBar");
	const info = getInfoFromStorage();

	console.log(info);

	navBar.innerHTML = `
	  <div class="navbar-container">
		<h1 id="name">Company Name</h1>
		<div class="nav-links">
		  <button onclick="location.href = '/tutorList.html'">Tutors</button>
		  <button onclick="location.href = '/bookings.html'">Bookings</button>
		  <button id="profileNav" class="seperationPoint" onclick="location.href = '/profile.html'">Profile</button>
		</div>
		<div class="user-info">
		  <p id="userName">${info.firstName} ${info.lastName}</p>
		  <button onclick="logout()">Logout</button>
		</div>
	  </div>
	`;

	if (!info.tutor) {
		document.getElementById("profileNav").hidden = true;
	}

	function logout() {
		alert("Logging out...");
		// Implement logout logic here
		localStorage.removeItem("info");
		window.location.href = "/login.html";
	}
	window.logout = logout;

});
