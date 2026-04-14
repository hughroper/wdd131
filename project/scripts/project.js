document.getElementById("lastModified").textContent = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;



const vegetables = [
    { id: "carrots", name: "Carrots", seeds: 16, method: "Canning", yield: "0.5", type: "jars" },
    { id: "broccoli", name: "Broccoli", seeds: 1, method: "Freezer", yield: "1.0", type: "bags" },
    { id: "cabbage", name: "Cabbage", seeds: 1, method: "Ferment", yield: "1.0", type: "jars" },
    { id: "cauliflower", name: "Cauliflower", seeds: 1, method: "Freezer", yield: "1.0", type: "bags" },
    { id: "lettuce", name: "Lettuce", seeds: 4, method: "Eat fresh", yield: "1-1.5 lbs", type: "Fresh Produce" },
    { id: "spinach", name: "Spinach", seeds: 9, method: "Freezer", yield: "0.5", type: "bags" },
    { id: "kale", name: "Kale", seeds: 1, method: "Freezer", yield: "1.0", type: "bags" },
    { id: "peas", name: "Peas", seeds: 9, method: "Freezer", yield: "0.5", type: "bags" },
    { id: "radishes", name: "Radishes", seeds: 16, method: "Pickle", yield: "0.5", type: "jars" },
    { id: "beets", name: "Beets", seeds: 9, method: "Canning", yield: "0.5", type: "jars" },
    { id: "tomatoes", name: "Tomatoes", seeds: 1, method: "Canning", yield: "2.5-3.0", type: "jars" },
    { id: "corn", name: "Sweet corn", seeds: 4, method: "Freezer", yield: "0.5-1.0", type: "bags" },
    { id: "beans", name: "Green beans", seeds: 9, method: "Canning", yield: "0.5", type: "jars" },
    { id: "cucumbers", name: "Cucumbers", seeds: 4, method: "Pickle", yield: "2.0-3.0", type: "jars" },
    { id: "zucchini", name: "Zucchini squash", seeds: 1, method: "Freezer", yield: "2.0", type: "bags" },
    { id: "peppers", name: "Bell peppers", seeds: 1, method: "Freezer", yield: "1.0-2.0", type: "bags" },
    { id: "eggplant", name: "Eggplant", seeds: 1, method: "Freezer", yield: "1.0-2.0", type: "bags" },
    { id: "onions", name: "Onions", seeds: 16, method: "Cure", yield: "1 lb", type: "Dry Storage" },
    { id: "garlic", name: "Garlic", seeds: 9, method: "Cure", yield: "1-1.5 lbs", type: "Dry Storage" }
];

vegetables.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
});

const vegetableSelect = document.getElementById("vegetable");
const squareFeetInput = document.getElementById("square-feet");
const seedsInput = document.getElementById("seeds");
const methodInput = document.getElementById("method");
const yieldInput = document.getElementById("yield");
const typeInput = document.getElementById("type");

for (let i = 0; i < vegetables.length; i++) {
    const option = document.createElement("option");
    option.value = vegetables[i].id;
    option.textContent = vegetables[i].name;
    vegetableSelect.appendChild(option);
}

function calculateYield(yieldValue, squareFeet) {
    if (squareFeetInput.value === "") {
        return yieldValue;
    }

    if (yieldValue.includes("lb")) {
        let numberPart = yieldValue.replace(" lbs", "").replace(" lb", "");

        if (numberPart.includes("-")) {
            const parts = numberPart.split("-");
            const low = Number(parts[0]) * squareFeet;
            const high = Number(parts[1]) * squareFeet;
            return `${low}-${high} lbs`;
        } else {
            const total = Number(numberPart) * squareFeet;
            return `${total} lbs`;
        }
    } else {
        if (yieldValue.includes("-")) {
            const parts = yieldValue.split("-");
            const low = Number(parts[0]) * squareFeet;
            const high = Number(parts[1]) * squareFeet;
            return `${low}-${high}`;
        } else {
            const total = Number(yieldValue) * squareFeet;
            return `${total}`;
        }
    }
}

function updateFields() {
    const selectedId = vegetableSelect.value;
    const squareFeet = Number(squareFeetInput.value);

    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].id === selectedId) {
            if (squareFeetInput.value === "") {
                seedsInput.value = vegetables[i].seeds;
                yieldInput.value = vegetables[i].yield;
            } else {
                seedsInput.value = vegetables[i].seeds * squareFeet;
                yieldInput.value = calculateYield(vegetables[i].yield, squareFeet);
            }

            methodInput.value = vegetables[i].method;
            typeInput.value = vegetables[i].type;
        }
    }

}

vegetableSelect.addEventListener("change", updateFields);
squareFeetInput.addEventListener("input", updateFields);



