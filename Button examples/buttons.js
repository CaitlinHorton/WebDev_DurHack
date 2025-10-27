// ---------- First Task: Hide a message ----------
const paraBtn = document.getElementById("ParagraphBtn");
const para = document.getElementById("myParagraph");

paraBtn.addEventListener("click", () => {
  if (para.style.display === "none") {
    // Show message
    para.style.display = "block"; 
  } else {
    // Hide message
    para.style.display = "none"; 
  }
});


// ---------- Second Task: Change background colour ----------
const backBtn = document.getElementById("BackColourBtn");

backBtn.addEventListener("click", () => {
  // Use Math.random to get a random colour
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Change the background colour
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});


// ---------- Third Task: Counter button ----------
let counter = 0

const countBtn = document.getElementById("countBtn");
const dispCount = document.getElementById("count");

// Add the event listener to the button and increase the counter
countBtn.addEventListener("click", () => {
  counter++;
  dispCount.textContent = counter;

});