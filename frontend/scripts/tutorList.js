window.addEventListener("load", (event) => {
  let avaliabilityFilters = document.querySelector("#avalibilityFilter > div");
  avaliabilityFilters.innerHTML = `
			<div class="filterOption">
        <button></button>
        <p>Monday</p>
      </div>
      <div class="filterOption">
        <button></button>
        <p>Tuesday</p>
      </div>
      <div class="filterOption">
        <button></button>
        <p>Wednesday</p>
      </div>
      <div class="filterOption">
        <button></button>
        <p>Thursday</p>
      </div>
      <div class="filterOption">
        <button></button>
        <p>Friday</p>
      </div>
      <div class="filterOption">
        <button></button>
        <p>Saturday</p>
      </div>
      <div class="filterOption">
        <button></button>
        <p>Sunday</p>
      </div>
  `;
});

window.addEventListener("load", (event) => {
  let subjectFilters = document.querySelector("#subjectFilter > div");
  subjectFilters.innerHTML = `
			<div class="filterOption">
        <button></button>
        <p>Math</p>
      </div>

      <div class="filterOption">
        <button></button>
        <p>Computer Science</p>
      </div>

      <div class="filterOption">
        <button></button>
        <p>Physics</p>
      </div>

      <div class="filterOption">
        <button></button>
        <p>Economics</p>
      </div>
  `;
});