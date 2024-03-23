function addEducationField() {
    var educationFieldset = document.createElement('fieldset');
    educationFieldset.innerHTML = `
      <label for="education2">Degree: </label><br>
      <input type="text" id="education2" name="education2" placeholder="Ex: Master computer science"><br><br>
      <label for="education2date">Completion Date: </label><br>
      <input type="text" id="education2date" name="education2date" placeholder="Ex: February 2026"> <br><br>
    `;
    document.querySelector('form').insertBefore(educationFieldset, document.querySelector('fieldset:nth-last-of-type(2)'));
  }

  function addExperienceField() {
    var experienceFieldset = document.createElement('fieldset');
    experienceFieldset.innerHTML = `
      <label for="experience2">Position:</label><br>
      <input type="text" id="experience2" name="experience2" placeholder="Ex: Software Engineer"><br><br>
      <label for="experience2dates">Dates:</label><br>
      <input type="text" id="experience2dates" name="experience2dates" placeholder="Ex: January 2023 - Present"><br><br>
      <label for="experience2desc">Description:</label><br>
      <textarea id="experience2desc" name="experience2desc" placeholder="Ex: Developing web applications using JavaScript and Node.js" rows="15" cols="80"></textarea><br>
    `;
    document.querySelector('form').insertBefore(experienceFieldset, document.querySelector('fieldset:last-of-type'));
}



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cvForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi du formulaire
        let formData = new FormData(this);
        let jsonData = {};
        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }
        localStorage.setItem('cvData', JSON.stringify(jsonData)); // Stocke les données du formulaire dans le localStorage
        window.location.href = 'cv.html'; // Redirige vers la page de génération de CV
   });
});
    

  
