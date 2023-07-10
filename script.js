const sortableLIst = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Adding dragging class to item after a delay
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  // Removing dragging class from item on dragend event
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = sortableLIst.querySelector(".dragging");

  // Getting all items except currently dragging and creating an array of them
  const siblings = [...sortableLIst.querySelectorAll(".item:not(.dragging)")];

  // Finding the sibling after which the dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  sortableLIst.insertBefore(draggingItem, nextSibling);
};

sortableLIst.addEventListener("dragover", initSortableList);
sortableLIst.addEventListener("dragenter", (e) => e.preventDefault());
