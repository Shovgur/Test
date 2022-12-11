function openPopup(popup) {
  $(popup).show().attr("aria-hidden", "false");
  $("#closePopup").focus();
}

function closePopup(popup) {
  $(popup).hide().attr("aria-hidden", "true");
  $("#openMyPopup").focus();
}
function viewDiv() {

    document.getElementById("content1")
;
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "block";
}

const elTimer = document.querySelector("#timer");
setInterval(() => {
  elTimer.textContent = new Date().toLocaleDateString();
}, 1000);
