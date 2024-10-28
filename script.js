function hideAllContent() {
    document.getElementById("home-content").style.display = "none";
    document.getElementById("most-wanted-content").style.display = "none";
    document.getElementById("carbon-content").style.display = "none";
    document.getElementById("ug1-content").style.display = "none";
    document.getElementById("ug2-content").style.display = "none";
    document.getElementById("tool-content").style.display = "none";
}

document.getElementById("home-button").addEventListener("click", function() {
    hideAllContent();
    const homeContent = document.getElementById("home-content");
    homeContent.style.display = "flex";
});

document.querySelector(".nav-button:nth-child(2)").addEventListener("click", function() {
    hideAllContent();
    const carbonContent = document.getElementById("carbon-content");
    carbonContent.style.display = "flex";
});

document.querySelector(".nav-button:nth-child(3)").addEventListener("click", function() {
    hideAllContent();
    const mostWantedContent = document.getElementById("most-wanted-content");
    mostWantedContent.style.display = "flex";
});

document.querySelector(".nav-button:nth-child(4)").addEventListener("click", function() {
    hideAllContent();
    const ug1Content = document.getElementById("ug1-content");
    ug1Content.style.display = "flex";
});

document.querySelector(".nav-button:nth-child(5)").addEventListener("click", function() {
    hideAllContent();
    const ug2Content = document.getElementById("ug2-content");
    ug2Content.style.display = "flex";
});

document.querySelector(".nav-tools-button:nth-child(6)").addEventListener("click", function() {
    hideAllContent();
    const toolContent = document.getElementById("tool-content");
    toolContent.style.display = "flex";
});