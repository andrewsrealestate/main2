// Function to fetch data from Google Apps Script URL
async function fetchData() {
  const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec"; // Replace with your actual Apps Script URL

  try {
    const response = await fetch(googleAppsScriptUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Assuming your Apps Script returns JSON
    
    // Do something with the data
    console.log(data);  // You can remove this once you know the data structure
    updatePageContent(data); // Update your HTML with the fetched data
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Function to update HTML content with data
function updatePageContent(data) {
  // Example: Suppose you want to update a div with id "sheet-data"
  const dataContainer = document.getElementById("sheet-data");

  // Create dynamic content based on the data
  data.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item; // Adjust to the structure of your data
    dataContainer.appendChild(p);
  });
}

// Call the fetchData function when the page loads
window.onload = fetchData;
