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

/**
 * @type {{name: string, selected: boolean}[]}
 */
let subjects = SUBJECTS.map(subject => entry(subject));

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
  for (const subject of subjects) {
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

function selectedOrTrue(list, finder) {
  if (list.find(x => x.selected) === undefined) return true;
  return list.find(x => x.selected && finder(x)) !== undefined
}

function filterChanged() {
  filterTutors(tutor => selectedOrTrue(subjects, x => x.name === tutor.subject)
    && selectedOrTrue(daysOfTheWeek, x => tutor.availablity.includes(x.name)));
}

let subjectFilter = document.querySelector("#subjectFilter > div");
subjectFilter.addEventListener("click", (event) => {
  if (event.target instanceof HTMLButtonElement) {
    let subject = event.target.parentNode.querySelector("p").textContent;

    let subjectListIndex = findEntry(subjects, subject);

    if (subjects[subjectListIndex].selected === false) {
      event.target.classList = "active";
      subjects[subjectListIndex].selected = true;
    }
    else {
      event.target.classList = "";
      subjects[subjectListIndex].selected = false;
    }
    filterChanged();
  }
});

let avalibilityFilter = document.querySelector("#avalibilityFilter > div");
avalibilityFilter.addEventListener("click", (event) => {
  let eventTarget = (new String(event.target)).toString();

  if (event.target instanceof HTMLButtonElement) {
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
    filterChanged();
  }
});
