window.addEventListener("load", (event) => {
  let navBar = document.querySelector("#navigationBar");
  navBar.innerHTML = `
			<h1 id="name">Company Name</h1>
			<button>Tutors</button>
			<button>Bookings</button>
			<button class="seperationPoint">Profile</button>
			<p>First Name Last Name</p>
			<button>Logout</button>
  `;
});