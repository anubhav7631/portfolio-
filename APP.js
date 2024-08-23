
document.getElementById('menu-icon').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('show');
});

function sendEmail(event) {
  event.preventDefault(); 


  var fullName = document.getElementById('fullName').value;
  var emailAddress = document.getElementById('emailAddress').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var emailSubject = document.getElementById('emailSubject').value;
  var message = document.getElementById('message').value;

  // Construct the mailto link
  var mailtoLink = "mailto:anubhavkumar7631@gmail.com" +
      "?subject=" + encodeURIComponent(emailSubject) +
      "&body=" + encodeURIComponent(
          "Name: " + fullName + "\n" +
          "Email: " + emailAddress + "\n" +
          "Mobile Number: " + mobileNumber + "\n" +
          "Message: " + message
      );

  
  window.location.href = mailtoLink;
    }


document.addEventListener('DOMContentLoaded', () => {
  new Typed('.home-content h3 span', {
      strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
  });
  console.log("Text");
});




