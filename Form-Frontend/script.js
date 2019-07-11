/*
 * Manages AJAX POST request to API server
 */
function sendJSON() {
  // Collect form values
  var name = document.getElementById("name").value;
  var birthdate = document.getElementById("birthdate").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var center = document.getElementById("center").value;
  var diet = document.getElementById("diet").value;
  var needs = document.getElementById("needs").value;

  // Store form values in a Javascript Object
  var formData = {
    "name": name,
    "birthdate": birthdate,
    "phone": phone,
    "email": email,
    "address": address,
    "city": city,
    "state": state,
    "zip": zip,
    "center": center,
    "diet": diet,
    "needs": needs
  };
  console.log("Converting JS object to JSON");
  var jsonData = JSON.stringify(formData); // Converts object from JS to JSON
  console.log(jsonData);

  // Send AJAX request to API server
  var requestConfig = {
  "async": true,
  "crossDomain": true, // Enables cross reference API access
  "url": "https://jains.localtunnel.me/forms",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "*/*",
  },
  "processData": false,
  "data": jsonData
  }
  $.ajax(requestConfig).done(function (response) {
    console.log(response); // Logs the response from the API server
    alert("Thanks for your submission!"); // Sends notification to user on successful submission
  });
}

/*
 * Add event listener to form to manage submission
 */
window.addEventListener("load", function () {
  event.preventDefault(); // Prevents form submission and reload
  document.getElementById("button").addEventListener("click", sendJSON); // Add event listener on form button
});
