function addSubject() {
    let input = document.getElementById("subjectInput");
    let subjectName = input.value; 

    if (subjectName === "") {
        alert("Tên môn học không được để trống!");
        return;
    }

    let ol = document.getElementById("subjectList");
    let li = document.createElement("li");
    li.textContent = subjectName;
    ol.appendChild(li);

    input.value = "";
    input.focus(); 
}