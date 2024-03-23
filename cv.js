document.addEventListener('DOMContentLoaded', function() {
  var cvData = JSON.parse(localStorage.getItem('cvData'));
  
  document.getElementById('name').textContent = 'Name: ' + cvData['first-name'] + ' ' + cvData['last-name'];
  document.getElementById('email').textContent = 'Email: ' + cvData['email'];
  document.getElementById('date').textContent = 'Date of Birth: ' + cvData['date'];
  document.getElementById('phone').textContent = 'Phone Number: ' + cvData['phone'];
  

  
  var genderText = '';
  if (cvData['gender'] === 'male') {
    genderText = 'Male';
  } else if (cvData['gender'] === 'female') {
    genderText = 'Female';
  } else {
    genderText = 'Other';
  }
  document.getElementById('gender').textContent = 'Gender: ' + genderText;
  
  document.getElementById('phone').textContent = 'Phone Number: ' + cvData['number'];
  document.getElementById('situation_statut').textContent = 'Situation statut: ' + cvData['situation_statut'];

  // Education
  var educationList = document.getElementById('education-list');
  educationList.innerHTML = '<li>' + cvData['education1'] + ' - ' + cvData['education1date'] + '</li>';

  // Work Experience
  var experienceList = document.getElementById('experience-list');
  experienceList.innerHTML = '<li>' + cvData['experience1'] + ' (' + cvData['experience1dates'] + '): ' + cvData['experience1desc'] + '</li>';

  // Skills
  document.getElementById('competences').textContent = 'Skills: ' + cvData['competences'];

  // Loisirs
  document.getElementById('loisirs-list').textContent = 'Loisirs: ' + cvData['bio'];

  // Languages
  document.getElementById('langue1').textContent = 'Arabic: ' + cvData['langue1'];
  document.getElementById('langue2').textContent = 'English: ' + cvData['langue2'];
  document.getElementById('langue3').textContent = 'French: ' + cvData['langue3'];

  // LinkedIn
  document.getElementById('linkedin-url').textContent = 'LinkedIn: ' + cvData['linkedin'];

  // Profile Picture
  var fileInput = document.getElementById('profile-picture');
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var imageUrl = e.target.result;
    document.getElementById('profile-picture').src = imageUrl;
  };
  reader.readAsDataURL(file);
});

  
document.getElementById('profile-picture').addEventListener('change', function() {
  var fileInput = this;
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var imageUrl = e.target.result;
    document.getElementById('profile-picture').src = imageUrl; // Assuming 'preview' is the ID of the element where you want to display the image
  };
  reader.readAsDataURL(file);
});


document.getElementById('download-pdf').addEventListener('click', function() {
  var cv = document.getElementById('cv');
  html2pdf(cv, {
    margin:       1,
    filename:     'my-cv.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  });
});


