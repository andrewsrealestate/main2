async function calculateTotalCommission() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec");
        const data = await response.json();

        const tatyanaRecords = data.filter(record => record["Board Name"] === "Tatyana Gavrilyuk");
        const totalCommission = tatyanaRecords.reduce((total, record) => {
            const commission = parseFloat(record["Est Commission"]) || 0;
            return total + commission;
        }, 0);

        // Display result in the HTML
        document.getElementById("totalCommission").textContent = `$${totalCommission.toFixed(2)}`;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

calculateTotalCommission();
