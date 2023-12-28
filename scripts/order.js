function getLocation() {
    const locationElement = document.querySelector("#location");
    window.navigator.geolocation.getCurrentPosition(
        // on success
        (postion) => locationElement.value = JSON.stringify({
            latitude: postion.coords.latitude,
            longitude: postion.coords.longitude
        }),
        // on error
        (error) => locationElement.value = JSON.stringify({
            latitude: "unknown",
            longitude: "unknown"
        })
    );
}

function setPieOrder(order) {
    const orderElement = document.querySelector("#pie-order");
    orderElement.value = order
}

function showOrderingPie(order) {
    setPieOrder(order);

    const orderObj = JSON.parse(order);

    const containerElement = document.querySelector(".pie");

    // show title
    const titleElement = containerElement.querySelector(".title");
    titleElement.innerText = orderObj.title;

    // show price
    const priceElement = containerElement.querySelector(".price");
    priceElement.innerText = orderObj.price;

    // show description
    const descElement = containerElement.querySelector(".desc");
    descElement.innerText = orderObj.desc;

    // show image
    const imgElement = containerElement.querySelector("img");
    imgElement.setAttribute("src", `../images/${orderObj.id}.png`);
    imgElement.setAttribute("alt", orderObj.title);
}

function onContentLoaded() {
    // request user location
    getLocation();

    const order = localStorage.getItem("order");
    if (order) {
        showOrderingPie(order);
    }
}

window.addEventListener("DOMContentLoaded", (e) => onContentLoaded());