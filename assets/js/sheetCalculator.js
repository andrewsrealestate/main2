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

function calculateTotalCommission(data) {
    console.log("Raw data:", data); // Log the full data array

    data.forEach((record, index) => {
        console.log(`Record ${index}:`, record); // Log each row
        console.log("Board Name:", record[0]); // Log the Board Name for each row
        console.log("Est Commission:", record[16]); // Log the Est Commission for each row
    });

    // Filter for records where "Board Name" is "Tatyana Gavrilyuk"
    const tatyanaRecords = data.filter(record => record[0] === "Tatyana Gavrilyuk");

    console.log("Filtered records:", tatyanaRecords); // Log filtered records

    // Sum "Est Commission" values (index 16), handling non-numeric values
    const totalCommission = tatyanaRecords.reduce((total, record) => {
        const commissionValue = record[16]; // Index 16 is "Est Commission"
        console.log(`Commission value before parsing: ${commissionValue}`); // Log commission values
        const commission = parseFloat(commissionValue.replace(/[^0-9.-]+/g, "")) || 0;

        console.log(`Parsed commission: ${commission}`); // Log parsed commission
        return !isNaN(commission) ? total + commission : total;
    }, 0);

    console.log("Total Commission after calculation:", totalCommission); // Final total

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
