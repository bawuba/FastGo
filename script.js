document.addEventListener('DOMContentLoaded', function() {
    // Hide all hidden content sections initially
    const hiddenContents = document.querySelectorAll('.hidden-content');
    hiddenContents.forEach(section => {
        section.style.display = 'none';
    });

    // Show Home section
    document.getElementById('homeBtn').addEventListener('click', function() {
        toggleVisibility('homeSection');
    });

    // Show Services section
    document.getElementById('servicesBtn').addEventListener('click', function() {
        toggleVisibility('services');
    });

    // Show About Us section
    document.getElementById('aboutBtn').addEventListener('click', function() {
        toggleVisibility('aboutUs');
    });

    // Show/Hide the registration form section
    document.getElementById('toggleRegistration').addEventListener('click', function() {
        const getStartedSection = document.getElementById('getStarted');
        getStartedSection.style.display = getStartedSection.style.display === 'block' ? 'none' : 'block';
    });

    // Toggle rider registration form
    document.getElementById('toggleRiderForm').addEventListener('click', function() {
        const riderForm = document.getElementById('riderRegistrationForm');
        riderForm.style.display = riderForm.style.display === 'none' ? 'block' : 'none';
        document.getElementById('customerRegistrationForm').style.display = 'none'; // Hide customer form if it’s visible
    });

    // Toggle customer registration form
    document.getElementById('toggleCustomerForm').addEventListener('click', function() {
        const customerForm = document.getElementById('customerRegistrationForm');
        customerForm.style.display = customerForm.style.display === 'none' ? 'block' : 'none';
        document.getElementById('riderRegistrationForm').style.display = 'none'; // Hide rider form if it’s visible
    });

    // Function to toggle visibility of sections
    function toggleVisibility(sectionId) {
        hiddenContents.forEach(section => {
            section.style.display = 'none'; // Hide all
        });
        const sectionToDisplay = document.getElementById(sectionId);
        sectionToDisplay.style.display = sectionToDisplay.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
    }

    // Function to handle ride booking
    document.getElementById('bookRide').addEventListener('click', function() {
        const destination = document.getElementById('destination').value;
        if (destination) {
            alert(`Ride booked to: ${destination}`);
            document.getElementById('destination').value = ''; // Clear the input field
        } else {
            alert('Please enter a destination.');
        }
    });

    // Function to handle cargo request
    document.getElementById('requestCargo').addEventListener('click', function() {
        const destination = document.getElementById('destination').value;
        if (destination) {
            alert(`Cargo request sent to: ${destination}`);
            document.getElementById('destination').value = ''; // Clear the input field
        } else {
            alert('Please enter a destination.');
        }
    });

    // Handle Rider Registration
    document.getElementById('riderRegistrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page refresh

        const fullName = document.getElementById('fullNameRider').value;
        const phoneNumber = document.getElementById('phoneNumberRider').value;
        const registrationNumber = document.getElementById('registrationNumberRider').value;
        const riderType = document.getElementById('riderType').value;

        alert(`Rider Registration Successful!\nName: ${fullName}\nPhone: ${phoneNumber}\nRegistration Number: ${registrationNumber}\nRider Type: ${riderType}`);    
        
        // Clear form fields after submission
        document.getElementById('riderRegistrationForm').reset(); 
    });

    // Handle Customer Registration
    document.getElementById('customerRegistrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page refresh

        const fullName = document.getElementById('fullNameCustomer').value;
        const phoneNumber = document.getElementById('phoneNumberCustomer').value;
        const email = document.getElementById('emailCustomer').value;

        alert(`Customer Registration Successful!\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}`);

        // Clear form fields after submission
        document.getElementById('customerRegistrationForm').reset();
    });
});