// To open btn-link to price-page by clicking the mouse wheel
let priceLinkButtons = document.querySelectorAll('.btn-group .price-link-btn');
for (let i = 0; i < priceLinkButtons.length; i++) {
    priceLinkButtons[i].addEventListener("mousedown", function(event) {
       if (event.which === 2) {
           window.open('price.html');
       } 
    });
}

// To open btn-link to service-page by clicking the mouse wheel
let service_1LinkButtons = document.querySelectorAll('.btn-group .service_1-link-btn');
for (let i = 0; i < service_1LinkButtons.length; i++) {
    service_1LinkButtons[i].addEventListener("mousedown", function(event) {
       if (event.which === 2) {
           window.open('service_1.html');
       } 
    });
}

