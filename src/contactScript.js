document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  const USERNAME = import.meta.env.VITE_SMTP_USERNAME;
  const PASSWORD = import.meta.env.VITE_SMTP_PASSWORD;
  const HOST = import.meta.env.VITE_SMTP_HOST;

  function SendContactForm() {
    Email.send({
      Host: HOST,
      Username: USERNAME,
      Password: PASSWORD,
      To: USERNAME,
      From: USERNAME,
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    SendContactForm();
  });
});
