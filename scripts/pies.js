function orderPageNavigation() {
    const url = window.location.href.replace("pies.html", "order.html");
    window.location.href = url;
}

function orderButtonClicked(button) {
    const container = button.parentNode;

    // create order info
    const order = {
        id: button.getAttribute("data-order"),
        title: container.querySelector(".title").innerText,
        price: container.querySelector(".price").innerText,
        desc: container.querySelector(".desc").innerText,
    }

    // persist order info
    localStorage.setItem("order", JSON.stringify(order));

    orderPageNavigation();
}

function onContentLoaded() {
    // get all buttons
    const orderButtons = document.querySelectorAll("button[data-order]");
    // listen to button clicks
    orderButtons.forEach((button) =>
        button.addEventListener("click", (e) => orderButtonClicked(e.currentTarget)));
}

window.addEventListener("DOMContentLoaded", (e) => onContentLoaded());