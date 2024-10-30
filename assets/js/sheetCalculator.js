// Function to fetch data from Google Apps Script
async function fetchData() {
    const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec";

    try {
        const response = await fetch(googleAppsScriptUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        console.log(data); // Check data structure if needed

        calculateTotalCommission(data);
        updatePageContent(data); // Add data to the page if necessary
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

// Function to calculate total commission based on fetched data
function calculateTotalCommission(data) {
    const tatyanaRecords = data.filter(record => record["Board Name"] === "Tatyana Gavrilyuk");
    
    const totalCommission = tatyanaRecords.reduce((total, record) => {
        const commission = parseFloat(record["Est Commission"].replace(/[^0-9.-]+/g, "")) || 0;
        return !isNaN(commission) ? total + commission : total;
    }, 0);

    document.getElementById("totalCommissionDisplay").textContent = `$${totalCommission.toFixed(2)}`;
}

// Optional: Update HTML elements with data (use only if needed)
function updatePageContent(data) {
    const dataContainer = document.getElementById("sheet-data");
    if (!dataContainer) return;

    data.forEach(item => {
        const p = document.createElement("p");
        p.textContent = JSON.stringify(item);
        dataContainer.appendChild(p);
    });
}

// Fetch data on page load
window.onload = fetchData;
