//your JS code here. If required.
// Utility function that returns a Promise resolved after "ms" milliseconds
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementById("btn").addEventListener("click", async function (e) {
  e.preventDefault(); // prevent form submission / page reload

  const text = document.getElementById("text").value.trim();
  const delay = parseInt(document.getElementById("delay").value);

  const output = document.getElementById("output");
  output.innerText = ""; // clear previous message

  // Validation
  if (!text || isNaN(delay) || delay < 0) {
    alert("Please enter valid text and delay (>= 0).");
    return;
  }

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  output.innerText = text;
});
