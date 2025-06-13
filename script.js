document.addEventListener('DOMContentLoaded', () => {
    const japanTimeElement = document.getElementById('japanTime');

    function updateJapanTime() {
        const now = new Date();

        // Options for formatting the date and time in JST
        const options = {
            timeZone: 'Asia/Tokyo', // Specify Japan Standard Time
            year: 'numeric',
            month: 'long',        // e.g., October
            day: 'numeric',       // e.g., 27
            hour: '2-digit',      // e.g., 10
            minute: '2-digit',    // e.g., 30
            second: '2-digit',    // e.g., 45
            hourCycle: 'h23'      // Use 24-hour format
        };

        // Using 'en-US' locale for a widely understood date/time format
        // e.g., October 27, 2023 at 10:30:45 PM
        const japanTimeFormatter = new Intl.DateTimeFormat('en-US', options);

        // Format the current date and time
        const formattedDateTime = japanTimeFormatter.format(now);

        // Update the HTML element
        japanTimeElement.textContent = formattedDateTime;
    }

    // Call the function once immediately to display the time without delay
    updateJapanTime();

    // Update the time every second
    setInterval(updateJapanTime, 1000);
});
