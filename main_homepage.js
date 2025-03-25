document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("calendlyModal");
    const openBtn = document.getElementById("calendly-button");
    const closeBtn = document.querySelector(".close");
    const calendlyContainer = document.getElementById("calendly-container");

    // Open the modal and create the iframe
    openBtn.addEventListener("click", function () {
        modal.style.display = "flex"; // Show modal
        
        // Check if iframe exists, if not, create it
        if (!document.getElementById("calendly-iframe")) {
            let iframe = document.createElement("iframe");
            iframe.id = "calendly-iframe";
            iframe.src = "https://calendly.com/eaglify5/30min";
            iframe.style.width = "1000px";
            iframe.style.height = "685px";
            iframe.style.border = "none";
            iframe.style.borderRadius = "20px";
            calendlyContainer.appendChild(iframe);
        }
    });

    // Close modal and remove iframe
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        calendlyContainer.innerHTML = ""; // Remove iframe to prevent auto-loading
    });

    // Close modal when clicking outside it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            calendlyContainer.innerHTML = "";
        }
    });
});
