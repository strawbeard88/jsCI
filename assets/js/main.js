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
