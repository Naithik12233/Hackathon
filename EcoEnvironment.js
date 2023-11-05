// Create a function to handle the form submission
function handleFormSubmission() {
  // Get the form values
  const address = document.querySelector('#address').value;
  const photo = document.querySelector('#photo').files[0];
  const pollutionType = document.querySelector('#pollutionType').value;
  const pollutionDescription = document.querySelector('#pollutionDescription').value;

window.location.replace("EcoEnvironment.html")
  
  

  // Create a new FormData object
  const formData = new FormData();

  // Add the form values to the FormData object
  formData.append('address', address);
  formData.append('photo', photo);
  formData.append('pollutionType', pollutionType);
  formData.append('pollutionDescription', pollutionDescription);

  // Send the FormData object to the municipal corporation server
  fetch('/report-environmental-problem', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Check if the report was successful
    if (data.status === 'success') {
      // Display a success message
      alert('Environmental problem reported successfully!');
    } else {
      // Display an error message
      alert('Failed to report environmental problem');
    }
  });
}

// Add a listener to the form submission button
document.querySelector('#reportButton').addEventListener('click', handleFormSubmission);
