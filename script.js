const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        notesContainer.innerHTML = notes;
    }
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); // Update storage when a new note is created
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Update storage when a note is deleted
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Update storage when a note is edited
notesContainer.addEventListener("input", updateStorage);
