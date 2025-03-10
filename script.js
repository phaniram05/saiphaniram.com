/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Data Engineer","Senior Software Engineer","Machine Learning Engineer", "Data Scientist"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Email sending functionality

// document.getElementById('send-email').addEventListener('click', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Get the form data
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var message = document.getElementById('message').value;

//   // Create the email data
//   var emailData = {
//     to: 'saiphaniram98@gmail.com', // Replace with the recipient's email address
//     subject: 'New Email from Your Website',
//     body: 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message
//   };

//   console.log(emailData)
//   // Send the email using a server-side script (e.g., PHP or Node.js)
//   // sendEmail(emailData);
// });

function sendEmail(data) {
  // Make an AJAX request to your server-side script
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    credentials: '2cfcfdaa-6613-4ab3-9f66-7aface492fe5',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email. Please try again later.');
    }
  })
  .catch(function(error) {
    alert('An error occurred while sending the email. Please try again later.');
    console.error('Error:', error);
  });
}
