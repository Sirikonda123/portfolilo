// script.js

// Projects data
const projectsData = [
  {
    title: "Underground cable fault detection",
    desription: "Clearly chooses a region where the fault has occurred and can 
send coordinates as well as displays on the LCD screen..",
  },
  {
    title: "Concealed Cloud-File System shield",
    description: "Dark cloud has the capability to share files but this is not currently an option available to the user. With the 
implemented security scheme it is possible to communicate over a secured channel",
  },
];

// Contact information
const email = "rajkumarsiri2001@gmail.com";
const phone = "7993484614";

// Generate project HTML
const projectContainer = document.getElementById("project-container");
projectsData.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectDescription);
  projectContainer.appendChild(projectDiv);
});

// Set contact information
document.getElementById("email").textContent = email;
document.getElementById("phone").textContent = phone;
