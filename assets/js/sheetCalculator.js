async function calculateTotalCommission() {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec");
        const data = await response.json();

        console.log("Fetched data:", data); // Log entire data to inspect structure

        // Filter records for "Board Name" equal to "Tatyana Gavrilyuk"
        const tatyanaRecords = data.filter(record => {
            console.log(`Checking record: ${record["Board Name"]}`); // Check each board name
            return record["Board Name"] === "Tatyana Gavrilyuk";
        });

        console.log("Filtered records:", tatyanaRecords); // Log filtered records

        // Sum "Est Commission" values, handling non-numeric values
        const totalCommission = tatyanaRecords.reduce((total, record) => {
            const commissionValue = record["Est Commission"];
            console.log(`Commission value before parsing: ${commissionValue}`); // Log commission values
            const commission = parseFloat(commissionValue.replace(/[^0-9.-]+/g, "")) || 0;

            console.log(`Parsed commission: ${commission}`); // Log parsed commission
            return !isNaN(commission) ? total + commission : total;
        }, 0);

        console.log("Total Commission after calculation:", totalCommission); // Final total

        document.getElementById("totalCommissionDisplay").textContent = `$${totalCommission.toFixed(2)}`;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

calculateTotalCommission();
