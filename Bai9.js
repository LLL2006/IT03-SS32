let progress = 0;

function changeProgress(amount) {
  progress = Math.max(0, Math.min(100, progress + amount));

  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = progress + "%";

  let alpha = 0.2 + (progress / 100) * 0.8;
  progressBar.style.backgroundColor = `rgba(0, 128, 0, ${alpha})`;
}
