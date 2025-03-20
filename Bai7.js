function openModal(imgElement) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}