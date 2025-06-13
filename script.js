document.addEventListener('DOMContentLoaded', () => {
    const japanTimeElement = document.getElementById('japanTime');
    const japanDateElement = document.getElementById('japanDate'); // Get the new date element

    function updateJapanTimeAndDate() {
        const now = new Date();

        // Options for the Time display (HH:MM:SS)
        const timeOptions = {
            timeZone: 'Asia/Tokyo',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h23' // 24-hour format (e.g., 14:00:00)
        };
        // Using 'en-US' for standard HH:MM:SS format
        const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
        japanTimeElement.textContent = timeFormatter.format(now);

        // Options for the Date display (e.g., October 27, 2023)
        const dateOptions = {
            timeZone: 'Asia/Tokyo',
            weekday: 'long', // e.g., Friday
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        // Using 'en-US' for standard Month Day, Year format
        const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
        japanDateElement.textContent = dateFormatter.format(now);
    }

    // Call the function once immediately
    updateJapanTimeAndDate();

    // Update the time and date every second
    setInterval(updateJapanTimeAndDate, 1000);
});
