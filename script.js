function calculate() {
    let price = 100
    let education = document.getElementById("education").value;
    switch (education) {
        case "bachelor":
            price *= 1.5;
            break;
        case "college":
            price *= 1.2;
            break;
        case "high_school":
            price *= 1.05;
            break;
        case "middle_school":
            price *= 0.9;
            break;
    }
    let networth = document.getElementById("networth").value;
    switch (networth) {
        case "upper_class":
            price *= 2;
            break;
        case "middle_class":
            price *= 1.5;
            break;
        case "lower_class":
            price *= 1.2;
            break;
    }
    let caste = document.getElementById("caste").value;
    switch (caste) {
        case "brahmin":
            price += 100;
            break;
        case "kshatriya":
            price += 50;
            break;
        case "vaishya":
            price += 20;
            break;
        case "shudra":
            price += 10;
            break;
        case "untouchable":
            price -= 50;
            break;
    }
    if (document.getElementById("musical_instrument").checked) {
        price += 10;
    }
    if (document.getElementById("good_cook").checked) {
        price += 20;
    }
    if (document.getElementById("easygoing").checked) {
        price += 15;
    }
    if (document.getElementById("sings_well").checked) {
        price += 10;
    }
    let age = document.querySelector('input[name="age"]:checked');
    if (age) {
        price *= parseFloat(age.value);
    }
    if (document.getElementById("gossip_parents").checked) {
        price *= 0.85;
    }
    if (document.getElementById("gossip_character").checked) {
        price *= 0.9;
    }
    if (document.getElementById("general_gossip").checked) {
        price -= 20;
    }
    document.getElementById("price").innerHTML = price.toFixed(2) + "$"
}

document.getElementById("education").addEventListener("change", calculate);
document.getElementById("networth").addEventListener("change", calculate);
document.getElementById("caste").addEventListener("change", calculate);

let options = document.querySelectorAll("input")

for (let x of document.querySelectorAll("input")) {
    x.addEventListener("change", calculate)
}

calculate();