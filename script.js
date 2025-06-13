document.addEventListener('DOMContentLoaded', () => {
    const japanTimeElement = document.getElementById('japanTime');

    function updateJapanTime() {
        const now = new Date();

        // ONLY show time related options
        const options = {
            timeZone: 'Asia/Tokyo', // Specify Japan Standard Time
            hour: '2-digit',      // e.g., 10
            minute: '2-digit',    // e.g., 30
            second: '2-digit',    // e.g., 45
            hourCycle: 'h23'      // Use 24-hour format (e.g., 14:00:00)
            // You can remove 'hourCycle: h23' if you prefer 12-hour format with AM/PM (e.g., 02:00:00 PM)
        };

        // Create a formatter for the Japanese locale and specified options
        // 'en-US' or another locale can also be used if you prefer a different separator for time
        const japanTimeFormatter = new Intl.DateTimeFormat('en-US', options); // Using 'en-US' for common HH:MM:SS format

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
