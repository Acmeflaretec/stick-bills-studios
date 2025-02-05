// const scriptURL2 = 'https://script.google.com/macros/s/AKfycbxIgd0gyXlHQN0n2cvBJWELyGT9UIWERI5b_vScMdQlYiFfZAO7uWJseFBbuHG3Vj3qIg/exec';
// const form2 = document.forms['registrationForm2'];
// const registerButton2 = document.getElementById('registerButton');
// const loader2 = document.getElementById('loader');

// form2.addEventListener('submit', e => {
//   e.preventDefault();
  
//   const phoneInput = document.getElementById('phone');
//   const phoneNumber = phoneInput.value.trim();
//   loader2.style.display = 'block'; // Show loading spinner
//   registerButton2.disabled = true; // Disable the button while waiting for response

//   if (validatePhoneNumber(phoneNumber)) {
//     fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
//       .then(response => {
//         loader2.style.display = 'none'; // Hide loading spinner
//         registerButton2.disabled = false; // Re-enable the button
//         if (response.ok) {
//           console.log('Success!', response);
//           form2.reset();
//           setTimeout(() => {
//             showAlert("Success! We will connect with you soon.")
//           }, 2000);
//         } else {
//           console.error('Error!', response.statusText);
//           showAlert('Please try again');
//           loader2.style.display = 'none'; // Hide loading spinner in case of error
//           registerButton2.disabled = false; // Re-enable the button
//           // You might want to provide user feedback here
//         }
//       })
//       .catch(error => {
//         console.error('Error!', error.message);
//         showAlert('Please try again');
//         // You might want to provide user feedback here
//       });
//   } else {
//     showAlert('Please fill out the phone number field with a valid phone number.');
//     loader2.style.display = 'none'; // Hide loading spinner in case of error
//     registerButton2.disabled = false; // Re-enable the button
//   }
// });

// // Phone number validation function
// function validatePhoneNumber(phoneNumber) {
//   // Regular expression to match phone numbers with optional country code
//   // It allows for an optional "+" followed by one or more digits for the country code,
//   // followed by the remaining digits for the phone number.
//   return /^\+?\d{1,3}\d{1,14}$/.test(phoneNumber);
// }

// // Add event listener to check phone number validity on input change
// form2.addEventListener('input', function() {
//   const phoneInput = document.getElementById('phone');
//   const phoneNumber = phoneInput.value.trim();
//   registerButton2.disabled = !validatePhoneNumber(phoneNumber);
// });

// function showAlert(message) {
//   alert(message);
// }
function sendFormData(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const form = document.forms.registrationForm2;
  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const message = form.message.value;

  // Format the WhatsApp message content
  const whatsappNumber = "918590166652"; // Remove the '+' sign for wa.me
  const encodedMessage = encodeURIComponent(
    `*New Form Submission*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`
  );
  
  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open WhatsApp with the formatted message
  window.open(whatsappUrl, '_blank');
  
  // Optional: Clear the form after submission
  form.reset();

  alert('Form submitted. Check WhatsApp!');
}