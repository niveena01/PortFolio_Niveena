

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//  Function to toggle the visibility of a specific element and hide others
function toggleContact(paragraphid) {
    var paragraph = document.getElementById(paragraphid);
    var allElements = document.querySelectorAll('.hidden-content');

    // Hide all other elements
    allElements.forEach(function (el) {
        el.style.display = 'none';
    });
    paragraph.style.display = (paragraph.style.display === "" || paragraph.style.display === "none") ? "block" : "none";
}


// Show loader before submitting the form
function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    document.body.appendChild(loader);
}

// Hide loader after submitting the form and show the alert
function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        document.body.removeChild(loader);
    }
}
