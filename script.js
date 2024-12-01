document.getElementById("add-skill").addEventListener("click", function () {
    const skillSection = document.getElementById("skill-section");

    const skillEntry = document.createElement("div");
    skillEntry.classList.add("skill-entry");

    skillEntry.innerHTML = `
        <label>Skill Name</label>
        <input type="text" class="skill-name" placeholder="Skill Name">
        <label>Skill Progress</label>
        <input type="range" class="skill-progress" min="0" max="100">
        <button type="button" class="remove-skill">Delete</button>
    `;

    // Append to skill section
    skillSection.appendChild(skillEntry);

    // Add event listener to the delete button
    skillEntry.querySelector(".remove-skill").addEventListener("click", function () {
        skillEntry.remove();
    });
});

function clk() {
    function deleteHideElements() {
        const elements = document.querySelectorAll(".hide"); // Select all elements with the class 'hide'
        elements.forEach(element => element.remove()); // Remove each element from the DOM
    }
    // Name and Job Title
    document.getElementById("cv-name").innerHTML = document.getElementById("name").value;
    document.getElementById("cv-job").innerHTML = document.getElementById("job").value;

    // Profile Description
    document.getElementById("cv_profile_desc").innerHTML = document.getElementById("profile-description").value;

    // School Name
    const schoolName = document.getElementById("school-name").value;
    const dateFrom = document.getElementById("date-from").value;
    const dateTo = document.getElementById("date-to").value;
    document.getElementById("cv-school").innerHTML = `${schoolName} (${dateFrom} - ${dateTo})`;

    // Company Name and Job Description
    const companyName = document.getElementById("company-name").value;
    const jobDescription = document.getElementById("job-description").value;
    document.getElementById("cv-company").innerHTML = `${companyName} (${dateFrom} - ${dateTo})<br>${jobDescription}`;

    // Contact Information
    document.getElementById("cv-phone").innerHTML = `<strong>PHONE:</strong> ${document.getElementById("phone").value}`;
    document.getElementById("cv-email").innerHTML = `<strong>EMAIL:</strong> ${document.getElementById("email").value}`;

    // Hobbies
    const hobbies = document.getElementById("hobbies").value.split(",");
    const hobbiesList = hobbies.map(hobby => `<li>${hobby.trim()}</li>`).join("");
    document.getElementById("cv-hobbies").innerHTML = hobbiesList;
    // Image 
    const fileInput = document.getElementById("profile-image"); // Select the file input
    const file = fileInput.files[0]; // Get the uploaded file
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Update the <img> tag with ID 'newimg' to show the uploaded image
            const imgTag = document.getElementById("newimg");
            imgTag.src = e.target.result;
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
    }
    // Skills
    const skillEntries = document.querySelectorAll(".skill-entry");
    const cvSkills = document.getElementById("cv-skills");
    cvSkills.innerHTML = ""; // Clear existing skills
    skillEntries.forEach(entry => {
        const skillName = entry.querySelector(".skill-name").value;
        const skillProgress = entry.querySelector(".skill-progress").value;
        if (skillName) {
            cvSkills.innerHTML += `
                <div class="skill">
                    <span>${skillName}</span>
                    <div class="bar">
                        <div class="fill" style="width: ${skillProgress}%;"></div>
                    </div>
                </div>
            `;
        }
    });
}
document.getElementById("download-btn").addEventListener("click", function () {
    const resumeContainer = document.querySelector(".resume-container"); // Select the resume section
    const options = {
        margin: 0,
        filename: "Resume.pdf",
        html2canvas: { scale: 2 }, // Improves quality
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // A4 size
    };
    // Generate the PDF
    html2pdf().set(options).from(resumeContainer).save();
});
