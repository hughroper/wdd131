document.getElementById("lastModified").textContent = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;


const temperature = Number(document.getElementById("temperature").textContent);
const windSpeed = Number(document.getElementById("windSpeed").textContent);

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    const chill =
        13.12 +
        (0.6215 * temperature) -
        (11.37 * Math.pow(windSpeed, 0.16)) +
        (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    windChill = chill.toFixed(1) + " °C";
}


document.getElementById("windChill").textContent = windChill;