import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    const submitButton = document.getElementById("submit-btn");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const loadingScreen = document.getElementById("loading-screen");

    if (!submitButton || !nameInput || !emailInput || !messageInput || !loadingScreen) {
        console.error("One or more form elements are missing from the DOM.");
        return;
    }

    submitButton.addEventListener("click", async () => {
        console.log("Submit button clicked");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        submitButton.disabled = true; // Disable button to prevent multiple clicks
        loadingScreen.style.display = "block"; // Show loading screen

        // Generate formatted date (MM/DD/YY)
        const now = new Date();
        const formattedDate = `${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")}/${now.getFullYear().toString().slice(-2)}`;

        try {
            // Add document to Firestore with formatted date
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                message: message,
                date: formattedDate, 
                timestamp: serverTimestamp(),
            });

            console.log("Message stored with ID:", docRef.id);
            console.log("Stored Date:", formattedDate);

            alert("Message sent successfully!");
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        } catch (error) {
            console.error("Error sending message: ", error);
            alert("Failed to send message. Please try again.");
        } finally {
            submitButton.disabled = false; // Re-enable button
            loadingScreen.style.display = "none"; // Hide loading screen
        }
    });
});
