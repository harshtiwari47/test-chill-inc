document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("contextmenu", function (event) {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  });

  document.querySelector(".launch-btn").addEventListener("click",
    function () {
      window.open("https://yourbuyurl.com", "_blank");
    });

  function copyAddress() {
    const addressField = document.getElementById("contractAddress");
    addressField.select();
    addressField.setSelectionRange(0,
      99999); // For mobile devices

    navigator.clipboard.writeText(addressField.value).then(() => {
      alert("Contract Address Copied!");
    }).catch(err => console.error("Copy failed", err));
  }

  // Assign function to button
  document.querySelector(".contract-box button").addEventListener("click",
    copyAddress);
});