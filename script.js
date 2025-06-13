document.addEventListener('DOMContentLoaded', () => {
    const japanTimeElement = document.getElementById('japanTime');

    function updateJapanTime() {
        const now = new Date();

        // Options for formatting the date and time in JST
        const options = {
            timeZone: 'Asia/Tokyo', // Specify Japan Standard Time
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h23' // Use 24-hour format
        };

        // Create a formatter for the Japanese locale and specified options
        // 'ja-JP' locale ensures standard Japanese date/time formatting (e.g., YYYY年MM月DD日)
        const japanTimeFormatter = new Intl.DateTimeFormat('ja-JP', options);

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
