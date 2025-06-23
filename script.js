function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

function hideBanner() {
    document.getElementById("cookie-banner").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    if (!getCookie("cookieConsent")) {
        banner.classList.remove("hidden");
    }

    document.getElementById("close-button").addEventListener("click", function () {
        setCookie("cookieConsent", "accept", 365);
        hideBanner();
    });
});
