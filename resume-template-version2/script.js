function addExperience() {
  const container = document.getElementById("experienceInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
                <input type="text" placeholder="Company Name">
                <input type="text" placeholder="Position">
                <input type="text" placeholder="Duration">
                <textarea placeholder="Description"></textarea>
                <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
            `;
  container.appendChild(div);
}

function addEducation() {
  const container = document.getElementById("educationInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
                <input type="text" placeholder="Institution">
                <input type="text" placeholder="Degree">
                <input type="text" placeholder="Year">
                <input type="text" placeholder="GPA/Score">
                <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
            `;
  container.appendChild(div);
}

// Function to add skill input fields
function addSkill() {
  const container = document.getElementById("skillsInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Skill Name">
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function addCertification() {
  const container = document.getElementById("certificationInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
                <input type="text" placeholder="Certification Name">
                <input type="text" placeholder="Issuing Organization">
                <input type="text" placeholder="Year">
                <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
            `;
  container.appendChild(div);
}

function addProject() {
  const container = document.getElementById("projectInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
                <input type="text" placeholder="Project Name">
                <textarea placeholder="Project Description"></textarea>
                <input type="text" placeholder="Technologies Used">
                <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
            `;
  container.appendChild(div);
}

// Function to add social input fields
function addSocial() {
  const container = document.getElementById("socialInputs");
  const div = document.createElement("div");
  div.className = "input-group";
  div.innerHTML = `
    <input type="text" placeholder="Social Name (e.g., LinkedIn)">
    <input type="text" placeholder="Social URL">
    <button onclick="this.parentElement.remove()" class="remove-btn">Remove</button>
  `;
  container.appendChild(div);
}

function generateResume() {
  const preview = document.getElementById("resumePreview");
  preview.innerHTML = ""; // Clear previous content
  // Personal Information
  const personalInfo = `
                <h2>Personal Information</h2>
                <p><strong>${
                  document.getElementById("fullName").value
                }</strong></p>
                <p>Email: ${document.getElementById("email").value}</p>
                <p>Phone: ${document.getElementById("phone").value}</p>
                <p>Location: ${document.getElementById("location").value}</p>
            `;

  // Professional Summary
  const summary = `
                <h2>Professional Summary</h2>
                <p>${document.getElementById("summary").value}</p>
            `;

  // Work Experience
  let experience = "<h2>Work Experience</h2>";
  document.querySelectorAll("#experienceInputs .input-group").forEach((exp) => {
    const inputs = exp.querySelectorAll("input, textarea");
    experience += `
                    <h3>${inputs[0].value} - ${inputs[1].value}</h3>
                    <p>${inputs[2].value}</p>
                    <p>${inputs[3].value}</p>
                `;
  });

  // Education
  let education = "<h2>Education</h2>";
  document.querySelectorAll("#educationInputs .input-group").forEach((edu) => {
    const inputs = edu.querySelectorAll("input");
    education += `
                    <h3>${inputs[0].value}</h3>
                    <p>${inputs[1].value}</p>
                    <p>${inputs[2].value} | GPA: ${inputs[3].value}</p>
                `;
  });

  // Skills
  let skills = "<h2>Skills</h2><ul>";
  document.querySelectorAll("#skillsInputs .input-group input").forEach((skill) => {
    if (skill.value.trim()) {
      skills += `<li>${skill.value}</li>`;
    }
  });
  skills += "</ul>";

  // Certifications
  let certifications = "<h2>Certifications</h2>";
  document
    .querySelectorAll("#certificationInputs .input-group")
    .forEach((cert) => {
      const inputs = cert.querySelectorAll("input");
      certifications += `
                    <h3>${inputs[0].value}</h3>
                    <p>${inputs[1].value} (${inputs[2].value})</p>
                `;
    });

  // Projects
  let projects = "<h2>Projects</h2>";
  document.querySelectorAll("#projectInputs .input-group").forEach((proj) => {
    const inputs = proj.querySelectorAll("input, textarea");
    projects += `
                    <h3>${inputs[0].value}</h3>
                    <p>${inputs[1].value}</p>
                    <p><strong>Technologies:</strong> ${inputs[2].value}</p>
                `;
  });
//socials
  let socials = "<h2>Social Links</h2><ul>";
  document.querySelectorAll("#socialInputs .input-group").forEach((social) => {
    const inputs = social.querySelectorAll("input");
    if (inputs[0].value.trim() && inputs[1].value.trim()) {
      socials += `<li><strong>${inputs[0].value}:</strong> <a href="${inputs[1].value}" target="_blank">${inputs[1].value}</a></li>`;
    }
  });
  socials += "</ul>";

  // Combine all sections
  preview.innerHTML +=
    personalInfo + summary + experience + education + skills + certifications + projects + socials;
}

// Add initial empty fields
addExperience();
addEducation();
addSkill();
addCertification();
addProject();
