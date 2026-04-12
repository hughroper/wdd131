const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

document.getElementById("lastModified").textContent = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;




const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
    },

    {
        templeName: "Farmington New Mexico",
        location: "Farmington, New Mexico",
        dedicated: "2025, August, 17",
        area: 29066,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/farmington-new-mexico-temple/farmington-new-mexico-temple-62288-main.jpg"
    },

    {
        templeName: "Denver Colorado Temple",
        location: "Centennial, Colorado",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg"
    },

];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";

    filteredTemples.forEach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", () => {
    createTempleCard(temples);
    document.querySelector("h1").textContent = "Home";
});

document.querySelector("#old").addEventListener("click", () => {
    let oldTemples = temples.filter((temple) => {
        let year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    createTempleCard(oldTemples);
    document.querySelector("h1").textContent = "Old Temples";
});

document.querySelector("#new").addEventListener("click", () => {
    let newTemples = temples.filter((temple) => {
        return Number(temple.dedicated.split(",")[0]) > 2000;
    });

    createTempleCard(newTemples);
    document.querySelector("h1").textContent = "New Temples";
});

document.querySelector("#large").addEventListener("click", () => {
    let largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    createTempleCard(largeTemples);
    document.querySelector("h1").textContent = "Large Temples";
});

document.querySelector("#small").addEventListener("click", () => {
    let smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    createTempleCard(smallTemples);
    document.querySelector("h1").textContent = "Small Temples";
});