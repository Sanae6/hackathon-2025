async function doGet(url) {
  return await (await fetch(url)).json();
}
async function doPost(url, json) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json)
  });
}

const api = {
  /**
   * 
   * @returns {Tutor[]}
   */
  async getTutors() {
    return await doGet("/api/tutors");
  },
  async loginTutor(firstName, lastName) {
    return await doGet(`/api/tutors/login?firstName=${encodeURI(firstName)}&lastName=${encodeURI(lastName)}`)
  },
  async loginUser(firstName, lastName) {
    return await doGet(`/api/users/login?firstName=${encodeURI(firstName)}&lastName=${encodeURI(lastName)}`)
  },

  async createUser(firstName, lastName, pronouns) {
    await doPost("/api/users/createUsers", { firstName, lastName, pronouns });
  },

  async createTutor(firstName, lastName, age, gpa, subject, pronouns) {
    await doPost("/api/tutors/createTutor", { firstName, lastName, age, gpa, subject, pronouns });
  }
}

/**
 * @returns {(Tutor & {tutor: true}) | (User & {tutor: false})}
 */
function getInfoFromStorage() {
  const info = localStorage.getItem("info");
  if (info === undefined) {
    location.href = "/login.html";
    throw new Error("no info, redirecting to login")
  }
  return JSON.parse(info);
}
