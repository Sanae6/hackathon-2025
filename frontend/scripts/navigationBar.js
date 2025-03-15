window.addEventListener("load", (event) => {
	let navBar = document.querySelector("#navigationBar");
	navBar.innerHTML = `
	  <div class="navbar-container">
		<h1 id="name">Company Name</h1>
		<div class="nav-links">
		  <button onclick="navigateTo('tutors.html')">Tutors</button>
		  <button onclick="navigateTo('bookings.html')">Bookings</button>
		  <button class="seperationPoint" onclick="navigateTo('profile.html')">Profile</button>
		</div>
		<div class="user-info">
		  <p id="userName">First Name Last Name</p>
		  <button onclick="logout()">Logout</button>
		</div>
	  </div>
	`;
  });
  
  function navigateTo(page) {
	window.location.href = page;
  }
  
  function logout() {
	alert("Logging out...");
	// Implement logout logic here
	window.location.href = "login.html";
  }