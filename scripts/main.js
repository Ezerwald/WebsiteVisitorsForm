document.getElementById('submitBtn').addEventListener('click', () => {
    // Collect form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const q1 = parseInt(document.getElementById('q1').value, 10);
    const q2 = parseInt(document.getElementById('q2').value, 10);
    const q3 = parseInt(document.getElementById('q3').value, 10);
    const q4 = parseInt(document.getElementById('q4').value, 10);
    const q5 = parseInt(document.getElementById('q5').value, 10);

    // Create JavaScript object
    const formData = {
        firstName,
        lastName,
        email,
        phone,
        address,
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
        <p><strong>Address:</strong> ${address}</p>
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
    resultsDiv.innerHTML += `
        <p><strong>Average Rating:</strong> ${firstName} ${lastName} (${email}): ${average}</p>
    `;
});
