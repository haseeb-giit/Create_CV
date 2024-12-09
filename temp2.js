function deleteElement() {
    const elements = document.querySelectorAll('.del'); // Select all elements with class "del"
    if (elements.length > 0) {
        elements.forEach(element => element.remove()); // Remove each element
        alert('All elements with class "del" have been deleted.');
    } else {
        alert('No elements found with class "del".');
    }
}

emailjs.init('BGA0G0XkkgqQyHGYI');

function sendmail(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        objectives: document.getElementById('objectives').value,
        father_name: document.getElementById('father-name').value,
        dob: document.getElementById('dob').value,
        cnic: document.getElementById('cnic').value,
        gender: document.getElementById('gender').value,
        religion: document.getElementById('religion').value,
        marital_status: document.getElementById('marital-status').value,
        nationality: document.getElementById('nationality').value,
        domicile: document.getElementById('domicile').value,
        degree: document.getElementById("degree").value,
        marks: document.getElementById("marks").value,
        board: document.getElementById("board").value,
        year: document.getElementById("year").value,
        group: document.getElementById("group").value,
        status: document.getElementById("status").value,
    };


    // Log the data to check before sending
    console.log(formData);

    // Send email using EmailJS
    emailjs.send('service_xd7srzq', 'template_iex3dpn', formData)
        .then(response => {
            alert('Email sent successfully!');
            console.log('Response:', response);
        })
        .catch(error => {
            alert('Failed to send email. Please check the console for details.');
            console.error('Error:', error);
        });
}













// Function to add experience row dynamically
function addExperienceRow() {
    const row = document.createElement('div');
    row.className = 'experience-row';
    row.innerHTML = `
    <input type="text" class="job-title" placeholder="Job Title">
    <textarea class="job-description" placeholder="Job Description"></textarea>
`;
    document.getElementById('experience').appendChild(row);
}

function addPersonalInfoRow() {
    const container = document.getElementById('personal-info');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'personal-info';
    input.placeholder = 'Enter personal information';
    container.appendChild(input);
}

function addQualificationRow() {
    const row = document.createElement('div');
    row.className = 'qualification-row';
    row.innerHTML = `
            <input type="text" class="degree" placeholder="Degree">
            <input type="text" class="board" placeholder="Board">
            <input type="text" class="institution" placeholder="Institution">
            <input type="text" class="year" placeholder="Year">
            <input type="text" class="group" placeholder="Group">
            <input type="text" class="marks" placeholder="Marks/CGPA">
            <input type="text" class="status" placeholder="Status">
        `;
    document.getElementById('qualifications').appendChild(row);
}

// Function to update the CV based on user inputs
function updateCV(event) {
    event.preventDefault();

    // Update header with the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const objectives = document.getElementById('objectives').value;
    document.querySelector('.temp2_header h1').textContent = name;
    document.querySelector('.temp2_header p:nth-child(2)').textContent = `Email: ${email} | Cell no: ${phone}`;
    document.querySelector('.temp2_header p:nth-child(3)').textContent = `Permanent Address: ${address}`;
    document.querySelector('.temp2_section p:nth-child(2) ').innerHTML = objectives;

    // Update Personal Information
    const personalInfoList = document.querySelector('.temp2_list');
    personalInfoList.innerHTML = '';

    document.querySelectorAll('.personal-info').forEach(input => {
        if (input.value) {
            const li = document.createElement('li');
            li.textContent = `${input.placeholder}: ${input.value}`;
            personalInfoList.appendChild(li);
        }
    });

    // Update Qualifications
    const qualificationsTable = document.querySelector('.tablebody');
    qualificationsTable.innerHTML = '';
    document.querySelectorAll('.qualification-row').forEach(row => {
        const degree = row.querySelector('.degree').value;
        const board = row.querySelector('.board').value;
        // const institution = row.querySelector('.institution').value;
        const year = row.querySelector('.year').value;
        const group = row.querySelector('.group').value;
        const marks = row.querySelector('.marks').value;
        const status = row.querySelector('.status').value;
        // <td>${institution}</td>
        if (degree && board && year && group && marks && status) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${degree}</td><td>${board}</td><td>${year}</td><td>${group}</td><td>${marks}</td><td>${status}</td>`;
            qualificationsTable.appendChild(tr);
        }

    });

    // Update Experience
    const experienceList = document.querySelector('.explsit');
    experienceList.innerHTML = '';
    document.querySelectorAll('.experience-row').forEach(row => {
        const jobTitle = row.querySelector('.job-title').value;
        const jobDescription = row.querySelector('.job-description').value;

        if (jobTitle && jobDescription) {
            const li = document.createElement('dt');

            li.innerHTML = `<b>${jobTitle}:</b> ${jobDescription}`;
            experienceList.appendChild(li);
        }
    });
}

// Event listener for download button to generate PDF
document.getElementById("download-btn").addEventListener("click", function () {
    const resumeContainer = document.querySelector(".tamplate   "); // Select the resume section
    const options = {
        margin: 0,
        filename: "Resume.pdf",
        html2canvas: { scale: 2 }, // Improves quality
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // A4 size
    };
    alert("not downlaod");
    // Generate the PDF
    html2pdf().set(options).from(resumeContainer).save();
});
