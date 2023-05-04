function sendEmail() {
    // Get input values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const file = document.getElementById("document").files[0];

    // Construct the email message
    const subject = `New message from ${name}`;
    const body = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        file:${document}
    `;

    // Send the email using EmailJS
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const userID = 'YOUR_USER_ID'; // Replace with your EmailJS user ID

    // Construct the email parameters
    const emailParams = {
        from_name: name,
        from_email: email,
        message_html: body,
        to_email: 'pragnya110@gmail.com', // Replace with the admin's email address
        subject: subject
    };

    // Attach the file to the email
    const fileParams = {
        file: file,
        type: file.type,
        filename: file.name
    };

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, emailParams, userID)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully.');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });

    // Send the attachment using EmailJS
    emailjs.send(serviceID, 'YOUR_ATTACHMENT_TEMPLATE_ID', fileParams, userID)
        .then(function(response) {
            console.log('Attachment SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('Attachment FAILED...', error);
        });
}

function reset() {
    // Reset the form after sending the email
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    document.getElementById("document").value = "";
}
