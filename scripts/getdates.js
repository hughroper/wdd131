const currentYear = document.querySelector("#currentYear");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;