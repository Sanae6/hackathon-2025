// FILTER PART

function entry(name) {
  return {
    name: name,
    selected: false,
  }
}

function findEntry(list, name) {
  for (i = 0; i < list.length; i++) {
    if (list[i].name == name) {
      return i;
    }
  }
}

let subects = [entry("Math"), entry("Computer Science"), entry("Physics"), entry("Economics")];
let daysOfTheWeek = [entry("Monday"), entry("Tuesday"), entry("Wednesday"), entry("Thursday"), entry("Friday"), entry("Saturday"), entry("Sunday")];


function filterOption(name) {
  return `
  <div class="filterOption">
    <button></button>
    <p>` + name + `</p>
  </div>
  `;
}

window.addEventListener("load", (event) => {
  let subjectFilters = document.querySelector("#subjectFilter > div");
  subjectFilters.innerHTML = "";
  for (const subject of subects) {
    subjectFilters.innerHTML += filterOption(subject.name);
  }

  let avaliabilityFilters = document.querySelector("#avalibilityFilter > div");
  avaliabilityFilters.innerHTML = "";
  for (const day of daysOfTheWeek) {
    avaliabilityFilters.innerHTML += filterOption(day.name);
  }
});


function resetSubjects() {
  let currentActiveElement = document.querySelector("#subjectFilter > div > .filterOption > .active");
  if (currentActiveElement != null) {
    currentActiveElement.classList = "";
  }
}



let subjectFilter = document.querySelector("#subjectFilter > div");
subjectFilter.addEventListener("click", (event) => {
  let eventTarget = (new String(event.target)).toString();
  
  if (eventTarget === "[object HTMLButtonElement]") {
    let subject = event.target.parentNode.querySelector("p").textContent;
    
    let subjectListIndex = findEntry(subects, subject);
    
    if (subects[subjectListIndex].selected === false) {
      event.target.classList = "active";
      subects[subjectListIndex].selected = true;
    }
    else {
      event.target.classList = "";
      subects[subjectListIndex].selected = false;
    }
  }
});

let avalibilityFilter = document.querySelector("#avalibilityFilter > div");
avalibilityFilter.addEventListener("click", (event) => {
  let eventTarget = (new String(event.target)).toString();
  
  if (eventTarget === "[object HTMLButtonElement]") {
    let day = event.target.parentNode.querySelector("p").textContent;
    
    let dayListIndex = findEntry(daysOfTheWeek, day);
    
    if (daysOfTheWeek[dayListIndex].selected === false) {
      event.target.classList = "active";
      daysOfTheWeek[dayListIndex].selected = true;
    }
    else {
      event.target.classList = "";
      daysOfTheWeek[dayListIndex].selected = false;
    }
  }
});

// TUTOR PART
