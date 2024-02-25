// Récupérer le formulaire et écouter l'événement submit
document.getElementById("userInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    var lastName = document.getElementById("last-name").value;
    var firstName = document.getElementById("first-name").value;
    var dateOfBirth = document.getElementById("date").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number").value;
    var linkedin = document.getElementById("linkedin").value;

    // Stocker les données dans le LocalStorage
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("gender", gender);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("linkedin", linkedin);

    // Rediriger l'utilisateur vers la page suivante
    window.location.href = "cv.html";
});
