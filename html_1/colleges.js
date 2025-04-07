let currentSchool = "";

function openModal(school) {
  currentSchool = school;
  document.getElementById("modal-title").innerText = `Add Info for ${school}`;
  const existingInfo = document.getElementById(`info-${school}`).innerText;
  document.getElementById("modal-input").value = existingInfo || "";
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  currentSchool = "";
}

function saveInfo() {
  const input = document.getElementById("modal-input").value;
  document.getElementById(`info-${currentSchool}`).innerText = input;
  closeModal();
}

let cardCount = 4; // we already have 4 initial cards

document.getElementById("add-button").addEventListener("click", () => {
  const schoolName = prompt("Enter the name of the new school:");
  if (!schoolName) return;

  cardCount++;
  const id = `info-${schoolName.replace(/\s+/g, '-')}-${cardCount}`;

  const newCard = document.createElement("div");
  newCard.className = "card custom";
  newCard.style.background = "radial-gradient(circle, #333, #777)";
  newCard.innerHTML = `
    ${schoolName}<br><span>Click for more</span>
    <div class="info" id="${id}"></div>
  `;
  newCard.onclick = () => openModal(id, schoolName);

  document.querySelector(".grid").appendChild(newCard);
});

function openModal(idOrName, displayName = null) {
  currentSchool = idOrName;
  const title = displayName || idOrName;
  document.getElementById("modal-title").innerText = `Add Info for ${title}`;
  const existingInfo = document.getElementById(currentSchool)?.innerText || "";
  document.getElementById("modal-input").value = existingInfo;
  document.getElementById("modal").style.display = "flex";
}

function saveInfo() {
  const input = document.getElementById("modal-input").value;
  document.getElementById(currentSchool).innerText = input;
  closeModal();
}

