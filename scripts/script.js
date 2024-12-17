document.getElementById('submitBtn').addEventListener('click', () => {
    // Collect form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const q1 = parseInt(document.getElementById('q1').value, 10);
    const q2 = parseInt(document.getElementById('q2').value, 10);
    const q3 = parseInt(document.getElementById('q3').value, 10);
    const q4 = parseInt(document.getElementById('q4').value, 10);
    const q5 = parseInt(document.getElementById('q5').value, 10);

    // Validation for text fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // 10-digit phone number
    const addressRegex = /^.{5,}$/; // Minimum 5 characters for address

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (!addressRegex.test(address)) {
        alert("Address must be at least 5 characters long.");
        return;
    }

    // Validation for feedback questions
    const feedbackQuestions = [q1, q2, q3, q4, q5];
    for (let i = 0; i < feedbackQuestions.length; i++) {
        if (isNaN(feedbackQuestions[i]) || feedbackQuestions[i] < 1 || feedbackQuestions[i] > 10) {
            alert(`Please provide a valid rating (1-10) for question ${i + 1}.`);
            return;
        }
    }

    // Concatenate address into a single text string
    const formattedAddress = address.replace(/\s+/g, ' ');

    // Create JavaScript object
    const formData = {
        firstName,
        lastName,
        email,
        phone,
        address: formattedAddress,
        ratings: { q1, q2, q3, q4, q5 }
    };

    // Log data to console
    console.log(formData);

    // Display data on the website
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${formattedAddress}</p>
        <p><strong>Ratings:</strong></p>
        <ul>
            <li>Website Satisfaction: ${q1}</li>
            <li>Recommendation Likelihood: ${q2}</li>
            <li>Ease of Navigation: ${q3}</li>
            <li>Content Quality: ${q4}</li>
            <li>Customer Support: ${q5}</li>
        </ul>
    `;

    // Calculate and display average rating
    const average = ((q1 + q2 + q3 + q4 + q5) / 5).toFixed(2);
    const averageColor = 
        average <= 3.4 ? 'red' : 
        average <= 7.1 ? 'orange' : 
        'green';

    resultsDiv.innerHTML += `
        <p><strong>Average Rating:</strong> 
        <span style="color: ${averageColor}; font-weight: bold;">
            ${firstName} ${lastName} (${email}): ${average}
        </span></p>
    `;
});
