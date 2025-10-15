const btn = document.getElementById("clickMe");
btn.addEventListener("click", () => {
    let title = document.getElementById("title")
    title.textContent = "You clicked me!";
    title.style.color = "red";
    title.style.fontSize = '60px';
});
