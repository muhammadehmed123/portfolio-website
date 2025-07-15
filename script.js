// Show a welcome banner at the top with a close button
window.onload = function () {
  const banner = document.createElement("div");
  banner.innerHTML = `
    👋 Welcome to Muhammad Ahmed's DevOps Portfolio!
    <span style="float: right; cursor: pointer; font-weight: bold;" id="close-banner">❌</span>
  `;

  banner.style.backgroundColor = "#0d47a1";
  banner.style.color = "white";
  banner.style.padding = "10px 20px";
  banner.style.textAlign = "center";
  banner.style.fontSize = "16px";
  banner.style.fontWeight = "600";

  // Add banner to the top of the page
  document.body.prepend(banner);

  // Close button functionality
  document.getElementById("close-banner").addEventListener("click", () => {
    banner.remove();
  });
};

