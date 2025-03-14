// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // 1. Changing text content dynamically
  const welcomeMessage = document.querySelector(".content h2");
  const welcomeParagraph = document.querySelector(".content p");
  const updateTextButton = document.createElement("button");

  updateTextButton.textContent = "Reveal";
  updateTextButton.style.padding = "10px 20px";
  updateTextButton.style.margin = "1rem auto";
  updateTextButton.style.display = "block";
  updateTextButton.style.backgroundColor = "#3498db";
  updateTextButton.style.color = "#fff";
  updateTextButton.style.border = "none";
  updateTextButton.style.borderRadius = "4px";
  updateTextButton.style.cursor = "pointer";

  // Insert button after the paragraph
  welcomeParagraph.insertAdjacentElement("afterend", updateTextButton);

  let isOriginalText = true;
  updateTextButton.addEventListener("click", function () {
    if (isOriginalText) {
      welcomeMessage.textContent = "We really deliver!";
      welcomeParagraph.textContent =
        "We're ranked one of the top telehealth platforms in the nation.";
      updateTextButton.textContent = "Hide";
    } else {
      welcomeMessage.textContent = "Welcome to Virtual Healthcare";
      welcomeParagraph.textContent =
        "TeleHealth Connect brings healthcare to your fingertips. Our platform offers secure video consultations, online prescriptions, and 24/7 access to medical professionals. Whether you need a routine check-up or urgent care advice, we're here to help you stay healthy from the comfort of home.";
      updateTextButton.textContent = "Update Welcome Message";
    }
    isOriginalText = !isOriginalText;
  });

  // 2. Modifying CSS styles via JavaScript
  const featureItems = document.querySelectorAll(".feature-item");
  const styleToggleButton = document.createElement("button");

  styleToggleButton.textContent = "We offer";
  styleToggleButton.style.padding = "10px 20px";
  styleToggleButton.style.margin = "1rem auto";
  styleToggleButton.style.display = "block";
  styleToggleButton.style.backgroundColor = "#3498db";
  styleToggleButton.style.color = "#fff";
  styleToggleButton.style.border = "none";
  styleToggleButton.style.borderRadius = "4px";
  styleToggleButton.style.cursor = "pointer";

  // Insert button after features
  document
    .querySelector(".features")
    .insertAdjacentElement("afterend", styleToggleButton);

  let isOriginalStyle = true;
  styleToggleButton.addEventListener("click", function () {
    featureItems.forEach((item) => {
      if (isOriginalStyle) {
        item.style.backgroundColor = "#3498db";
        item.style.color = "#fff";
        item.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        item.querySelector("h3").style.color = "#fff";
      } else {
        item.style.backgroundColor = "#f5f6fa";
        item.style.color = "#333";
        item.style.boxShadow = "none";
        item.querySelector("h3").style.color = "#2c3e50";
      }
    });
    isOriginalStyle = !isOriginalStyle;
  });

  // 3. Adding or removing an element when a button is clicked
  const footerSection = document.querySelector(".footer-content");
  const toggleNewsletterButton = document.createElement("button");
  const newsletterSection = document.createElement("div");

  toggleNewsletterButton.textContent = "Show Newsletter Signup";
  toggleNewsletterButton.style.padding = "10px 20px";
  toggleNewsletterButton.style.margin = "1rem 0";
  toggleNewsletterButton.style.backgroundColor = "#3498db";
  toggleNewsletterButton.style.color = "#fff";
  toggleNewsletterButton.style.border = "none";
  toggleNewsletterButton.style.borderRadius = "4px";
  toggleNewsletterButton.style.cursor = "pointer";

  newsletterSection.className = "footer-section";
  newsletterSection.innerHTML = `
        <h4>Newsletter</h4>
        <form>
            <input type="email" placeholder="Enter your email" style="padding: 5px; margin: 5px 0;">
            <button type="submit" style="padding: 5px 10px; background-color: #3498db; color: #fff; border: none; border-radius: 4px;">Subscribe</button>
        </form>
    `;
  newsletterSection.style.display = "none";

  // Insert elements
  footerSection.appendChild(toggleNewsletterButton);
  footerSection.appendChild(newsletterSection);

  toggleNewsletterButton.addEventListener("click", function () {
    if (newsletterSection.style.display === "none") {
      newsletterSection.style.display = "block";
      toggleNewsletterButton.textContent = "Hide Newsletter Signup";
    } else {
      newsletterSection.style.display = "none";
      toggleNewsletterButton.textContent = "Show Newsletter Signup";
    }
  });
});
