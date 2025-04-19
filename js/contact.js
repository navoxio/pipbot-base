let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let phone = document.getElementById("phone");

let sendBtn = document.getElementById("sendBtn");
let successDiv = document.getElementById("successDiv");

let count = 0;

sendBtn.addEventListener("click", function (e) {
  count++;

  if (count > 2) {
     
    sendBtn.textContent = "You have sent too many messages. Try again later...";
    return;
  }

  if (fullName.value == "" || email.value == "" || message.value == "") {
    alert("Complete the form before submitting");
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending message...";
   
  let timeStamp = new Date();

  axios
    .post("https://api.pipbot.tech/v1/contact-mail", {
      fullName: fullName.value,
      uEmail: email.value,
      message: message.value,
      phone: phone,
      timeStamp: String(timeStamp)
    })
    .then(function (response) {
       sendBtn.textContent = "Message sent successfully..."
    });
});

