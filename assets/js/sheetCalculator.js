// Function to fetch data from Google Apps Script
async function fetchData(selectedAgent = "All") {
    const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec";

    try {
        const response = await fetch(googleAppsScriptUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log(data); // Check data structure if needed

        calculateTotalCommission(data, selectedAgent);
        updatePageContent(data); // Add this line back to update page content as needed
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

function calculateTotalCommission(data, selectedAgent = "All") {
    let filteredRecords;

    // Filter data based on the selected agent
    if (selectedAgent === "All") {
        filteredRecords = data.filter(record => record[0] !== "Team Projects");
    } else {
        filteredRecords = data.filter(record => record[0] === selectedAgent);
    }

    const totalCommission = filteredRecords.reduce((total, record) => {
        const commissionValue = record[16];
        if (commissionValue === "N/A" || commissionValue == null) return total;

        const commission = typeof commissionValue === "string"
            ? parseFloat(commissionValue.replace(/[^0-9.-]+/g, ""))
            : commissionValue;

        return total + commission;
    }, 0);

    document.getElementById("totalCommissionDisplay").textContent = `$${totalCommission.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
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

// Event listeners for dropdown menu options
document.getElementById("filterBen").addEventListener("click", () => fetchData("Ben Andrews"));
document.getElementById("filterTatyana").addEventListener("click", () => fetchData("Tatyana Gavrilyuk"));
document.getElementById("filterAll").addEventListener("click", () => fetchData("All"));
