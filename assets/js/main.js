function createCard(title, description, id) {
  const card = document.createElement("div");
  card.classList.add("card", "draggable");
  card.dataset.id = id;
  card.draggable = true;

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => removeCard(id));

  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(deleteBtn);
  return card;
}

function addDragEvents(card) {
  card.addEventListener("dragstart", () => {
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
}

function loadCards() {
  const savedCards = JSON.parse(localStorage.getItem("kanbanCards")) || [];
  savedCards.forEach((cardData) => {
    const card = createCard(cardData.title, cardData.description, cardData.id);
    addDragEvents(card);
    const column = document.querySelector(`.${cardData.column}.column`);
    if (column) {
      column.appendChild(card);
    }
  });
  return savedCards;
}

function saveCards(cards) {
  localStorage.setItem("kanbanCards", JSON.stringify(cards));
}
