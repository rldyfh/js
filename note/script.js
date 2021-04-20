const addBtn = document.querySelector(".add");
const notes = JSON.parse(localStorage.getItem("notes"));
// const notes = localStorage.getItem("notes");

if(notes){
    notes.forEach(note =>{
        addNewNote(note);
    })
}

function addNewNote(text=''){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<div class="tools">
    <button class="edit"><i class="far fa-edit"></i></button>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>
    <div class="main"></div>
    <textarea class="hidden"></textarea>`;
    
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    
    main.innerText = text;
    textArea.value = text;

    editBtn.addEventListener("click", () =>{
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });
    
    textArea.addEventListener("input", (e) =>{
        main.innerText = textArea.value;

        unpdateLS();
    });

    deleteBtn.addEventListener("click", () =>{
        note.remove();

        unpdateLS();
    });

    document.body.appendChild(note);
}

function unpdateLS(){
    const notes = [];

    const notesText = document.querySelectorAll("textarea");

    notesText.forEach(note => {
        notes.push(note.value);
    })

    localStorage.setItem("notes", JSON.stringify(notes));
    // localStorage.setItem("notes", notes);
}





addBtn.addEventListener("click", () => addNewNote());