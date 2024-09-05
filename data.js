document.addEventListener("DOMContentLoaded", () => {
    const newData = document.getElementById("data");
    const storedData = localStorage.getItem("storedData");
    newData.textContent = storedData;
});